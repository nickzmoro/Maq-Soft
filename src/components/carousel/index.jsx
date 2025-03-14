import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import { CarouselBox } from "../carousel/style.js";

/* CARROSSEL */
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <CarouselBox>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        keyboard={{
          enabled: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCreative, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://lvk0y2uvlr.ufs.sh/f/loKb7FsSxkQDs7AGHlmTAUkK0Lmuv17q9VjFpBHPoxaQ5W84"
            alt="cascão"
            width={300}
            height={450}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lvk0y2uvlr.ufs.sh/f/loKb7FsSxkQDs7AGHlmTAUkK0Lmuv17q9VjFpBHPoxaQ5W84"
            alt="cascão"
            width={300}
            height={450}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lvk0y2uvlr.ufs.sh/f/loKb7FsSxkQDs7AGHlmTAUkK0Lmuv17q9VjFpBHPoxaQ5W84"
            alt="cascão"
            width={300}
            height={450}
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>{" "}
    </CarouselBox>
  );
};

export default Carousel;
