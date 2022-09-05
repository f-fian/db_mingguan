import bcrypt from "bcrypt";
import {Employee,sequelize} from "../model/model.js";
import jwt from "jsonwebtoken";


export const employee_sign_up = async (req,res)=>{

    await sequelize.sync()

    console.log("sampe sini")
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, 9)

        console.log(salt);
        console.log(hashedPassword);

        let user = { name: req.body.name, password: hashedPassword}

        Employee.create(user)

        res.status(201).send("berhasul")
    
    }catch(error){
        res.status(500).send(error)
    }
}

export const employee_login = async (req,res)=>{


    // const user = users.find((data)=> data.name == req.body.name)
    console.log(req.body.name)

    let name = req.body.name
    let find_data = {name:name}
    
    
    const user = await Employee.findOne({
        where:find_data
    })


    
    let employee = {
        name:user.dataValues.name,
        employee_id:user.dataValues.id
    }

    if (!user){
        res.send("Cant find Employee")
    }

    let password = user.dataValues.password

    console.log("sampe sini");

    try {
        if (await bcrypt.compare(req.body.password,password)){
            console.log("Employee has login succesfully")
        } else{
            res.send("The Passworrd you give is incorrect")
        }
    }catch{
        res.status(500).send("internal server error. proses bcrypt salah ")
    }

    
    
    const accesToken = jwt.sign(employee,"123456789")

    res.status(200)
    res.json({
        accesToken,
    })
}
