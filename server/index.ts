import express from "express";
import path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const PORT = parseInt(process.env.PORT) || 3001;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../../client/build")));
} else {
  dotenv.config();
}

//Middleware
app.use(bodyParser.json());

//Routes
import apiRoutes from "./routes/api";
apiRoutes(app);

if (process.env.NODE_ENV === "production") {
  app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
  });
} else {
  app.get("*", (req: any, res: any) => {
    res.send({ message: "test" });
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log("server listening");
});
