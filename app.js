const express = require("express");
const app = express();




app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.use(require("./routes/main"));

let port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Server running on Port ${port}`));