const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 



app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 
