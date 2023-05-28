import { Header } from "@/components/header";
import Link from "next/link";

export default function Handler() {
  return (
    <div className='md:bg-home-pc w-full bg-home-mobile h-screen bg-cover bg-no-repeat'>
    <div className="bg-gradient w-full h-full">
        <Header/>
        <div className="w-4/5 mx-auto flex-col text-xl pt-56 flex items-center">
            <p className="text-center text-white ">
            Está na hora de renovar seu visual? Confie no meu talento e expertise . Experimente cortes de cabelo e barba impecáveis que farão você se sentir confiante e pronto para conquistar o mundo. Agende agora mesmo o seu horário e descubra a diferença de um serviço de excelência
            </p>
            <Link
                className="bg-[#f51a13] mt-10 text-white px-4 text-xl py-1"
                href="/schedule">
                Agende um horário
            </Link>
        </div>
    </div>
</div>
  )
}
