describe("", function() {
  it("Mezclar 'hola' y 'chau' con 3 es 'holachau'", function() {
    assert.equal($funcionParaMezclar("hola", "chau", 3), "holachau");
  });
  
  it("Mezclar 'hola' y 'chau' con 7 es 'chauhola'", function() {
    assert.equal($funcionParaMezclar("hola", "chau", 7), "chauhola");
  });
  
  it("Mezclar 'perro' y 'gato' con 5 es 'perrogato'", function() {
    assert.equal($funcionParaMezclar("perro", "gato", 5), "perrogato");
  });
  
  it("Mezclar 'agua' y 'pelo' con 2 es 'aguapelo'", function() {
    assert.equal($funcionParaMezclar("agua", "pelo", 2), "aguapelo");
  });
  
  it("Mezclar 'agua' y 'pelo' con 10 es 'peloagua'", function() {
    assert.equal($funcionParaMezclar("agua", "pelo", 10), "peloagua");
  });
})