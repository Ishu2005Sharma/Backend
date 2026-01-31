const express = require("express")


  const app = express()
    // server create ho chuka he 

    app.get("/", (req, res) => {
  res.send("Hello from backend");
});

 app.listen(3000) 
//   server ko start karta he