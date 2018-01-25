"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
//const moment = require('moment');
const moment = require("moment-timezone");
const crypto = require("crypto");
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
};
const smtpTransport = nodemailer.createTransport(smtpconfig, { from: `"Admin" <${accountname}>` });
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const visitorColRef = db.collection('visitors', ref => ref.orderBy('__name__'));
const visitorRef = db.collection('visitors');
// const hostColRef = db.collection('hosts', ref => ref.orderBy('__name__'));
// const hostRef = db.collection('hosts');
const logColRef = db.collection('logs', ref => ref.orderBy('__name__'));
const logRef = db.collection('logs');
const twilio = require("twilio");
const accountSid = functions.config().twilio.sid;
const authToken = functions.config().twilio.token;
const client = new twilio(accountSid, authToken);
const twilioNumber = '+13213166744';
exports.testrequest = functions.https.onRequest((req, res) => {
    return res.status(200).send('Success from firebase');
});
exports.echopost = functions.https.onRequest((req, res) => {
    // console.log(req.body);   
    if (req.method !== 'POST') {
        return res.status(400).send('Dont post it wrong');
    }
    ;
    if (req.get('Content-Type')) {
        console.log('Content-Type: ' + req.get('Content-Type'));
        return res.status(200).type('application/json').send(req.body);
    }
    ;
    return res.status(404).send('Not JSON!');
});
exports.timenow = functions.https.onRequest((req, res) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method !== 'GET') {
        return res.status(400).send('Dont call it wrong');
    }
    ;
    // const mytime = {
    //     timenow: moment().tz('Asia/Singapore').format()
    // };
    // return res.status(200).type('application/json').send( mytime );
    return res.status(200).send(moment().tz('Asia/Singapore').format());
});
exports.sendsms = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        // store send sms date and time for database 
        if (req.method !== 'POST') {
            return res.status(400).send('Dont anyhow send sms');
        }
        ;
        if (!validE164(req.body.sms)) {
            throw new Error('number must be E164 format!');
        }
        // req body with sms is true
        if (req.get('Content-Type')) {
            const phoneMessage = req.body.text;
            const phoneNumber = req.body.sms;
            res.status(200).type('application/json').send(req.body);
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
        }
        ;
        return res.status(404).send('Not JSON!');
    });
});
//mailer
exports.sendmail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        if (req.method !== 'POST') {
            return res.status(400).send('Dont anyhow send email');
        }
        ;
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
        if (req.get('Content-Type')) {
            const emailto = req.body.emailto;
            const emailMessage = req.body.text;
            res.status(200).type('application/json').send(req.body);
            const email = {
                to: emailto,
                subject: 'Hello ✔ from Visitor Management System',
                text: emailMessage,
                html: `<b>${emailMessage}<b>`
            };
            return smtpTransport.sendMail(email, (err, info) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send('Error Send Mail ' + err.message);
                }
                else {
                    return res.status(200).send('Success Send Mail ' + nodemailer.getTextMessageUrl(info));
                }
            });
        }
        ;
        return res.status(404).send('Not JSON!');
    });
});
exports.postlogin = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        if (req.method !== 'POST') {
            return res.status(400).type('application/json').send('Dont anyhow login');
        }
        ;
        if (req.get('Content-Type')) {
            // randomtoken to generate visitor tokens. 6 values
            const loginModel = {
                timein: req.body.timenow || '',
                host: req.body.hostid || '',
                vtoken: randomtoken(6)
            };
            const visitorModel = {
                imgpath: req.body.imgpath || 'https://s3.amazonaws.com/uifaces/faces/twitter/linux29/128.jpg',
                name: req.body.name || '',
                position: req.body.position || '',
                company: req.body.company || '',
                ic: req.body.ic || '',
                email: req.body.email || '',
                hp: req.body.hp || '',
                address: req.body.address || ''
            };
            res.status(200).type('application/json').send(req.body);
            // add to visitor, update visitor id
            // add to log with visitor id, update log id, 
            return visitorColRef.add(visitorModel).then(x => {
                visitorRef.doc(x.id).update({
                    id: x.id
                });
                return logColRef.add(loginModel).then(y => {
                    logRef.doc(y.id).update({
                        id: y.id,
                        visitor: x.id
                    });
                    console.log('Log added');
                });
            });
        }
        ;
        return res.status(404).send('Not JSON!');
    });
});
exports.postlogout = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        if (req.method !== 'POST') {
            return res.status(400).type('application/json').send('Dont anyhow login');
        }
        ;
        if (req.get('Content-Type')) {
            // const timeout = req.body.timenow || '';
            // const token = req.body.token || '';
            // const name = req.body.name || '';            
            // const hp = req.body.number || '';
            res.status(200).type('application/json').send(req.body);
        }
        ;
        return res.status(404).send('Not JSON!');
    });
});
/// Validate E164 format
function validE164(num) {
    return /^\+?[1-9]\d{1,14}$/.test(num);
}
exports.validE164 = validE164;
// Random token generator with crypto
function randomtoken(howMany) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const rand = crypto.randomBytes(howMany);
    const value = new Array(howMany);
    const len = chars.length;
    for (let i = 0; i < howMany; i++) {
        value[i] = chars[rand[i] % len];
    }
    ;
    return value.join('');
}
exports.randomtoken = randomtoken;
// export const example = functions.https.onRequest( (req, res) => {
//     cors(req, res, () => {
//         res.header('Content-Type','application/json');
//         res.header('Access-Control-Allow-Origin', '*');
//         res.header('Access-Control-Allow-Headers', 'Content-Type');
//         if ( req.method !== 'POST' ) {
//             return res.status(400).type('application/json').send('Dont anyhow login');
//         }
//         return res.status(404).send('Not JSON!');
//     })
// });
//# sourceMappingURL=index.js.map