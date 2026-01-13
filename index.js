import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

app.get("/hello", (req, res) => {
  const name = req.query.name ?? "world";

  console.log('hhhhhhhhhhhhhhhhhhh')
});

app.post("/echo", (req, res) => res.json({ received: req.body }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
