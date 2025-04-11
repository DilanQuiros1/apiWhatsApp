const whatsAppService = require("../services/whatsappService");
const samples = require("../shared/sampleModels");
const VerifyToken = (req, res) => {
  try {
    var accessToken = "TOKIASJAPGHDSTWFASAERP10";
    var token = req.query["hub.verify_token"];

    var challenge = req.query["hub.challenge"];

    console.log(messageObject);

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (e) {
    res.status(400).send();
  }
};

const ReceivedMessage = (req, res) => {
  try {
    var entry = req.body["entry"][0];
    var changes = entry["changes"][0];
    var value = changes["value"];
    var messageObject = value["messages"];

    if (typeof messageObject != "undefined") {
      var messages = messageObject[0];
      var number = messages["from"];
      var text = GetTextUser(messages);
      if (text == "text") {
        var data = samples.SampleText("Hola usuario ", number);
        whatsAppService.SendMessageWhatsApp(data);
      } else if (text == "image") {
        var data = samples.SampleImage(number);
        whatsAppService.SendMessageWhatsApp(data);
      } else if (text == "video") {
        var data = samples.SampleAudio(number);
        whatsAppService.SendMessageWhatsApp(data);
      } else if (text == "audio") {
        var data = samples.SampleAudio(number);
        whatsAppService.SendMessageWhatsApp(data);
      } else if (text == "document") {
        var data = samples.SampleDocument(number);
        whatsAppService.SendMessageWhatsApp(data);
      } else if (text == "button") {
        var data = samples.SampleButtons(number);
        whatsAppService.SendMessageWhatsApp(data);
      } else if (text == "list") {
        var data = samples.SampleList(number);
        whatsAppService.SendMessageWhatsApp(data);
      } else if (text == "location") {
        var data = samples.SampleLocation(number);
        whatsAppService.SendMessageWhatsApp(data);
      } else {
        var data = samples.SampleText("No entiendo ", number);
        whatsAppService.SendMessageWhatsApp(data);
      }

      console.log(text);
    }

    res.send("EVENT_RECEIVED");
  } catch (e) {
    console.log(e);

    res.send("EVENT_RECEIVED");
  }
};

function GetTextUser(messages) {
  var text = "";
  var typeMessage = messages["type"];

  if (typeMessage == "text") {
    text = messages["text"]["body"];
  } else if (typeMessage == "interactive") {
    var interactiveObject = messages["interactive"];
    var typeInteractive = interactiveObject["type"];

    // myConsole.log(interactiveObject);

    if (typeInteractive == "button_reply") {
      text = interactiveObject["button_reply"]["title"];
    } else if (typeInteractive == "list_reply") {
      text = interactiveObject["list_reply"]["title"];
    } else {
      console.log("Sin mensaje");
    }
  } else {
    console.log("Sin mensaje");
  }
  return text;
}

module.exports = {
  VerifyToken,
  ReceivedMessage,
};
