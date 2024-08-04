import Image from 'next/image'

export default function CountriesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Khalli Kebchi ytakellaf bkolchi</h2>
        <p className="mb-8">Voici les pays où vous pouvez réaliser votre sacrifice pour l'Aïd al-Adha :</p>
        <div className="flex justify-around items-center mb-8">
          <div className="flex flex-col items-center">
            <Image src="/images/image mouton marocain 1.png" alt="Tanzanie" width={64} height={64} />
            <p className="mt-2">Tanzanie - تنزانيا</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/placeholder.png" alt="Madagascar" width={64} height={64} />
            <p className="mt-2">Madagascar - مدغشقر</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/Group 18942.png" alt="Kenya" width={64} height={64} />
            <p className="mt-2">Kenya - كينيا</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/imagemaroc21.png" alt="Maroc" width={64} height={64} />
            <p className="mt-2">Maroc - المغرب</p>
          </div>
        </div>
        <button className="bg-purple-600 text-white py-2 px-6 rounded-full">Offrir mon mouton</button>
      </div>
    </section>
  )
}
