// Import packages
const express = require("express");
const path = require('path');
const index = require("./routes/index");
const id_berlangganan = require("./routes/berlangganan");
const id_legal = require("./routes/legal");
const id_about = require("./routes/about");
const id_contact = require("./routes/contact");
const id_notfound = require("./routes/404");

// Middlewares
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/", index);
app.use("/berlangganan", id_berlangganan)
app.use("/legal", id_legal);
app.use("/about", id_about);
app.use("/contact", id_contact);
app.use("/sites/error", id_notfound);
// 404 handler
app.use((req, res, next) => {
  res.redirect("/sites/error");
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
