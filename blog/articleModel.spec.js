const db = require("../data/dbConfig");
const Articles = require("./articleModel");

describe("articles model", () => {
  beforeEach(async () => {
    await db("articles").truncate();
  });
  describe("add()", () => {
    it("should add a new article to the database", async () => {
      await Articles.add({ title: "Article One", text: "Some text" });
      await Articles.add({ title: "Article Two", text: "Some Other text" });

      const articles = await db("articles");
      expect(articles).toHaveLength(2);
    });
  });
  //   describe("delete()", () => {
  //     it("should delete an article from the database", async () => {
  //       await Articles.remove(2);
  //       const articles = await db("articles");
  //       expect(articles).toHaveLength(1);
  //     });
  //   });
});
