import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const images = [
  "/images/photo (11).png",
  "/images/photo (14).png",
  "/images/photo (36).png",
  // Ajoute d'autres images si nécessaire
]

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="py-12">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64">
            <Image src={src} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageCarousel
