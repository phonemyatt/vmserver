import * as functions from 'firebase-functions';
//const moment = require('moment');
import * as moment from 'moment';
//const cors = require('cors')({origin: true});
import * as cors from 'cors';
const options: cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false
}
cors(options);

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
    
    if ( req.method !== 'GET') {
        res.status(403).send('Forbidden!');
        return;
    }
    res.status(200).send( moment().toISOString() );

});

export const sendsms = functions.https.onRequest((req,res) => {
    cors( req, res, () => {
   
    if ( req.method !== 'POST' ) {
        res.status(400).send('Dont anyhow send sms');
        return;
    };
    if ( !validE164( req.body.sms) ) {
        throw new Error('number must be E164 format!');    
    }
        
        // req body with sms is true
    if ( req.get('Content-Type') ) {
        const phoneMessage = req.body.text;
        const phoneNumber = req.body.sms;
        console.log(`${phoneMessage} - ${phoneNumber}`);
        res.status(200).type(req.get('Content-Type')).send( req.body );
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
    };    

    });
});

/// Validate E164 format
export function validE164( num ) {
    return /^\+?[1-9]\d{1,14}$/.test(num)
}

