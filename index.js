
const express=require('express');
const mongoose=require('mongoose');
const sessionController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController=require("./controller/user-controller")
const vehicleController=require("./controller/vehicle-controller")
const paymentController=require("./controller/payment-controller")
const insuranceController=require("./controller/insurance-controller")
const rentCostController=require("./controller/rentCost-controller")
const bookingController=require("./controller/booking-controller")
const billController=require("./controller/bill-controller")


const port=3000;
const app= express()


app.use(express.json())  //mobile-----accept json data and setinto body             --->globle middlewar
app.use(express.urlencoded({extended:true})) //web---accept url data and set into body


//database connection

//connection and it also create new database if not exist
mongoose.connect('mongodb://localhost:27017/rentright1',(error)=>{
    if(error){
        console.log("mongo not connected.....")
        console.log(error);
    }else{
        console.log('mongo connected');
    }
})


//urls

app.get('/',(req,res)=>{
    res.send("Welcome to harvijaysinh's website" )
})


//session

app.get('/login',sessionController.login)
app.get('/signup',sessionController.signup)
app.get('/saveuser',sessionController.saveUser)

//role

app.post('/roles',roleController.addRole)
app.get('/roles',roleController.getAllRoles)
app.delete('/roles/:roleId',roleController.deleteRole)
app.put('/roles/:roleId',roleController.updateRole)

//user

app.post('/users',userController.addUser)
app.get('/users',userController.getAllUsers)
app.delete('/users/:userId',userController.deleteUser)
app.put('/users/:userId',userController.updateUser)
app.post('/login',userController.login)

//vehicle

app.post('/vehicles',vehicleController.addVehicle)
app.get('/vehicles',vehicleController.getAllVehicle)
app.delete('/vehicles/:vehicleId',vehicleController.deleteVehicle)
app.put('/vehicles/:vehicleId',vehicleController.updateVehicle)

//payment

app.post('/payments',paymentController.addPayment)
app.get('/payments',paymentController.getAllPayment)
app.delete('/payments/:paymentId',paymentController.deletePayment)
app.put('/payments/:paymentId',paymentController.updatePayment)

//insurance

app.post('/insurances',insuranceController.addInsurance)
app.get('/insurances',insuranceController.getAllInsurance)
app.delete('/insurances/:insuranceId',insuranceController.deleteIncurance)
app.put('/insurances/:insuranceId',insuranceController.updateInsurance)

//booking

app.post('/bookings',bookingController.addBooking)
app.get('/bookings',bookingController.getAllBooking)
app.delete('/bookings/:bookingId',bookingController.deleteBooking)
app.put('/bookings/:bookingId',bookingController.updateBooking)

//rentCost

app.post('/rentCosts',rentCostController.addRentCost)
app.get('/rentCosts',rentCostController.getAllRentCost)
app.delete('/rentCosts/:rentCostId',rentCostController.deleteRentCost)
app.put('/rentCosts/:rentCostId',rentCostController.updateRentCost)

//bill

app.post('/bills',billController.addBill)
app.get('/bills',billController.getAllBill)
app.delete('/bills/:billId',billController.deleteBill)
app.put('/bills/:billId',billController.updateBill)

app.listen(port,()=>{
    console.log(`hello server started on ${port} `);
})