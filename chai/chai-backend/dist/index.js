"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json()); // JSON data handle karne ke liye
// ✅ Create order
app.use("/orders", orderRoutes_1.default);
// ✅ User
app.use("/auth", authRoute_1.default);
// ✅ Get All Users
app.get("/all-users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json(users);
}));
// ✅ Get All Products
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany();
    res.json(products);
}));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
});
