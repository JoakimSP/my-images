import { Inter } from '@next/font/google'
import HomePage from './home/Index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  )
}
