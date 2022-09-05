
import express from "express";

import { transaksi,authenticateToken} from "./route/transaction.js";
import { employee_sign_up,employee_login} from "./route/employee.js";

import {insert_menu} from "./route/menu.js"


const port = 3010


const app = express()


app.use(express.json())


// sequelize.drop()

// app.get("/",sesuatu)

app.post("/order/post",authenticateToken,transaksi)

app.post("/employee/signup",employee_sign_up)

app.post("/employee/login",employee_login)

app.post("/employee/menu",authenticateToken,insert_menu)






app.listen(port,function(){
    console.log(`server berjalan di port ${port}`)
})