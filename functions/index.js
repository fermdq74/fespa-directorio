/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
require('dotenv').config();
const functions = require('firebase-functions');
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const graphqlSocios = require('./appSocios.js');

exports.helloWorld = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
});

module.exports.getAsociados = functions.https.onRequest(async (request, response) => {
   response.header('Access-Control-Allow-Origin', '*');

   const socios = await graphqlSocios.getAsociados();
   response.json(socios);
   //console.log(socios);
   return 'ok';
});

module.exports.getAsociado = functions.https.onRequest(async (request, response) => {
   response.header('Access-Control-Allow-Origin', '*');

   const idAsociado = request.params() request.id;
   //const idAsociado = 'rec6SBf2K65409UZb';
   const socio = await graphqlSocios.getAsociado( idAsociado );
   response.json(socio);
   //console.log(socios);
   return 'ok';
});
