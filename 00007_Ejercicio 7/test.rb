it "Si creo un Auto le puedo especificar su nafta inicial" do
  auto = Auto.new(50)
  expect(auto.nafta).to be 50
end

it "Un Auto suma 20 litros de nafta al enviarle $metodoParaCargar(20)" do
  auto = Auto.new(50)
  auto.$metodoParaCargar(20)
  expect(auto.nafta).to be 70
end

it "Un Auto suma 5 litros de nafta al enviarle $metodoParaCargar(5)" do
  auto = Auto.new(50)
  auto.$metodoParaCargar(5)
  expect(auto.nafta).to be 55
end

it "Un Auto suma 100 litros de nafta al enviarle $metodoParaCargar(100)" do
  auto = Auto.new(50)
  auto.$metodoParaCargar(100)
  expect(auto.nafta).to be 150
end

it "Un Auto no está cargado si tiene $cantidadSuficienteDeCarga litros de nafta" do
  auto = Auto.new($cantidadSuficienteDeCarga)
  expect(auto.$metodoParaVerificarNafta).to be false
end

it "Un Auto no está cargado si tiene menos de $cantidadSuficienteDeCarga litros de nafta" do
  auto = Auto.new($cantidadSuficienteDeCarga - 1)
  expect(auto.$metodoParaVerificarNafta).to be false
end

it "Un Auto está cargado si tiene más de $cantidadSuficienteDeCarga litros de nafta" do
  auto = Auto.new($cantidadSuficienteDeCarga + 1)
  expect(auto.$metodoParaVerificarNafta).to be true
end
