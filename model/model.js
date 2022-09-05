import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'final_test',
    'root',
    '1234567',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});



export const MenuType = sequelize.define("menu_type",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    type:{
        type:Sequelize.STRING
    }
},{paranoid:true,}
)



export const MenuList = sequelize.define("menu_list",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    // menuTypeId foreign key
    },
    name:{
        type:Sequelize.STRING,
        unique:true
    },
    price:{
        type:Sequelize.INTEGER
    }

},{paranoid:true,}
)

export const OrderDetail = sequelize.define("order_detail",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    
    unit_price:{
        type:Sequelize.INTEGER
    },
    quantity:{
        type:Sequelize.INTEGER
    },
    sum_price:{
        type:Sequelize.INTEGER
    }

    // order id foreign key
    
    // menu id foreign key
},{paranoid:true,}
)



export const Order = sequelize.define("order",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    // employeeid foreign_key
    order_number:{
        type:Sequelize.STRING,
        unique:true
    },
    // order_date:{
    //     type:Sequelize.DATEONLY
    // },
    table_number:{
        type:Sequelize.INTEGER
    },
    total_price:{
        type:Sequelize.INTEGER
    }
},{
    paranoid:true,
    createdAt:"order_date"}
)




export const Employee = sequelize.define("employee",{
    
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    umur:{
        type:Sequelize.INTEGER
    },
    alamat:{
        type:Sequelize.STRING
    }
},{paranoid:true,}
)


// list relasi
Employee.hasMany(Order,{
    foreignKey:"employee_id"
})
Order.hasMany(OrderDetail,{
    foreignKey:"order_id",
    sourceKey:"order_number"
})
MenuList.hasMany(OrderDetail,{
    foreignKey:"menu_id"
})
MenuType.hasMany(MenuList,{
    foreignKey:"menuTypeId"
})
    





// let menu_type = [
//     {type:"makanan"},
//     {type:"minuman"}
// ]

// let menu_list = {
//     name : "Nasi bakar",
//     price:12000,
//     MenuTypeId:1

// }





// OrderDetail.drop()
// Order.drop()
// MenuList.drop()
// MenuType.drop()
// Employee.drop()




// sequelize.sync({force:true}).then( async ()=>{

//     // const data_order = await Order.create({
//     //     id:1,
//     //     order_number:1,
//     //     order_date:"2000",
//     //     table_number:1,
//     //     total_price:1,
//     //     employee_id:1

//     // });

//     // console.log(data_order)

// })















// User.hasMany(Patient,{
//     foreignKey:"USERUSERUSERUSER"
// });



// Patient.belongsTo(User);

// // Patient.belongsTo(User);








// sequelize.sync().then( async ()=>{


//     const t = await sequelize.transaction();

//     try {

//   // Then, we do some calls passing this transaction as an option:
//   let date = new Date()
//   const user = await User.create({
    
//     name: 'rtz1',
//     age: 99,
//     birthDate:date
//   }, { transaction: t });

//   const patient = await Patient.create({
//     name: 'Bart',
//     address: 'Simpson',
//     phone:"089767"
//   }, { transaction: t });

//   // If the execution reaches this line, no errors were thrown.
//   // We commit the transaction.
//   await t.commit();

// } catch (error) {

//   // If the execution reaches this line, an error was thrown.
//   // We rollback the transaction.
//   await t.rollback();

// }















    // console.log("1")
    // await Patient.findAll().then(data=>console.log(data))
    // console.log("2")
    // let date = new Date()
    // let year = date.getFullYear()
    // User.create({
    //     name:"tyu",
    //     age:24,
    //     birthDate:"alfian alamsyah"
    // }).then((user)=>{
    //     console.log(user)
    // })

    // User.destroy({
    //     where : {
    //         id:3
    //     }
    // })


    
    


    // User.findAll({
    //     where :{
    //         id:2
    //     },
    //     include:[{
    //         model:Patient

    //     }]
    // }).then((data)=>console.log(data))


   // Patient.create({
    //     name:"alfian ganteng",
    //     address:"amerika",
    //     phone:"0856"
    // }).then((user)=>{
    //     console.log(user)
    // })


   

    // let user = await Patient.findAll({

        
    // })
    
    // console.log(user)

    // let alfian = await user[0].dataValues.patients

    // for (data of alfian){
    //     console.log(data.dataValues)
    // }

    

   
    // for (xx of alfian){
    //     console.log(xx.dataValues["name"])
    // }

    // for (let nama of user){
    //     console.log(nama.patients)
    // }

// })




// contoh untuk bikin table paranoid

// sequelize.define(
//     'example',
//     {
//       id: {
//         type: DataTypes.UUID,
//         allowNull: false,
//         primaryKey: true,
//         unique: true,
//         defaultValue: sequelize.literal('uuid_generate_v1()'),
//       }
//     },
//     {
//       tableName: 'example',
//       createdAt: 'created_at',
//       updatedAt: 'updated_at',
//       deletedAt: 'deletedAt',
//       paranoid: true,
//       timestamps: true,
//     },
// );


// contoh hard dekete
// app.delete('/post/:id', async (req, res) => {
//     try {
//       await db.Post.destroy({
//         where: {
//           id: req.params.id
//         },
//         force: true
//       });
//       res.send('deleted');
//     } catch (err) {
//       res.send(err.message);
//     }
//   });


// make transaction 

// const t = await sequelize.transaction();

// try {

//   // Then, we do some calls passing this transaction as an option:

//   const user = await User.create({
//     firstName: 'Bart',
//     lastName: 'Simpson'
//   }, { transaction: t });

//   await user.addSibling({
//     firstName: 'Lisa',
//     lastName: 'Simpson'
//   }, { transaction: t });

//   // If the execution reaches this line, no errors were thrown.
//   // We commit the transaction.
//   await t.commit();

// } catch (error) {

//   // If the execution reaches this line, an error was thrown.
//   // We rollback the transaction.
//   await t.rollback();

// }