import Image from 'next/image'
import { Inknut_Antiqua } from 'next/font/google'

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['700'],
});

export default function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center relative">
        <div className="bg-purple-100 mx-auto" style={{ width: '1087px', height: '78px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className={`${inknutAntiqua.className} text-xxxl font-bold text-white`}>
            Sacrifiez pour l'Aïd et soutenez une famille en Afrique.
          </h1>
        </div>
        <div className="relative inline-block mt-4 mr-10">
          <Image src="/images/imagemaroc21.png" alt="Faites le bien avec Kebchi" width={1180} height={590} />
        </div>
        <div className="mt-4 flex justify-center items-center">
          <div className="h-1 bg-purple-200 w-24 h-2 mr-2 rounded-lg"></div>
          <div className="h-1 bg-purple-600 w-7 h-2 mr-1 rounded-lg"></div>
          <div className="h-1 bg-purple-600 w-7 h-2 mr-1 rounded-lg"></div>
          <div className="h-1 bg-purple-600 w-7 h-2 rounded-lg"></div>
        </div>
      </div>
    </section>
  )
}
