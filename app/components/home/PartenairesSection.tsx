'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

const partenaires = [
    { id: 1, name: 'Partenaire 1', logo: '/images/partner/partner1.png' },
    { id: 2, name: 'Partenaire 2', logo: '/images/partner/partner2.png' },
    { id: 3, name: 'Partenaire 3', logo: '/images/partner/partner3.png' },
    { id: 4, name: 'Partenaire 4', logo: '/images/partner/partner4.jpg' },
    { id: 5, name: 'Partenaire 5', logo: '/images/partner/partner5.png' },
]

const PartenairesSection = () => {
    return (
        <section
            className="w-full py-20 relative overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(14, 36, 67, 0.5) 0%, rgba(14, 36, 67, 0.2) 100%)`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'contain',
            }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-12">Nos Partenaires</h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-swiper-pagination',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    className="!overflow-hidden"
                >
                    {partenaires.map((partner, index) => (
                        <SwiperSlide key={partner.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={140}
                                    height={70}
                                    className="object-contain grayscale hover:grayscale-0 transition duration-300 max-h-[70px]"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-swiper-pagination mt-8 flex justify-center space-x-3" />
            </div>

            {/* Styles pagination */}
            <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #ccc;
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #f97316;
          transform: scale(1.2);
          box-shadow: 0 0 8px #f97316;
        }
      `}</style>
        </section>
    )
}

export default PartenairesSection
