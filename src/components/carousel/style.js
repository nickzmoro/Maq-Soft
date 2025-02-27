import { styled } from "styled-components";

export const CarouselBox = styled.div`
  border-radius: 30% 70% 70% 30% / 30% 37% 63% 70%;
  border: 1px solid #406381;
  background-color: rgba(64, 99, 129, 0.2);

  .mySwiper {
    width: 300px;
    height: 450px;
    transform: scale(0.9);

    .swiper {
      margin: 100px auto;
      width: 300px;
      height: 450px;
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
