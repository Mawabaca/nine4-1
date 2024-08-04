import VerticalCarousel from './VerticalCarousel'

export default function AboutSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Qu'est Ce Que Dir Kebchi ?</h2>
          <div className="flex items-center mb-4">
            <div className="w-2 h-1 bg-purple-600 mr-2"></div>
            <div className="w-4 h-1 bg-purple-600 mr-2"></div>
            <div className="w-12 h-1 bg-purple-600"></div>
          </div>
          <p className="text-lg mb-4">Chez Kebchi, confiance rime avec transparence. Nous sommes l'une des seules associations qui vous envoie les photos et les vidéos de vos dons ainsi que de vos sacrifices.</p>
          <p className="text-lg mb-4">Nous réalisons aussi les Aqiqa, construction de puits, plantation d'arbres fruitiers</p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full">Découvrir plus</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <VerticalCarousel />
        </div>
      </div>
    </section>
  )
}
