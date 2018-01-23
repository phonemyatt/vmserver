"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
//const moment = require('moment');
const moment = require("moment");
const nodemailer = require('nodemailer');
const accountname = functions.config().emailaccount.username;
const accountpassword = functions.config().emailaccount.password;
const smtpconfig = {
    host: 'smtp.anewtech.com.sg',
    port: 25,
    secure: false,
    auth: {
        user: accountname,
        pass: accountpassword
    }
};
const smtpTransport = nodemailer.createTransport(smtpconfig, { from: 'Phonemyatt <phonemyatt.anewtech.com.sg>' });
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const twilio = require("twilio");
const accountSid = functions.config().twilio.sid;
const authToken = functions.config().twilio.token;
const client = new twilio(accountSid, authToken);
const twilioNumber = '+13213166744';
exports.testrequest = functions.https.onRequest((req, res) => {
    res.status(200).send('Success from firebase');
});
exports.echopost = functions.https.onRequest((req, res) => {
    console.log(req.body);
    if (req.method !== 'POST') {
        res.status(400).send('Dont post it wrong');
        return;
    }
    if (req.get('Content-Type')) {
        console.log('Content-Type: ' + req.get('Content-Type'));
        res.status(200).type(req.get('Content-Type')).send(req.body);
    }
});
exports.timenow = functions.https.onRequest((req, res) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method !== 'GET') {
        res.status(403).send('Forbidden!');
        return;
    }
    res.status(200).send(moment().toISOString());
});
exports.sendsms = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        // store send sms date and time for database
        //console.log(req);
        //console.log(res);
        if (req.method !== 'POST') {
            res.status(400).send('Dont anyhow send sms');
            return;
        }
        ;
        if (!validE164(req.body.sms)) {
            throw new Error('number must be E164 format!');
        }
        // req body with sms is true
        if (req.get('Content-Type')) {
            const phoneMessage = req.body.text;
            const phoneNumber = req.body.sms;
            console.log(`${phoneMessage} - ${phoneNumber}`);
            res.status(200).type(req.get('Content-Type')).send(req.body);
            const textMessage = {
                to: phoneNumber,
                from: twilioNumber,
                body: phoneMessage,
            };
            return client.messages.create(textMessage).then(data => {
                console.log('Success');
            }).catch(err => {
                console.log(err);
            });
        }
        ;
    });
});
//mailer
exports.sendmail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        console.log(`${accountname} - ${accountpassword}`);
        if (req.method !== 'POST') {
            res.status(400).send('Dont anyhow send email');
            return;
        }
        ;
        smtpTransport.verify((error, succss) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Server is ready to take our messages');
            }
        });
        const message = {
            to: req.body.emailto,
            subject: 'Hello ✔ from Visitor Management System',
            text: 'Hello Email?',
            html: '<b>Hello Email?<b>'
        };
        smtpTransport.sendMail(message, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(400).send('Error Send Mail ' + error.message);
            }
            return res.status(200).send('Success Send Mail ' + nodemailer.getTextMessageUrl(info));
        });
    });
});
/// Validate E164 format
function validE164(num) {
    return /^\+?[1-9]\d{1,14}$/.test(num);
}
exports.validE164 = validE164;
//# sourceMappingURL=index.js.map