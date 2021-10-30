const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler(app);

//// db
const dbConnection_url =
  "mongodb+srv://admin:V8sAZWLeUMr0euF0@noon-assessment.i6dfe.mongodb.net/favorite-movie-db?retryWrites=true&w=majority";

mongoose.connect(dbConnection_url);

//// api
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.use(cors());

    server.use("/api/movie", require("./routes/movies"));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.log("server err >>", ex.stack);
    process.exit(1);
  });
