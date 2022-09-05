import {MenuList} from "../model/model.js";


export const insert_menu = async (req,res)=>{


    const new_menu = await MenuList.create({
        name:req.body.name,
        price:req.body.price,
        menuTypeId:req.body.menuTypeId
    })

    let data = new_menu.dataValues

    if(new_menu){
        res.status(201).json({
            message:"Menu Baru telah di tambahkan",
            menu:data
        })
    }


}