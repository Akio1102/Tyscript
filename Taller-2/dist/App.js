"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Centro_1 = __importDefault(require("./Models/Centro"));
const Ruta_1 = __importDefault(require("./Models/Ruta"));
const Campus = new Centro_1.default(1, "CampusLand", "Zona franca");
const Campus2 = new Centro_1.default(2, "CampusLand2", "Zona franca2");
const Campus3 = new Centro_1.default(3, "CampusLand3", "Zona franca3");
const Campus4 = new Centro_1.default(4, "CampusLand4", "Zona franca4");
const Campus5 = new Centro_1.default(5, "CampusLand5", "Zona franca5");
const Node = new Ruta_1.default(1, "Backend Node", "Dev Backend with Node", Campus);
console.log(Node);
