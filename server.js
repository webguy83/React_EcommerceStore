const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const transport = {
    service: 'hotmail',
    auth: {
        user: process.env.HOTMAIL_USER,
        pass: process.env.HOTMAIL_PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server is good to go!")
    }
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if (error) {
        throw error;
    }
    console.log(`Server is off and running woohoo! On port ${port}`);
})

app.post('/payment', (req, res) => {
    const { token, amount } = req.body;
    const body = {
        source: token.id,
        amount: amount,
        currency: 'cad'
    }

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })
})

app.post('/contactsubmit', (req, res) => {
    const { firstName, lastName, email, phoneNumber, comments } = req.body;

    const content = `
        <h1>User Data</h1>
        <ul>
            <li>First Name: ${firstName}</li>
            <li>Last Name: ${lastName}</li>
            <li>Email: ${email}</li>
            <li>Phone Number: ${phoneNumber}</li>
            <li>Comments: ${comments}</li>
        </ul>
    `

    const mail = {
        from: `Photos of Asia`,
        to: `${process.env.HOTMAIL_USER}`,
        subject: "Contact form request - Photos of Asia",
        html: content
    }

    transporter.sendMail(mail, (err) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})