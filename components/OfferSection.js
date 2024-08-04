import Image from 'next/image'

export default function OfferSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-purple-600 mb-2">OFFREZ VOTRE MOUTON DE L'AÏD AL-ADHA EN AFRIQUE</h2>
            <div className="flex items-center mb-4">
              <div className="w-2 h-1 bg-purple-600 mr-2"></div>
              <div className="w-4 h-1 bg-purple-600 mr-2"></div>
              <div className="w-12 h-1 bg-purple-600"></div>
            </div>
            <p className="text-lg mb-4">Offrez espoir et soutien, célébrez la solidarité avec l'Afrique. Le sacrifice a lieu après salat al aïd dans l'un de nos pays partenaires :</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Maroc : المغرب</li>
              <li>Kenya : كينيا</li>
              <li>Madagascar : مدغشقر</li>
              <li>Tanzanie : تنزانيا</li>
            </ul>
          </div>
          <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-lg text-center">
            <Image src="" alt="Carte de l'Afrique" width={200} height={200} />
            <p className="text-4xl font-bold text-purple-600 mt-4">1800 dhs</p>
            <p className="text-lg mt-2">Le mouton en Afrique</p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full">Commandez Maintenant</button>
          </div>
        </div>
      </div>
    </section>
  )
}