const VerifyToken = (req, res) => {
  res.send("Hola VerifyToken");
};

const ReceivedMessage = (req, res) => {
  res.send("Hola Received");
};

module.exports = {
  VerifyToken,
  ReceivedMessage,
};
