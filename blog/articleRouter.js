const router = require("express").Router();

const Articles = require("./articleModel");

router.get("/", (req, res) => {
  Articles.get()
    .then(articles => {
      if (articles) {
        res.status(200).json(articles);
      } else {
        res
          .status(200)
          .json({ message: "There aren't any articles right now" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Articles.findById(id)
    .then(article => {
      if (article) {
        res.status(200).json(article);
      } else {
        res.status(404).json({ message: "article not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  Articles.add(data)
    .then(article => {
      if (article) {
        res.status(201).json(article);
      } else {
        res.status(400).json({ message: "something went wrong" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Articles.remove(id)
    .then(removed => {
      if (removed) {
        res.status(200).json(removed);
      } else {
        res.status(404).json({ message: "wrong id?" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;
