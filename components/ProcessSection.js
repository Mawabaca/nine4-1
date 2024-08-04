import Image from 'next/image'

export default function ProcessSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">PROCESSUS DE SACRIFICE EN AFRIQUE</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/PICTO-MOUTON-v3 1.png" alt="Achetez votre mouton" fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Achetez Votre Mouton</h3>
            <p className="text-sm text-gray-600">Effectuer un paiement sécurisé.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/Group 18944.png" alt="Kebchi Le Sacrifie" fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Kebchi Le Sacrifie</h3>
            <p className="text-sm text-gray-600">Le sacrifice du mouton a lieu dans les zones les plus reculées d'Afrique.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/PICTO-MEDIA-b3 1.png" alt="Recevez Les Images" fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Recevez Les Images</h3>
            <p className="text-sm text-gray-600">Kebchi vous envoie les vidéos de votre sacrifice en Afrique et les images de la distribution.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/confirmation (1) 1.png" alt="Confirmation" fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Confirmation</h3>
            <p className="text-sm text-gray-600">Nous garantissons votre satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

