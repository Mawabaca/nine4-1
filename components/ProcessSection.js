import Image from 'next/image';

export default function ProcessSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">PROCESSUS DE SACRIFICE EN AFRIQUE</h2>
        <div className="relative flex items-center justify-between">
          {/* Ligne horizontale */}
          <div className="absolute left-0 w-full h-1 bg-gray-300"></div>
          
          {/* Étape 1 */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/PICTO-MOUTON-v3 1.png" alt="Achetez votre mouton" width={111} height={84} />
            </div>
            <div className="w-5 h-5 bg-purple-600 rounded-full absolute bottom-0 translate-y-1/2"></div>
            <h3 className="font-bold text-lg text-purple-600 mt-6">Achetez Votre Mouton</h3>
            <p className="text-sm text-gray-600">Effectuer un paiement sécurisé.</p>
          </div>
          
          {/* Étape 2 */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/Vector-mosquee-v3 1.png" alt="Kebchi Le Sacrifie" width={64} height={64} />
            </div>
            <div className="w-5 h-5 bg-purple-600 rounded-full absolute bottom-0 translate-y-1/2"></div>
            <h3 className="font-bold text-lg text-purple-600 mt-6">Kebchi Le Sacrifie</h3>
            <p className="text-sm text-gray-600">Le sacrifice du mouton a lieu dans les zones les plus reculées d'Afrique.</p>
          </div>
          
          {/* Étape 3 */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/PICTO-MEDIA-b3 1.png" alt="Recevez Les Images" width={64} height={64} />
            </div>
            <div className="w-5 h-5 bg-purple-600 rounded-full absolute bottom-0 translate-y-1/2"></div>
            <h3 className="font-bold text-lg text-purple-600 mt-6">Recevez Les Images</h3>
            <p className="text-sm text-gray-600">Kebchi vous envoie les vidéos de votre sacrifice en Afrique et les images de la distribution.</p>
          </div>
          
          {/* Étape 4 */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/confirmation (1) 1.png" alt="Confirmation" width={64} height={64} />
            </div>
            <div className="w-5 h-5 bg-purple-400 rounded-full absolute bottom-0 translate-y-1/2"></div>
            <h3 className="font-bold text-lg text-purple-600 mt-6">Confirmation</h3>
            <p className="text-sm text-gray-600">Nous garantissons votre satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
