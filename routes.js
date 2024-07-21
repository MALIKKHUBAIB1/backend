// const fs = require("fs");
import fs from "fs"

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Message</title></head>");
    res.write(
      "<body><form action = '/message' method = 'POST'><input type ='text' name = 'message' > <button type = 'submit'> send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
      console.log("malik");
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(data).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>node js</title></head>");
  res.write("<body><h1> Hello i am max </h1></body");
  res.write("</html>");
  res.end();
};
// module.exports = requestHandler;
export default requestHandler;
