const express = require("express");
const apiRoute = require("./src/routes/routes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsappweb", apiRoute);

app.listen(PORT, () => {
  console.log("El puerto es: " + PORT);
});
