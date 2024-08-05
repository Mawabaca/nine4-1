import Image from 'next/image';

export default function OfferSection() {
  return (
    <section className="py-12 bg-white relative">
      <div className="mx-auto" style={{ maxWidth: '1250px' }}>
        <div className="flex flex-col md:flex-row items-center md:space-x-40">
          <div className="md:max-w-50 text-left">
            <h2 className="text-3xl font-bold text-purple-200 mb-2">OFFREZ VOTRE MOUTON DE L'AÏD AL-ADHA EN AFRIQUE</h2>
            <div className="flex items-center mb-4 max-w-7xl">
              <div className="w-2 h-1 bg-purple-600 mr-2"></div>
              <div className="w-4 h-1 bg-purple-600 mr-2"></div>
              <div className="w-12 h-1 bg-purple-600"></div>
            </div>
            <p className="text-lg mb-4"><b>Offrez espoir et soutien, célébrez la solidarité avec l'Afrique.<br /> </b>
            Le sacrifice a lieu après salat al aïd dans l'un de nos pays partenaires :</p>
            <ul className="list-disc pl-5 mb-4 text-purple-200">
              <li>Maroc : المغرب</li>
              <li>Kenya : كينيا</li>
              <li>Madagascar : مدغشقر</li>
              <li>Tanzanie : تنزانيا</li>
            </ul>
          </div>
          <div className="md:w-29% p-4 rounded-lg shadow-lg text-center bg-palebrown-100 relative z-20">
            <div className="relative z-20">
              <Image src="/images/africamap.png" alt="Carte de l'Afrique" width={200} height={200} />
            </div>
            <p className="text-4xl font-bold text-purple-300 mt-4">1800 dhs</p>
            <p className="text-lg mt-2">Le mouton en Afrique</p>
            <button className="mt-4 px-6 py-2 bg-purple-200 text-white rounded-full">Commandez Maintenant</button>
          </div>
          <div className="absolute top-50px right-49px z-2">
              <Image src="/images/dirham.png" alt="Billets" width={313} height={219} />
          </div>
        </div>
      </div>
    </section>
  );
}
