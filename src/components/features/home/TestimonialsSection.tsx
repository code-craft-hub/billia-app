import { Badge } from "@/components/ui/badge";
import {Swiper ,SwiperSlide} from "swiper/react";
import { Autoplay, Mousewheel, Keyboard, Navigation } from "swiper/modules";
import { testimonials } from "@/constants";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-blend-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant={"outline"} className="rounded-full text-white mb-6">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Customers Says
          </h2>
        </div>
        <div className="relative w-full max-w-7xl mx-auto">
        
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            loop
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            keyboard={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              1300: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
            }}
          >
            {testimonials?.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard key={index} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}