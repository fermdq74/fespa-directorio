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
const graphqlColaboradores = require('./appColaboradores.js');

module.exports.getAsociados = functions.https.onRequest(async (request, response) => {
   response.header('Access-Control-Allow-Origin', '*');

   const socios = await graphqlSocios.getAsociados();
   response.json(socios);

});

module.exports.getAsociado = functions.https.onRequest(async (request, response) => {
   response.header('Access-Control-Allow-Origin', '*');

   const idAsociado = request.query.id; // id for test 'rec6SBf2K65409UZb';
   const resp = await graphqlSocios.getAsociado( idAsociado );
   response.json(resp);

});

module.exports.getColaboradores = functions
   .runWith({
      timeoutSeconds: 540,
      memory: '256MB'
   })
   .https.onRequest(async (request, response) => {
      response.header('Access-Control-Allow-Origin', '*');

      const colaboradores = await graphqlColaboradores.getColaboradores();
      response.json(colaboradores);

   });

module.exports.getColaborador = functions.https.onRequest(async (request, response) => {
   response.header('Access-Control-Allow-Origin', '*');

   const idColaborador = request.query.id; // id for test 'recLGJ26RWuvNmrcS';
   const resp = await graphqlColaboradores.getColaborador( idColaborador );
   response.json(resp);

});