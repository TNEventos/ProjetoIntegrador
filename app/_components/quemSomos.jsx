import React from "react";
import Image from "next/image";

export default function QuemSomos1() {
  return (
    <div className="space-y-5">
      <div>
        <div className="w-full h-[600px] bg-red-500 relative mx-auto  ">
          <Image
            src="/img2.jpg"
            alt="descrição"
            fill
            style={{ objectFit: "cover" }}
            className="z-0 text-white object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-center z-50  ml-32">
            <span className="font-thin  text-xl  mb-2 text-slate-200   ">
              Manutenção Automotiva
            </span>

            <span className="font-bold  text-6xl mb-2 text-slate-200  ">
              Quem Somos
            </span>

            <div className=" w-12 h-1 bg-orange-500 mt-2 "></div>

            <span className="text-white  mt-2 text-justify w-[800px] font-bold font-serif">
              Somos uma equipe especializada em serviços de gastronomia para
              eventos, atuando em Lavras-MG e região. Trabalhamos com foco em
              qualidade, pontualidade e bom atendimento. Oferecemos churrasco
              profissional, pratos preparados com cuidado e sabor, além de
              serviço de garçom para garantir mais conforto e organização
              durante sua festa.
               Atendemos aniversários, casamentos,
              confraternizações e eventos corporativos, sempre com ingredientes
              selecionados e um atendimento eficiente e dedicado. Nosso objetivo
              é proporcionar uma experiência completa que contribua para o
              sucesso do seu evento.
            </span>

            <button className="w-32 h-12 bg-orange-500 rounded mt-10 font-serif">
              Informações
            </button>
          </div>
        </div>
      </div>

      <div className="p-20 flex space-x-8 justify-center">
        <div className="w-96 h-80 bg-orange-600 flex p-12 rounded-xl items-center ">
          <div className=" space-y-1 h-60 justify-center flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl font-serif">Churrasqueiro</h1>

            <Image
            src="/churasqueiro.jpg"
            alt="descrição"
            width={200}
            height={150}
            className="rounded-2xl bg-red-500 w-200 text-center border-4 border-black "
            
            
            
          />
            <p className="text-justify font-serif ">
Especialista na brasa, serve carnes suculentas com ponto perfeito e muito sabor. Garantia de um churrasco inesquecível!</p>
          </div>
        </div>

        <div className="w-96 h-80 bg-orange-600 flex p-12 rounded-xl items-center ">
          <div className=" space-y-1 h-60 justify-center flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl font-serif">Cozinheira</h1>

            <Image
            src="/cozinheira.jpg"
            alt="descrição"
            width={150}
            height={150}
            className="rounded-2xl bg-red-500   text-center border-4 border-black "
            
            
            
          />
            <p className="text-justify font-serif ">
Responsável por pratos deliciosos e bem apresentados, com tempero caseiro e qualidade impecável em cada receita.</p>
          </div>
        </div>

        <div className="w-96 h-80 bg-orange-600 flex p-12 rounded-xl items-center ">
          <div className=" space-y-1 h-60 justify-center flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl font-serif">Garçons</h1>

            <Image
            src="/garcom.png"
            alt="descrição"
            width={150}
            height={150}
            className="rounded-2xl bg-red-500 w-200 text-center border-4 border-black "
            
            
            
          />
            <p className="text-justify font-serif">
Atendimento ágil, educado e atencioso, sempre prontos para servir com simpatia e garantir a melhor experiência aos convidados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
