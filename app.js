const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 3000;

function log(message) {
    const entry = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync("/var/log/devops-app/app.log", entry);
}

app.get("/", (req, res) => {
    log("Home page accessed");

    res.json({
        application: "DevOps Technical Assignment",
        status: "Deployment Successful",
        timestamp: new Date()
    });
});

app.get("/health", (req, res) => {
    log("Health endpoint accessed");

    res.json({
        status: "Healthy"
    });
});

app.get("/time", (req, res) => {
    log("Time endpoint accessed");

    res.json({
        serverTime: new Date()
    });
});

app.use((req, res) => {
    log("404 Request");

    res.status(404).json({
        error: "Not Found"
    });
});

app.listen(PORT, () => {

    log("Application Started");

    console.log("Application Started");

});
