const express = require("express")


  const app = express()
    // server create ho chuka he 

    app.get("/", (req, res) => {
  res.send("Hello from backend ");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});

app.get("/home", (req, res) => {
  res.send("Hello from home");
});



 app.listen(3000, () =>{
  console.log("this is hello from backend")
 })
//   server ko start karta he