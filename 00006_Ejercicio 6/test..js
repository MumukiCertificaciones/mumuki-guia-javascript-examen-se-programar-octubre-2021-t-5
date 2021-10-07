function transform(texto) {
  let  textoSinTildes = texto.toString().toLowerCase(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return textoSinTildes.replace('ano', 'año');
}

describe("", function() {
  it("el resumenEspectador de agus nos provee su información", function() {
    assert.equal(transform(resumenEspectador(agus)), "se estima que wuisti vera 60 peliculas en un año por netfix");
  })
  
  it("el resumenEspectador de ariel nos provee su información", function() {
    assert.equal(transform(resumenEspectador(ariel)), "se estima que ari vera 120 peliculas en un año por armazon");
  })
  
  it("el resumenEspectador de joa nos provee su información", function() {
    assert.equal(transform(resumenEspectador(joa)), "se estima que jovita vera 36 peliculas en un año por netfix");
  })
})