// Import packages
const express = require("express");
const path = require('path');
const index = require("./routes/index");
const sk = require("./routes/sk");
const chat = require("./routes/chat");
const cookie = require("./routes/cookie");
const id_notfound = require("./routes/404");
const chatbot = require("./routes/chatbot");

// Middlewares
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/", index);
app.use("/chat", chat);
app.use("/chat-bot", chatbot);
app.use("/useful/syarat-dan-ketentuan", sk);
app.use("/useful/kebijakan-cookie", cookie);
app.use("/sites/error", id_notfound);
// 404 handler
app.use((req, res, next) => {
  res.redirect("/sites/error");
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
