import React from 'react'
import Image from "next/image"

export default function 
() {
  return (

    <div>
        <div className="w-[1400px] h-[500px] relative mx-auto ">

<Image
    src="/hero.webp"
    alt="Imagem oficina"
   fill
    style={{ objectFit: 'cover'}}
    className="z-0 text-white object-cover rounded-xl"
/>

<div className="absolute inset-0 flex flex-col items-end justify-center z-50 mr-20 mt-20 ">
    <div className="flex items-start justify-start">
    <button className="border border-white w-60 h-20 bg-[#986300] rounded-4xl font-serif font-bold uppercase animate-bounce hover:bg-gray-400 mt-12">Contrate</button>
    </div>
    <span className="font-bold text-2xl mb-2 text-slate-300 p-2 rounded w-[700px] text-start mt-10">
    Contrate nossa equipe e garanta uma experiência completa para seu evento em Lavras-MG e região!
    Churrasco Profissional,
    Cozinha,
    Serviço de Garçom.
    Agende a sua festa ou evento!
    </span>
    

</div>

</div>
    </div>
  )
}
