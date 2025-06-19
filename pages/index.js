import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  const [value, setValue] = useState('')
  const [days, setDays] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const amount = parseFloat(value)
    const period = parseInt(days)
    if (!isNaN(amount) && !isNaN(period)) {
      const fee = 0.02
      const discount = amount * (fee / 30) * period
      setResult((amount - discount).toFixed(2))
    }
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Adiante seus recebíveis</h1>
          <p>Calcule e saiba quanto você pode receber hoje.</p>
          <div className="space-y-4 p-4 border rounded">
            <div>
              <label>Valor (R$)</label>
              <input type="number" value={value} onChange={e=>setValue(e.target.value)} className="w-full p-2 border rounded"/>
            </div>
            <div>
              <label>Prazo (dias)</label>
              <input type="number" value={days} onChange={e=>setDays(e.target.value)} className="w-full p-2 border rounded"/>
            </div>
            <button onClick={calculate} className="w-full bg-blue-600 text-white py-2 rounded">Calcular</button>
            {result !== null && <p className="text-green-700 font-semibold">Você receberia: R$ {result}</p>}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Cadastre-se para começar</h2>
          <div className="p-4 border rounded">
            <div><label>Nome</label><input type="text" className="w-full p-2 border rounded"/></div>
            <div><label>Email</label><input type="email" className="w-full p-2 border rounded"/></div>
            <div><label>Empresa</label><input type="text" className="w-full p-2 border rounded"/></div>
            <button className="w-full bg-blue-600 text-white py-2 rounded mt-2">Cadastrar</button>
          </div>
        </div>
      </div>
    </>
  )
}
