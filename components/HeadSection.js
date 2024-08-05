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
        <div className="bg-purple-100 mx-auto" style={{ width: '1330px', height: '78px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className={`${inknutAntiqua.className} text-xxxl font-bold text-white`}>
            Sacrifiez pour l'Aïd et soutenez une famille en Afrique.
          </h1>
        </div>
        <div className="relative inline-block mt-4 mr-10">
          <Image 
            src="/images/imagemaroc21.png" 
            alt="Faites le bien avec Kebchi" 
            width={1417} 
            height={590} 
          />
        </div>
        <div className="mt-4 flex justify-center items-center">
          <div className="h-1 bg-purple-200 w-24 mr-2 rounded-lg"></div>
          <div className="h-1 bg-purple-600 w-7 mr-1 rounded-lg"></div>
          <div className="h-1 bg-purple-600 w-7 mr-1 rounded-lg"></div>
          <div className="h-1 bg-purple-600 w-7 rounded-lg"></div>
        </div>
        <div className="mt-4">
          <p className="text-purple-600 font-bold">Rejoignez notre communauté et découvrez la force de notre engagement solidaire.</p>
          <div className="flex justify-center items-center mt-2">
            <span className="text-yellow-500 font-bold text-lg">4,8 / 958 AVIS</span>
            <div className="flex ml-2">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10.9 1 6.32l5.621-.471L10 1.09l3.379 4.758L19 6.32l-4.5 4.579 1.378 7.19L10 15z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10.9 1 6.32l5.621-.471L10 1.09l3.379 4.758L19 6.32l-4.5 4.579 1.378 7.19L10 15z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10.9 1 6.32l5.621-.471L10 1.09l3.379 4.758L19 6.32l-4.5 4.579 1.378 7.19L10 15z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10.9 1 6.32l5.621-.471L10 1.09l3.379 4.758L19 6.32l-4.5 4.579 1.378 7.19L10 15z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.5 10.9 1 6.32l5.621-.471L10 1.09l3.379 4.758L19 6.32l-4.5 4.579 1.378 7.19L10 15z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
