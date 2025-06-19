import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Vocês são uma instituição financeira?",
      answer: "Somos uma Sociedade de Crédito Direto (SCD) licenciada pelo Banco Central, especializada em antecipação de recebíveis B2B."
    },
    {
      question: "Qual o prazo para receber o dinheiro?",
      answer: "Após aprovação, o valor é creditado em sua conta entre 1 a 5 dias úteis."
    },
    {
      question: "Qual a taxa cobrada?",
      answer: "Nossas taxas são competitivas e variam conforme o perfil de risco. Use nossa calculadora para uma simulação."
    },
    {
      question: "Preciso ter garantias?",
      answer: "A própria nota fiscal serve como garantia através de cessão fiduciária dos direitos creditórios."
    },
    {
      question: "Qual o valor mínimo para antecipação?",
      answer: "Trabalhamos com valores a partir de R$ 10.000,00 para operações B2B."
    }
  ]

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Perguntas Frequentes</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full p-4 text-left font-semibold hover:bg-gray-50 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
