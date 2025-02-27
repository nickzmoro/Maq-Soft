import { styled } from "styled-components";

export const CarouselBox = styled.div`
  .mySwiper {
    width: 300px;
    height: 450px;
    transform: scale(0.9);

    .swiper {
      margin: 100px auto;
      width: 300px;
      height: 450px;
      border-radius: 12px;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      color: #fff;
    }
    /* Estilos personalizados para a paginação */
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
      background: #406381;
    }
  }
`;
