import { Order,OrderDetail,Employee,MenuList,sequelize,MenuType} from "./model/model.js";



sequelize.sync().then(async ()=>{

    await MenuType.create({
        type : "makanan",
    })
    await MenuType.create({
        type : "minuman",
    })

    await MenuList.create({
        name : "Nasi bakar1",
        price:12000,
        menuTypeId:1
    })

    await Employee.create({
        name:"alfian",
        password:"890"
    })

    
})