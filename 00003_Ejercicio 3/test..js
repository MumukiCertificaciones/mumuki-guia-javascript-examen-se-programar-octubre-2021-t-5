describe("", function() {
  it("Es correcto que 3 menos 2 es menor a 6", function() {
    assert($nombreFuncion(3, 2, 6));
  });
  
  it("Es correcto que 5 menos 4 es menor a 20", function() {
    assert($nombreFuncion(5, 4, 20));
  });
  
  it("Es correcto que 18 menos 3 es menor a 18", function() {
    assert($nombreFuncion(18, 3, 18));
  });
  
  it("No es correcto que 7 menos 4 es menor a 2", function() {
    assert(!$nombreFuncion(7, 4, 2));
  });
  
  it("No es correcto que 9 menos 3 es menor a 5", function() {
    assert(!$nombreFuncion(9, 3, 5));
  });
  
  
})