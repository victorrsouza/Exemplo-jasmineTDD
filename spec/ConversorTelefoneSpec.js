describe("Chamadas de telefone com letras", function(){    it("numero 9965 deve retornar 9965", function(){        expect(Telefone.converter("9965")).toEqual("9965");    });		it("numero VIVO deve retornar 8486", function(){        expect(Telefone.converter("VIVO")).toEqual("8486");    });		it("numero 0800-KING deve retornar 0800-5464", function(){        expect(Telefone.converter("0800-KING")).toEqual("0800-5464");    });		it("numero 99VICTOR deve retornar 99842867", function(){        expect(Telefone.converter("99VICTOR")).toEqual("99842867");    });});