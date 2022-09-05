


import { Order,OrderDetail,Employee,MenuList,MenuType,sequelize } from "../model/model.js";
import { getOrderNumber } from "./controller.js";
import jwt from "jsonwebtoken";

export const sesuatu = (req,res)=>{
    res.send("udah jalan heheheheh")
}

export function authenticateToken(req,res,next){

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]



    if (token==null) return res.status(401).send()

    
    jwt.verify(token,"123456789",(err,user)=>{
        if (err) {
            res.status(403).send("Token yang dimasukan salah")
        }
        console.log("XXX")

        req.employee_id = user.employee_id

        next()
    })
}

export const transaksi = (req,res)=>{

    sequelize.sync().then(async ()=>{
           // make transaction 

            Employee.hasMany(Order,{
            foreignKey:"employee_id"
            })
        
            Order.hasMany(OrderDetail,{
                foreignKey:"order_id"
            })
        
            MenuList.hasMany(OrderDetail,{
                foreignKey:"menu_id"
            })
        
            MenuType.hasMany(MenuList,{
                foreignKey:"menuTypeId"
            })

            console.log(req.employee_id)

            let order_number = getOrderNumber()
            let sum_price = req.body.quantity * req.body.unit_price
            const t = await sequelize.transaction();

            try {

            console.log("sampe sini")

            const data_order = await Order.create({
                id:req.body.id,
                order_number:order_number,
                table_number:req.body.table_number,
                total_price:req.body.total_price,
                employee_id:req.employee_id

            }, { transaction: t });

            const data_order_detail = await OrderDetail.create({
                
                unit_price:req.body.unit_price,
                quantity:req.body.quantity,
                sum_price:sum_price,
                menu_id:req.body.menu_id,
                order_id:order_number

            }, { transaction: t });

            console.log("sebelum commit")
            // If the execution reaches this line, no errors were thrown.
            // We commit the transaction.
            await t.commit();

            } catch (error) {
                
            // If the execution reaches this line, an error was thrown.
            // We rollback the transaction.
                console.log(error)
                await t.rollback();
            }

    })
 
}