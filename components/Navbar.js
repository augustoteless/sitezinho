import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between">
        <div className="font-bold text-lg">AntecipAí</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/como-funciona">Como Funciona</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
    </nav>
  );
}
