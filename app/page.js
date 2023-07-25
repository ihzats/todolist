import { Footer, FormTodo } from '@/components'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <FormTodo/>
      <Footer/>
    </main>
  )
}
