import express from "express";

const app = express();
const PORT = 5001;

app.get("/", (req, res) =>{
    res.send({body: 'server started'});
})

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`);
})