

const express=require("express")

const app=express()

app.get("/products",(req,res)=>{
    res.send({
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    })
})

app.get("/user",(req,res)=>{
    res.send("bye")
})

app.listen(3000,()=>{
   console.log("listening to the port")
})
   
