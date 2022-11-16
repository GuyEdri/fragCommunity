import { queryGameServerInfo } from "steam-server-query";

// import axios from "axios";
// import Cheerio from "cheerio";
import express from "express";
import cors from "cors";

const PORT = 8000;
const app = express();
app.use(cors());
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

app.get("/results/mix1", (req, res) => {
  queryGameServerInfo("181.214.197.197:10201")
    .then((infoResponse) => {
      res.json(infoResponse);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/results/mix2", (req, res) => {
  queryGameServerInfo("181.214.197.197:10202")
    .then((infoResponse) => {
      res.json(infoResponse);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/results/mix3", (req, res) => {
  queryGameServerInfo("181.214.197.197:10204")
    .then((infoResponse) => {
      res.json(infoResponse);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/results/mix4", (req, res) => {
  queryGameServerInfo("181.214.197.197:10206")
    .then((infoResponse) => {
      res.json(infoResponse);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/results/surf", (req, res) => {
  queryGameServerInfo("181.214.197.197:10203")
    .then((infoResponse) => {
      res.json(infoResponse);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/results/zombie", (req, res) => {
  queryGameServerInfo("51.195.61.125:27102")
    .then((infoResponse) => {
      res.json(infoResponse);
    })
    .catch((err) => {
      console.error(err);
    });
});
