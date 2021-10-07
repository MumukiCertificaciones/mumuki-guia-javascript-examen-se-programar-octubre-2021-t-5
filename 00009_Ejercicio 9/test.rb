guitarrista_de_banda = Guitarrista.new(8)
baterista_de_banda = Baterista.new(150)
guitarrista = Guitarrista.new(6)
baterista = Baterista.new(100)
triangulista = Triangulista.new()
banda = Banda.new([baterista_de_banda, guitarrista_de_banda, triangulista])

it "Si una banda toca se modifican sus integrantes" do
  banda.tocar!
  expect(guitarrista_de_banda.cuerdas). to eq 7
  expect(baterista_de_banda.indice_de_coordinacion). to eq 150 + $indiceDeBateristas
end

it "El guitarrista pierde una cuerda al tocar" do
  guitarrista.tocar!
  expect(guitarrista.cuerdas). to eq 5
end

it "El baterista aumenta su indice de coordinación al tocar" do
  
  baterista.tocar!
  expect(baterista.indice_de_coordinacion). to eq 100 + $indiceDeBateristas
end