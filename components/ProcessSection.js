import Image from 'next/image'

export default function ProcessSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">PROCESSUS DE SACRIFICE EN AFRIQUE</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/step1.png" alt="Achetez votre mouton" layout="fill" objectFit="contain" />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Achetez Votre Mouton</h3>
            <p className="text-sm text-gray-600">Effectuer un paiement sécurisé.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/step2.png" alt="Kebchi Le Sacrifie" layout="fill" objectFit="contain" />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Kebchi Le Sacrifie</h3>
            <p className="text-sm text-gray-600">Le sacrifice du mouton a lieu dans les zones les plus reculées d'Afrique.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/step3.png" alt="Recevez Les Images" layout="fill" objectFit="contain" />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Recevez Les Images</h3>
            <p className="text-sm text-gray-600">Kebchi vous envoie les vidéos de votre sacrifice en Afrique et les images de la distribution.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-4">
              <Image src="/images/step4.png" alt="Confirmation" layout="fill" objectFit="contain" />
            </div>
            <h3 className="font-bold text-lg text-purple-600">Confirmation</h3>
            <p className="text-sm text-gray-600">Nous garantissons votre satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
