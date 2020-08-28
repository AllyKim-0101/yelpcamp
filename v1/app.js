var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//below code is conventional. memorise it or copy and paste
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "salmon creek", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { name: "granite hill", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { name: "mountain goat", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" }
]


app.get("/", function (req, res) {
    res.render("landing")
})

app.get("/campgrounds", function (req, res) {

    res.render("campgrounds", { campgrounds: campgrounds });
});
app.post("/campgrounds", function (req, res) {
    let name = req.body.name;
    let img = req.body.image;
    let newCampground = { name: name, img: img }
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs")
})

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("the yelpCamp has started!");
});
