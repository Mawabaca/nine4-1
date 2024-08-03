
import Image from 'next/image'

export default function Home() {
    return (
      <div>
        <main className="container mx-auto px-4">
          <section className="py-12 text-center">
            <h2 className="text-3xl font-bold text-purple-600">Nos actions en images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="relative w-full h-64">
                <Image src="/images/photo (11).png" alt="Action 1" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-full h-64">
                <Image src="/images/photo (14).png" alt="Action 2" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-full h-64">
                <Image src="/images/photo (36).png" alt="Action 3" layout="fill" objectFit="cover" />
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }