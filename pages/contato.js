import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    // Aqui você integraria com seu backend
    alert('Mensagem enviada! Entraremos em contato em breve.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Fale Conosco</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Como podemos ajudar sua empresa?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-1">📧</div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">augusto-teles@hotmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-1">📱</div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-gray-600">(86) 9 9416-1860</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-1">📍</div>
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-gray-600">
                    Rua Thomas Edison, 2203<br />
                    Teresina - PI<br />
                    CEP: 64052-770
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-1">⏰</div>
                <div>
                  <p className="font-medium">Horário de Atendimento</p>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
