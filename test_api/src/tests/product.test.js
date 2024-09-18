const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");
beforeEach(async () => {
    await mongoose.connect("mongodb://root:root@localhost:27017/test?authSource=admin")
});
afterEach(async () => {
    await mongoose.connection.close();
});
const id = "65ba45e56d502c863cea1eb6";
describe("GET /product", () => {
    it("should return all products", async () => {
        const res = await request(app).get("/product");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
describe("GET product/:id", () => {
    it("should return a product", async () => {
        const res = await request(app).get(
            "/product/" + id
        );
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe("Product 2");
    });
});
describe("POST /product", () => {
    it("should create a product", async () => {
        const res = await request(app).post("/product").send({
            name: "Product 2",
            price: 1009,
            description: "Description 2",
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Product 2");
    });
});
describe("PUT product/:id", () => {
    it("should update a product", async () => {
        const res = await request(app)
            .put("/product/" + id)
            .send({
                name: "Product 4",
                price: 104,
                description: "Description 4",
            });
        expect(res.statusCode).toBe(200);
        expect(res.body.price).toBe(104);
    });
});
describe("DELETE /product/:id", () => {
    it("should delete a product", async () => {
        const res = await request(app).delete(
            "/product/" + id
        );
        expect(res.statusCode).toBe(200);
    });
});