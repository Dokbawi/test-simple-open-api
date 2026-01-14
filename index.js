import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

const getClientIp = (req) =>
  req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
  req.socket.remoteAddress;

app.get("/hello", (req, res) => {
  console.log("client ip:", getClientIp(req));
  res.json({ ok: true });
});
app.post("/echo", (req, res) => res.json({ received: req.body }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
