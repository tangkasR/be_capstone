import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";
import PostRoute from "./routes/PostRoute.js";
import CommentRoute from "./routes/CommentRoute.js";
import ArticleRoute from "./routes/ArticleRoute.js";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(AuthRoute);
app.use(PostRoute);
app.use(CommentRoute);
app.use(ArticleRoute);

app.listen(5000, () => {
  console.log(`Server is running in port 5000...`);
});
