const express = require("express");

const router = express.Router();
const WhatsAppController = require("../controllers/whatsappControllers");

router
  .get("/", WhatsAppController.VerifyToken) //get para verificar token
  .post("/", WhatsAppController.ReceivedMessage); //para recibir mensajes

module.exports = router;
