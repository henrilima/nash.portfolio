const planets = require("./global/planets.json");
const express = require("express");
const path = require("path");

const app = express();

// Port
express.urlencoded({ extended: true });

// Passport
app.enable("trust proxy");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "Public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/global", (req, res) => {
    res.render("global");
});
app.get("/globalchat", (req, res) => {
    res.redirect("/global");
});

app.get("/api/solarsystem", (req, res) => {
    res.json({...planets});
});
app.get("/api/solar-system", (req, res) => {
    res.json({...planets});
});

app.get('*', (req, res) => {
  res.render('error', { url: req.url });
});

// Listen
app.listen(process.env.PORT || 3000, () => console.log(`Conectado na porta: ${PORT}`));
