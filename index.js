const express = require("express");

const app = express();
app.set("PORT", process.env.PORT || 8080);

app.get("/", (_, res) => {
    res.status(200).send({
        message: "Hello World!",
    });
});

app.listen(app.get("PORT"), () => console.log(`Server running on port ${app.get("PORT")}`));