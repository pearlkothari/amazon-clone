const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51JSQQbSJspC6yXhC9aVAcTSsOMAu1BUfDUXAPm1E4IjXFbmPGnPRR7EjejIfHhxc32zN9LwfsflwIvNECTJAD76h00ZWIw0Xxg"
)

//API

//APP Config
const App=express();

// Middlewares
App.use(cors({origin:true}));
App.use(express.json());

//API routes
App.get('/',(request,response)=>response.status(200).send('Hello World'))
App.post('/payments/create?',async (request,response)=>{
    const total=request.query.total;
    console.log('Payment Request Recieved ',total);

    const paymentIntent =await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });

    response.status(200).send({
        clientSecret:paymentIntent.client_secret,
    })
})
// Listen Command
exports.api = functions.https.onRequest(App);