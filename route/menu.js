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

export const get_menu = async (req,res)=>{
    let data_menu = await MenuList.findAll()

    // let data = menu.dataValues

    console.log(data_menu)

    if(data_menu){
        res.status(200).json({
            message:"Data Menu telah di dapatkan",
            menu:data_menu
        })
    } else {
        res.status(400).send("Terjadi kesalahan, Menu yang dicari tidak ada")
    }
}

export const get_menu_id = async (req,res)=>{
    let menu_id = req.params.id
    const data_menu = await MenuList.findOne({
        where:{
            id:menu_id
        }
    })
    // let data = menu.dataValues
    console.log(data_menu)
    if(data_menu){
        res.status(200).json({
            message:"Data Menu telah di dapatkan",
            menu:data_menu
        })
    } else {
        res.status(400).send("Terjadi kesalahan, Menu yang dicari tidak ada")
    }
}

export const delete_menu_id = async (req,res)=>{

    let menu_id = req.params.id
    const status = await MenuList.destroy({
        where:{
            id:menu_id
        }
    })
    // let data = menu.dataValues
    console.log(status)
    console.log(status)
    console.log(status)
    if(status == 1){
        res.status(200).json({
            message:"Menu Telah berhasil dihapus",
        })
    } else {
        res.status(400).send("Menu yang ingin dihapus tidak ada")
    }
}

export const update_menu_id = async (req,res)=>{

    let menu_id = req.params.id
    let menu_name = req.query.name
    let menu_price = req.query.price

    const menu_update = await MenuList.update(
        {   
            name:menu_name,
            price:menu_price
        },
        {
        where:{
            id:menu_id
        }
    })

    console.log(menu_update)

    if(menu_update){
        res.status(200).json({
            message:"Data Menu Telah berhasil dirubah",
        })
    } else {
        res.status(400).send("Menu Tidak berhasil dirubah")
    }
}