import Image from 'next/image';

export default function ProcessSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center align-item">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">PROCESSUS DE SACRIFICE EN AFRIQUE</h2>
        <div className="grid grid-cols-4 gap-8">
          {/* Étape 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image src="/images/PICTO-MOUTON.png" alt="Achetez votre mouton" width={111} height={84} />
            </div>
            <div className="my-4 w-4 h-4 bg-purple-200 rounded-full"></div>
            <h3 className="font-bold text-lg text-purple-600">Achetez Votre Mouton</h3>
            <p className="text-sm text-gray-600">Effectuer un paiement sécurisé.</p>
            <p className="text-sm text-gray-600">شراء خروفك من دولة</p>
          </div>
          {/* Étape 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image src="/images/PICTO-MOSQUEE.png" alt="Kebchi Le Sacrifie" width={61} height={84} />
            </div>
            <div className="my-4 w-4 h-4 bg-purple-200 rounded-full"></div>
            <h3 className="font-bold text-lg text-purple-600">Kebchi Le Sacrifie</h3>
            <p className="text-sm text-gray-600">Le sacrifice du mouton a lieu dans les zones les plus reculées d'Afrique.</p>
            <p className="text-sm text-gray-600">كبشي يقوم بالتضحية بخروفك</p>
          </div>
          {/* Étape 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image src="/images/PICTO-MEDIA-b3 1.png" alt="Recevez Les Images" width={83} height={82} />
            </div>
            <div className="my-4 w-4 h-4 bg-purple-200 rounded-full"> </div>
            <h3 className="font-bold text-lg text-purple-600">Recevez Les Images</h3>
            <p className="text-sm text-gray-600">Kebchi vous envoie les vidéos de votre sacrifice en Afrique et les images de la distribution.</p>
            <p className="text-sm text-gray-600">توصل بالصور والفيديوهات لعملية التضحية</p>
          </div>
          {/* Étape 4 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image src="/images/confirmation (1) 1.png" alt="Confirmation" width={82} height={82} />
            </div>
            <div className="my-4 w-4 h-4 bg-purple-600 rounded-full"></div>
            <h3 className="font-bold text-lg text-purple-600">Confirmation</h3>
            <p className="text-sm text-gray-600">Nous garantissons votre satisfaction.</p>
            <p className="text-sm text-gray-600">نكفل لكم الرضا التام</p>
          </div>
        </div>
      </div>
    </section>
  );
}


