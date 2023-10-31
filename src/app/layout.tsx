import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seminário A Chave da Vitória',
  description: 'Assista ao nosso seminário em vídeo baseado no livro "A Chave da Vitória", que combina 21 dias de jejum e oração para explorar os ensinamentos bíblicos sobre prosperidade financeira e evangelização global.  Neste seminário, você aprenderá como aumentar os recursos de sua igreja e transformar sua vida através de análises e discussões profundas. Os ensinamentos bíblicos compartilhados prometem prosperidade em todas as áreas da vida, com ênfase na financeira.  Prepare-se para uma experiência transformadora, onde cada vídeo é um passo em direção a uma vida mais abençoada e próspera. Este seminário é uma jornada de descoberta e fé, com ensinamentos que ressoam como um testemunho da obra divina.  Este é o seu momento de desbloquear a chave para uma vitória financeira duradoura e uma vida repleta de bênçãos. Não perca a oportunidade de participar de um movimento sagrado que irá tocar seu coração e além.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{
      backgroundColor: '#fff',
    }} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
