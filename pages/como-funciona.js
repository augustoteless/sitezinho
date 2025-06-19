import Navbar from '../components/Navbar'

export default function ComoFunciona() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Como Funciona</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
            <h3 className="font-semibold mb-2">Envie sua Fatura</h3>
            <p className="text-sm text-gray-600">
              Faça upload da nota fiscal ou duplicata que deseja antecipar
            </p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
            <h3 className="font-semibold mb-2">Análise Rápida</h3>
            <p className="text-sm text-gray-600">
              Nossa IA analisa o risco em tempo real usando dados do Open Finance
            </p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
            <h3 className="font-semibold mb-2">Aprovação</h3>
            <p className="text-sm text-gray-600">
              Receba a proposta de antecipação em até 24 horas
            </p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
            <h3 className="font-semibold mb-2">Receba o Valor</h3>
            <p className="text-sm text-gray-600">
              O dinheiro cai na sua conta em 1 a 5 dias úteis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
