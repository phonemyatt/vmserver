import * as functions from 'firebase-functions';
//const moment = require('moment');
import * as moment from 'moment';

const nodemailer = require('nodemailer');

const accountname = functions.config().emailaccount.username;
const accountpassword = functions.config().emailaccount.password;

const smtpconfig = {
    host: 'smtp.anewtech.com.sg',
    port: 587,
    secure: false,
    auth: {
        user: accountname,
        pass: accountpassword
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
}

const smtpTransport = nodemailer.createTransport(smtpconfig,
{from: `"Admin" <${accountname}>`});

const cors = require('cors')({origin: true});

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

import * as twilio from 'twilio';
const accountSid = functions.config().twilio.sid;
const authToken = functions.config().twilio.token;

const client = new twilio(accountSid,authToken);
const twilioNumber = '+13213166744';

export const testrequest = functions.https.onRequest((req, res) => {   
    res.status(200).send('Success from firebase');
});

export const echopost = functions.https.onRequest((req, res) => {
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

export const timenow = functions.https.onRequest((req, res) => {
    res.header('Content-Type', 'application/json');     
    res.header('Access-Control-Allow-Origin', '*');     
    res.header('Access-Control-Allow-Headers', 'Content-Type');  
    
    if ( req.method !== 'GET') {
        res.status(403).send('Forbidden!');
        return;
    }
    res.status(200).send( moment().toISOString() );

});

export const sendsms = functions.https.onRequest((req,res) => {      
    cors(req, res, () => {    
        res.header('Content-Type', 'application/json');     
        res.header('Access-Control-Allow-Origin', '*');     
        res.header('Access-Control-Allow-Headers', 'Content-Type');  
    // store send sms date and time for database 

    if ( req.method !== 'POST' ) {
        res.status(400).send('Dont anyhow send sms');
        return;
    };
    if ( !validE164( req.body.sms ) ) {        
        throw new Error('number must be E164 format!');    
    }
        
        // req body with sms is true
    if ( req.get('Content-Type') ) {
        const phoneMessage = req.body.text;
        const phoneNumber = req.body.sms;        
        res.status(200).type(req.get('Content-Type')).send( req.body );
        const textMessage = {
        to: phoneNumber,
        from: twilioNumber,
        body: phoneMessage,
        };
    return client.messages.create(textMessage).then(data => {
        // success go to database
        console.log('Success');
        }).catch(err => {
            // error record in database
            console.log(err);
            });
    };    

    });
});

//mailer
export const sendmail = functions.https.onRequest( (req, res) => {
    cors(req,res, () => {

        res.header('Content-Type', 'application/json');     
        res.header('Access-Control-Allow-Origin', '*');     
        res.header('Access-Control-Allow-Headers', 'Content-Type');  

        if ( req.method !== 'POST' ) {
            res.status(400).send('Dont anyhow send email');
            return;
        };

        // for verification purpose
        // smtpTransport.verify((error, succss) => {
        //     if ( error ) {
        //         // verification error                
        //         res.status(400).send('Cant verifiy');
        //         return;             
        //     }
        //     else {
        //         console.log('Server is ready to send message');
        //     }           
        // });

        if ( req.get('Content-Type') ) {
            const emailto = req.body.emailto;
            const emailMessage = req.body.text;
            res.status(200).type(req.get('Content-Type')).send( req.body );
            const email = {         
                to: emailto,
                subject: 'Hello ✔ from Visitor Management System',
                text: emailMessage,
                html: `<b>${emailMessage}<b>`
            };
            return smtpTransport.sendMail(email, (err,info) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send('Error Send Mail '+ err.message);
                } else {
                    return res.status(200).send('Success Send Mail ' + nodemailer.getTextMessageUrl(info));
                }            
            });
        }       
    }) ;
});


/// Validate E164 format
export function validE164( num ) {
    return /^\+?[1-9]\d{1,14}$/.test(num)
}

