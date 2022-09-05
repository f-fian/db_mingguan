import { Order,OrderDetail,Employee,MenuList,MenuType,sequelize } from "./model/model.js";

async function db_delete(){

    await OrderDetail.drop()
    await Order.drop()
    await MenuList.drop()
    await MenuType.drop()
    await Employee.drop()

}

db_delete()