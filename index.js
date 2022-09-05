
import express from "express";
import { transaksi,authenticateToken} from "./route/transaction.js";
import { employee_sign_up,employee_login} from "./route/employee.js";
import {insert_menu,get_menu,get_menu_id,delete_menu_id,update_menu_id} from "./route/menu.js"


const port = 3010
const app = express()
app.use(express.json())


// app.get("/",sesuatu)

app.post("/employee/order/post",authenticateToken,transaksi)
app.post("/employee/signup",employee_sign_up)
app.post("/employee/login",employee_login)

app.post("/employee/menu",authenticateToken,insert_menu) // masukan menu
app.get("/employee/menu/get",authenticateToken,get_menu) // get menu all
app.get("/employee/menu/get/:id",authenticateToken,get_menu_id) // get menu by Id
app.delete("/employee/menu/delete/:id",authenticateToken,delete_menu_id) // delete menu by id
app.put("/employee/menu/update/:id",authenticateToken,update_menu_id) // update menu by id. Masukan data baru(name and price) di query param

app.listen(port,function(){
    console.log(`server berjalan di port ${port}`)
})