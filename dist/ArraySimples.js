"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArraySimples = void 0;
class ArraySimples {
    constructor(array) {
        this.array = array;
    }
    removeDuplicados() {
        const elementosUnicos = new Set(this.array);
        return Array.from(elementosUnicos);
    }
}
exports.ArraySimples = ArraySimples;
