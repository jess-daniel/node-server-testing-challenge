const request = require("supertest");

const server = require("../api/server");

// post test
describe("POST /api/articles", () => {
  it("should return a 201 status", () => {
    return request(server)
      .post("/api/articles")
      .send({ title: "Article 4", text: "More text" })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
  it("should return an json object", () => {
    return request(server)
      .post("/api/articles")
      .send({ title: "Article 4", text: "More text" })
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});

// get tests
describe("GET /api/articles", () => {
  it("should return a 200 status", () => {
    return request(server)
      .get("/api/articles")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

// delete tests
describe("DELETE /api/articles/:id", () => {
  it("should return a 200 status", () => {
    return request(server)
      .get("/api/articles")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it("should return a json object", () => {
    return request(server)
      .post("/api/articles")
      .send({ title: "Article 4", text: "More text" })
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});

// testing server
// describe("server.js", function() {
//   describe("environment", function() {
//     it("should set environment to testing", function() {
//       expect(process.env.DB_ENV).toBe("testing");
//     });
//   });

//   describe("GET /", function() {
//     it("should return a 200 OK", function() {
//       // spin up the server
//       return request(server)
//         .get("/")
//         .then(res => {
//           expect(res.status).toBe(200);
//         });
//       // make GET request to /
//       // look at the http status code for the response
//     });
//   });
// });
