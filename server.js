var http = require("http"),
    express = require("express"),
    multer = require("multer"),
    upload = multer().array("file"),
    path = require("path"),
    bodyParser = require("body-parser"),
    app = express();

app.set("json spaces", 5);

app.set('port', (process.env.PORT || 9000))

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/:size", function (req, res) {

    res.end();

});

app.post("/getsize", function (req, res) {

    upload(req, res, function (err) {

        if (err) {

            res.send(err);

        } else {

            res.json({

                "file_size_in_byte": req.files[0].size

            });

            res.end();

        }

    });

});


app.listen(app.get('port'), function () {

    console.log("Listening on port ", app.get('port'));

});
