import Image from "next/image";
import Cabecalho from "./_components/cabecalho";

export default function Home() {
  return (
    <div className="bg-[#B5B5B5] h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-white h-[600px] w-[1300px] shadow-2xl rounded-xl flex flex-col">
          <Cabecalho />
      </div>
    </div>
  );
}
