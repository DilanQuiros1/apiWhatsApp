function SampleText(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "text",
    text: {
      body: textResponse,
    },
  });

  return data;
}

function SampleImage(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "image",
    image: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png",
    },
  });

  return data;
}

function SampleAudio(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "audio",
    audio: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3",
    },
  });

  return data;
}

function SampleVideo(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "video",
    video: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
    },
  });

  return data;
}

function SampleDocument(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "document",
    document: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
    },
  });

  return data;
}

function SampleButtons(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "Confirmas tu registro ?",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "001",
              title: "Si",
            },
          },
          {
            type: "reply",
            reply: {
              id: "002",
              title: "No",
            },
          },
        ],
      },
    },
  });

  return data;
}

function SampleLocation(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "location",
    location: {
      latitude: "9.92779324928734",
      longitude: "-84.04181262852731",
      name: "Innova Bikes Curridabat",
      address: "Innova Bikes",
    },
  });
function SampleList(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    "interactive": {
        "type": "list",
        "header": {
            "type": "text",
            "text": "Bienvenido"
        },
        "body": {
            "text": "Tengo estas opciones: "
        },
        "footer": {
            "text": "Selecciona la que deseas para atenderte mejor"
        },
        "action": {
            "button": "Ver opciones",
            "sections": [
                {
                    "title": "Estamos para servirte",
                    "rows": [
                        {
                            "id": "main-comprar",
                            "title": "Comprar",
                            "description": "Compra los productos preferidos"
                        },
                        {
                            "id": "main-vendedor",
                            "title": "Vender",
                            "description": "Vende tus productos"
                        }
                    ]
                },
                {
                    "title": "Centro de atencion",
                    "rows": [
                        {
                            "id": "main-agencia",
                            "title": "Agencia",
                            "description": "<Puedes visitar nuestra agencia aqui>"
                        },
                        {
                            "id": "main-contacto",
                            "title": "Centro de contacto",
                            "description": "Te atendera uno de nuestros agentes"
                        }
                    ]
                }
            ]
        }
    }
  });

  return data;
}


module.exports = {
  SampleText,
  SampleImage,
  SampleAudio,
  SampleVideo,
  SampleButtons,
  SampleDocument,
  SampleLocation,
  SampleList,
};



