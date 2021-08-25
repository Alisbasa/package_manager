const sumar = require("../index");
const assert = require("assert");
// Asserts

describe("probar una suma", ()=>{
    //afirmamos que 5+7 es 12
    it("5+7 es 12", ()=>{
        assert.equal(12, sumar(5,7))
    })
    //afirmamos que 5+7 no es 57
    it("5+7 no es 57", ()=>{
        assert.notEqual(57, sumar(5,7))
    })
});
