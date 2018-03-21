const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const translation =  platzom("programar")
        expect(translation).to.equals("program")
    })

    it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
        const translation =  platzom("Zorro")
        const translation2 =  platzom("Zarpar")

        expect(translation).to.equals("Zorrope")
        expect(translation2).to.equals("Zarppe")
    })

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
        const translation =  platzom("abecedario")
        expect(translation).to.equals("abece-dario")
    })

    it('si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
        const translation =  platzom("sometemos")
        expect(translation).to.equals("SoMeTeMoS")
    })
})