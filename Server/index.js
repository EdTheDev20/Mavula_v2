const PORT = 3001;
const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
//const multer = require("multer");

  //const mysql = require("mysql");
  /* const storage = multer.diskStorage({
    destination: function(req,file,cb){cb(null,'./uploads/')} ,
    filename: function(req,file,cb){
      nome = file.originalname; 
      cb(null,nome)} }); */

const app = express();
app.use(cors());
app.listen(PORT, () => {
console.log(`Server started on PORT ${PORT}`);
});
