const db = require("../data/dbConfig");

const get = () => {
  return db("articles");
};

const findById = async id => {
  return await db("articles")
    .where({ id })
    .first();
};

const add = article => {
  return db("articles")
    .insert(article, "id")
    .then(ids => {
      [id] = ids;

      return findById(id);
    });
};

const remove = async id => {
  const removed = await findById(id);
  await db("articles")
    .where({ id })
    .del();
  return removed;
};

module.exports = {
  get,
  add,
  findById,
  remove
};
