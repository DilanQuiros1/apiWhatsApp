const https = require("https");
function SendMessageWhatsApp(data) {
  const options = {
    host: "graph.facebook.com",
    path: "/v22.0/645397368650873/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer EAAQesbBD7XMBO45iZBJSZAZA1CuqpZA9EyPAQUvibDqZBRmWtXhoJhTsyRga6m2dCEukZBgmLt5h9CmlDmxGw1Pa98gfR2RuZCzYYTpumjsfiOu9NMZAqfUXF5Msrztg5huPqxoZAs9cqa6ew2DHFm66smtVTlNRcEAemQ9BimPv1S2UyBXOIZApf9XNrRmuodZBcd3S1PVze04QZBFIjaiH4q5pwOW6Ei4NZCKZCWOHHhb2h4",
    },
  };
  const req = https.request(options, (res) => {
    res.on("data ", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

module.exports = {
  SendMessageWhatsApp,
};
