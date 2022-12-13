const fs = require("fs") // coreModule
fs.writeFileSync("custom.txt", "hello world")
fs.readFile("./package.json", (err,data) =>{
    console.log("err",err);
    console.log("data", JSON.parse(data));
})