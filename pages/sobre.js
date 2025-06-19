import Navbar from '../components/Navbar'

export default function Sobre() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
        <div className="space-y-4">
          <p className="text-gray-700">
            Somos uma fintech especializada em antecipação de recebíveis B2B, 
            conectando indústrias aos seus fornecedores através de tecnologia 
            e análise de crédito inteligente.
          </p>
          <p className="text-gray-700">
            Nossa missão é acelerar o fluxo de caixa das empresas brasileiras, 
            oferecendo soluções rápidas, seguras e transparentes para 
            antecipação de faturas.
          </p>
        </div>
      </div>
    </div>
  );
}
