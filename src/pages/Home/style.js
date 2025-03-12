import { styled, css, keyframes } from "styled-components";
import backgroundImage from "../../assets/images/background.png";
import vectorText from "../../assets/images/vectorText.png";

/* VARIÁVEIS */
const buttonWithIcon = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: #406381;
  color: #fff;
  cursor: pointer;
  width: fit-content;
  transition: 0.2s ease;

  &:hover {
    background-color: #365977;
  }
`;

const buttonBanner = css`
  padding: 8px 20px;
  font-size: 1.1rem;
  border-radius: 8px;
  background-color: rgba(256, 256, 256, 0.2);
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  width: fit-content;
  transition: 0.2s ease;

  &:hover {
    background-color: rgba(256, 256, 256, 0.5);
  }
`;

const title = css`
  font-size: 2rem;
  font-weight: 800;
  color: #1e1e1e;
`;

/* KEYFRAMES */
const shake = keyframes`
  0%,
  100% {
	transform: translateY(0);
  }

  10%,
  30%,
  50%,
  70% {
	transform: translateY(-5px);
  }

  20%,
  40%,
  60% {
	transform: translateY(5px);
  }

  80% {
	transform: translateY(5.4px);
  }

  90% {
	transform: translateY(-5.4px);
  }
`;

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/* Centralizando todas as sections para mobile */

/* Botão FIXO do WhatsApp */
export const WhatsApp = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    padding: 8px 12px;
    border-radius: 12px;
    background-color: #fff;
    position: relative;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    display: none;

    &::after {
      content: "▶";
      position: absolute;
      top: 8px;
      right: -12px;
      color: #fff;
      filter: drop-shadow(3px 1px 4px rgba(0, 0, 0, 0.25));
    }
  }

  a {
    padding: 10px;
    background-color: #25d366;
    display: flex;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0 0 50px rgba(37, 211, 102, 0.5);
    z-index: 2;
  }

  &:has(a:hover) p {
    display: block;
    animation: ${opacity} 0.5s ease normal;
  }
`;

/* Header */
export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  z-index: 99;
  background-color: ${(props) =>
    props.changeBackground ? "#fff" : "transparent"};
  transition: 0.2s ease;
  box-shadow: ${(props) =>
    props.changeBackground ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none"};

  /* Esconde o menu mobile por padrão */
  .mobile-menu {
    display: none;
  }

  /* Media query para dispositivos móveis */
  @media (max-width: 768px) {
    .navigation {
      display: none;
    }

    /* Mostra o menu mobile (burger menu) */
    .mobile-menu {
      display: block;
    }

    /* Estilos do burger menu (copiados do exemplo anterior) */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.8); /* Aumentei a opacidade de 0.3 para 0.7 */
      top: -0px;
      left: 0;
    }

    .bm-burger-button {
      position: relative;
      width: 26px;
      height: 20px;
      right: 0;
    }

    .bm-burger-bars {
      background: ${(props) => (props.changeBackground ? "#2E2E2E" : "#fff")};
      height: 15% !important;
      opacity: 1 !important;
    }

    .bm-burger-bars-hover {
      background: ${(props) =>
        props.changeBackground ? "#406381" : "#d6ecff"};
    }

    .bm-cross-button {
      height: 24px;
      width: 24px;
      border: 2px solid #406381;
      border-radius: 6px;
      padding: 0 0 25px 25px !important;
      background-color: rgba(190, 225, 255, 0.1);

      &:hover {
        background-color: rgba(190, 225, 255, 0.5);
      }
    }

    .bm-cross {
      background: #406381;
    }

    .bm-menu-wrap {
      position: fixed;
      top: 0;
      height: 100%;
      width: 100%;
    }

    .bm-menu {
      background: #f3f3f3;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
      border-left: 1px solid #fff;
    }

    .bm-scroll-button {
      opacity: 0.2;
    }

    .bm-item-list {
      padding: 0.8em;

      a {
        font-size: 1.25rem !important;
        font-weight: 500;
        display: flex !important;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-radius: 6px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.03);
        }
      }
    }

    .bm-item {
      display: inline-block;
      text-decoration: none;
      margin-bottom: 20px;
      color: #000;
      transition: color 0.2s;
      opacity: 0.9;
    }

    .bm-item:hover {
      opacity: 0.8;
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }

    .menu-item {
      padding: 1rem 0;
      font-size: 1.2rem;
      display: block;
    }

    .icon-cart {
      width: 25px;
      height: 25px;
      color: ${(props) => (props.changeBackground ? "#2E2E2E" : "#fff")};

      &:hover {
        color: ${(props) => (props.changeBackground ? "#406381" : "#d6ecff")};
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #406381;
  color: #fff;
  padding: 10px 0;

  .address {
    border-right: 1px solid #fff;
    padding-right: 20px;
    margin: 0 0 0 20px;

    @media (max-width: 728px) {
      border: none;
      padding-right: 0;
    }
  }

  .openingHours {
    margin: 0 20px 0 20px;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .address,
  .openingHours {
    @media (max-width: 728px) {
      font-size: 0.8rem;
    }

    @media (max-width: 385px) {
      font-size: 0.75rem;
    }
  }

  .icon {
    @media (max-width: 728px) {
      width: 30px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: transparent;
  padding: 10px 0;
  color: ${(props) => (props.changeColor ? "#000" : "#fff")};

  @media (max-width: 768px) {
    justify-content: space-between;
    margin: 0 30px;

    .btn-cart {
      a {
        padding: 0px !important;
        background-color: transparent !important;

        span {
          display: none;
        }
      }
    }
  }

  .nav-container {
    display: flex;
    align-items: center;
    gap: 200px;

    h3 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 5px;
    }

    @media (max-width: 1400px) {
      gap: 100px;
    }

    @media (max-width: 950px) {
      gap: 25px;
    }

    @media (max-width: 768px) {
      flex-direction: row-reverse;
    }
  }

  img {
    width: 90px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 70px;
    }
  }

  .navigation {
    nav {
      ul {
        display: flex;
        gap: 70px;
      }
    }
  }

  .btn-cart {
    position: relative;

    a {
      ${buttonWithIcon}
    }

    .cart-count {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: #d6ecff;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 0.8rem;
        font-weight: 500;
        color: #406381;
      }
    }
  }
`;

export const NavLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => (props.changeColor ? "#000" : "#fff")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    background-color: #406381;
    width: 0%;
    height: 3px;
    border-radius: 25%;
    transition: 0.2s ease;

    @media (max-width: 768px) {
      bottom: 0;
    }
  }

  &:hover::after {
    width: 100%;
  }
`;

/* Home (página inicial) */
export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  width: 100vw;
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat center/cover fixed;
  position: relative;
  z-index: 1;
  object-fit: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(64, 99, 129, 60) 0%,
      rgba(0, 0, 0, 75) 100%
    );
    z-index: -1;
    opacity: 70%;
  }

  .infoCTA {
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 1150px) {
      align-items: center;
      text-align: center;
      margin: 0 20px;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: #fff;
      max-width: 600px;
      line-height: 60px;
      position: relative;
      margin-bottom: 15px;

      @media (max-width: 768px) {
        font-size: 3rem;
      }

      &:before {
        content: "";
        position: absolute;
        top: 92px;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${vectorText});
        background-repeat: no-repeat;
        background-size: 45%;
        z-index: -1;

        @media (max-width: 1150px) {
          left: 8%;
        }
      }
    }

    p {
      font-size: 1.1rem;
      color: #fff;
      opacity: 90%;
      max-width: 600px;
    }

    .btn-CTA {
      ${buttonWithIcon}
    }
  }

  .imgIceCreams {
    img {
      width: 400px;
      filter: drop-shadow(0 50px 50px rgba(64, 99, 129, 100));
      animation: ${shake} 10s ease-in-out 0s infinite normal none;
    }

    @media (max-width: 1150px) {
      display: none;
    }
  }
`;

/* Três Fatores */
export const ThreeFactors = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 5rem;

  .factors {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    @media (max-width: 942px) {
      flex-direction: column;
    }

    .factor-content {
      display: flex;
      align-items: center;
      gap: 12px;

      .factor-txt {
        h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: #406381;
        }

        p {
          max-width: 280px;
          font-size: 1.1rem;
        }
      }
    }
  }

  .line {
    width: 1px;
    height: 65px;
    background-color: rgba(0, 0, 0, 0.2);

    @media (max-width: 942px) {
      width: 65px;
      height: 1px;
    }
  }
`;

/* BANNERS */
export const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 1292px) {
    margin: 0 20px;
  }

  .paragraph-banner {
    font-size: 1.1rem;
    color: rgba(256, 256, 256, 0.8);
    max-width: 300px;
  }

  .bigger-banner {
    display: flex;
    gap: 10px;
    background-color: #31475a;
    border-radius: 12px;
    padding: 20px 64px;

    @media (max-width: 1292px) {
      flex-direction: column;
      padding: 20px 30px;
    }

    .banner-txt {
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 854px) {
        margin-right: 65px;
      }

      h4 {
        font-size: 1rem;
        letter-spacing: 1px;
        color: #bee1ff;
        font-weight: 500;
        margin-bottom: 3px;
      }

      h3 {
        font-size: 3rem;
        font-weight: 800;
        color: #fff;
        margin-bottom: 25px;

        i {
          color: #bee1ff;
          font-weight: 700;
          font-family: cursive;
        }
      }

      h4 {
        text-transform: uppercase;
      }

      p {
        span {
          color: #bee1ff;
        }
      }
    }

    img {
      width: 412px;
      transform: translateX(45px);
      filter: drop-shadow(0 0 25px rgba(190, 225, 255, 0.3));

      @media (max-width: 1292px) {
        width: 165px;
      }

      @media (max-width: 854px) {
        display: none;
      }
    }
  }

  .small-banners-container {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .small-banner {
      background-color: #406381;
      border-radius: 12px;
      display: flex;
      padding: 20px 30px;
      justify-content: space-between;

      h3 {
        font-size: 2.5rem;
        line-height: 50px;
        text-transform: uppercase;
        font-weight: 800;
        color: #fff;
      }

      a {
        ${buttonBanner}
      }

      img {
        width: 120px;
        filter: drop-shadow(0 0 25px rgba(190, 225, 255, 0.3));
      }
    }

    .small-banner:nth-last-child(1) {
      background-color: #8ba3b8;
    }

    .banner-txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      p {
        max-width: 250px;
        margin-bottom: 10px;
      }
    }

    img {
      width: 155px;
      transform: translateX(10px);
    }
  }
`;

/* NOSSOS PRODUTOS */
export const ProductList = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 110px 0;

  .product-container {
    width: 70%;
    height: 100%;

    @media (max-width: 595px) {
      width: 85%;
    }

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 30px 0;
    }

    h2 {
      ${title}
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding-bottom: 15px;
    }

    .btn-filters {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      margin: 20px 0 50px 0;

      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    .btn-category {
      display: flex;
      gap: 7px;

      @media (max-width: 1251px) {
        overflow-x: scroll;
        max-width: 500px;
        scrollbar-width: 2px;
        scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
      }

      @media (max-width: 500px) {
        max-width: 325px;
      }
    }

    .products-container-box {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;

      @media (max-width: 1555px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 970px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .product-box {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(0, 0, 0, 0.1);
        transition: 0.1s ease;

        &:hover {
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

          img {
            transform: scale(1.02) rotate(2deg);
          }
        }

        .image-container {
          min-width: 125px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(214, 236, 255, 0.5);
          border-radius: 30% 70% 70% 30% / 30% 67% 33% 70%;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: 0.2s ease;
          }
        }

        .details-product {
          display: flex;
          flex-direction: column;
          gap: 10px;

          h3 {
            color: #1e1e1e;
            font-size: 1.35rem;
          }

          p {
            font-size: 1rem;
            color: rgba(0, 0, 0, 0.6);
          }

          .price {
            color: #1e1e1e;
            font-weight: 700;
          }

          .price-buy {
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
              display: flex;
              align-items: center;
              gap: 5px;
              padding: 6px;
              background-color: #3c4d5b;
              border-radius: 5px;
              cursor: pointer;
              color: #fff;
              font-weight: 500;
              transition: 0.2s ease;

              &:hover {
                filter: opacity(0.9);
              }
            }
          }
        }
      }
    }

    .btn-see-container {
      display: flex;
      justify-content: center;
      margin-top: 30px;

      .btn-see-more,
      .btn-see-less {
        padding: 10px 30px;
        font-size: 1rem;
        border-radius: 12px;
        background-color: transparent;
        border: 2px solid #406381;
        color: #406381;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          background-color: rgba(64, 99, 129, 0.1);
        }
      }
    }
  }
`;

export const FilterButton = styled.button`
  color: ${(props) => (props.isActive ? "#fff" : "rgba(0, 0, 0, 0.5)")};
  background-color: ${(props) => (props.isActive ? "#406381" : "transparent")};
  border: ${(props) =>
    props.isActive ? "1px solid #406381" : "1px solid rgba(0, 0, 0, 0.3);"};
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? "#406381" : "rgba(0, 0, 0, 0.06)"};
  }
`;

export const RemoveFilterButton = styled.button`
  height: fit-content;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: transparent;
  display: flex;
  gap: 5px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px;
  color: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

/* SOBRE A MAQSOFT */
export const AboutUs = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 110px;

  .about-container {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 595px) {
      justify-content: center;
      width: 85%;
    }

    .ab-txt {
      display: flex;
      flex-direction: column;
      gap: 35px;

      .ab-title {
        display: flex;
        align-items: center;
        gap: 20px;

        @media (max-width: 595px) {
          flex-direction: column;
          align-items: start;
        }

        h2 {
          ${title}
        }
      }

      .ab-paragraph {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 1.1rem;
        max-width: 750px;
        color: rgba(0, 0, 0, 0.7);

        .ab-subtitle {
          font-size: 1.15rem;
          font-weight: 600;
          color: #406381;
        }
      }
    }
  }
`;

/* DEPOIMENTOS */
export const Depoiments = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 110px;

  .dp-container {
    width: 70%;
    height: 100%;

    @media (max-width: 595px) {
      width: 85%;
    }

    .dp-title {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 35px;

      @media (max-width: 595px) {
        flex-direction: column;
        align-items: start;
      }

      h2 {
        ${title}
      }
    }

    .dp-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
    }
  }
`;

/* LOCALIZAÇÃO */
export const Location = styled.section`
  width: 100vw;
  height: auto;
  background-color: #406381;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 300px 0 110px 0;

  .vector-divider {
    position: absolute;
    top: 0;
    left: 0;
  }

  .location-container {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    flex-wrap: wrap;

    @media (max-width: 595px) {
      width: 85%;
    }

    @media (max-width: 850px) {
      justify-content: baseline;
    }

    .loc-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 25px;

      .loc-txt {
        .loc-title {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;

          @media (max-width: 595px) {
            flex-direction: column;
            align-items: start;
          }

          h2 {
            ${title}
            color: #fff;
          }

          & .line-title {
            background-color: #bee1ff;
          }
        }

        p,
        strong {
          font-size: 1.1rem;
          color: rgba(256, 256, 256, 0.8);
          max-width: 550px;
        }
      }

      .social-media {
        display: flex;
        flex-direction: column;

        p {
          margin-bottom: 10px;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .sc-media-icon {
          display: flex;
          gap: 5px;

          a {
            display: flex;
            padding: 8px;
            background-color: rgba(190, 225, 255, 0.2);
            border-radius: 50px;
            transition: 0.2s ease;
            border: 1px solid rgba(256, 256, 256, 0.5);

            &:hover {
              background-color: rgba(190, 225, 255, 0.4);
              color: #406381;
            }
          }
        }
      }
    }

    .loc-map {
      border: 5px solid #bee1ff;
      border-radius: 17px;
      display: flex;

      @media (max-width: 595px) {
        width: 100%;
        justify-content: center;
      }

      iframe {
        border-radius: 12px;

        @media (max-width: 850px) {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
`;

/* CONTATO */
export const Contact = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #406381;
  padding: 110px 0 110px 0;

  .contact-container {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 595px) {
      width: 85%;
    }

    .ct-title {
      h2 {
        ${title}
        color: #fff;

        @media (max-width: 595px) {
          text-align: start;
        }
      }

      .line-title {
        background-color: #bee1ff;
        margin-top: 5px;
      }
    }

    .ct-form {
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;

        div {
          display: flex;
          flex-direction: column;
          gap: 5px;

          label {
            color: #fff;

            span {
              color: #bee1ff;
            }
          }

          label,
          span {
            font-size: 1.1rem;
          }

          input,
          textarea {
            width: 100%;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: rgba(256, 256, 256, 0.2);
            border: 1px solid rgba(256, 256, 256, 0.3);
            color: #fff;
            font-size: 1rem;
          }

          label,
          input,
          textarea,
          input::placeholder,
          textarea::placeholder {
            @media (max-width: 595px) {
              text-align: start;
            }
          }

          & input:focus,
          textarea:focus {
            outline: none;
            border: 1px solid #fff;
          }

          & input::placeholder,
          textarea::placeholder {
            color: rgba(256, 256, 256, 0.5);
          }

          textarea {
            min-height: 200px;
            resize: vertical;
          }
        }

        button {
          width: fit-content;
          padding: 10px 50px;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 600;
          color: #406381;
          cursor: pointer;
          margin-top: 5px;
          transition: 0.2s ease;

          &:hover {
            filter: opacity(0.9);
          }
        }
      }
    }
  }
`;

/* FOOTER */
export const Footer = styled.footer`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #212a31;
  color: #fff;

  .footer-container {
    width: 70%;
    display: flex;
    flex-direction: column;

    @media (max-width: 595px) {
      width: 85%;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(256, 256, 256, 0.5);
      padding-bottom: 15px;
      gap: 20px;
      flex-wrap: wrap;

      .foot-info {
        img {
          width: 125px;
          margin-bottom: 5px;
        }

        .email {
          font-weight: 500;
          margin-bottom: 3px;
        }

        .tel {
          color: rgba(256, 256, 256, 0.7);
        }
      }

      .foot-navigation {
        display: flex;
        gap: 25px;
        flex-wrap: wrap;

        div {
          display: flex;
          flex-direction: column;
          gap: 2px;

          p {
            margin-bottom: 8px;
            font-weight: 500;
          }

          a {
            color: rgba(256, 256, 256, 0.7);
            max-width: 120px;

            &:hover {
              color: rgba(256, 256, 256, 0.8);
            }
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
      margin-top: 15px;
      gap: 25px;

      p {
        color: rgba(256, 256, 256, 0.8);
        text-align: end;
      }

      a {
        padding: 5px;
        background-color: rgba(256, 256, 256, 0.05);
        border: 1px solid #bee1ff;
        border-radius: 5px;
        display: flex;
        transition: 0.2s ease;

        &:hover {
          background-color: rgba(256, 256, 256, 0.1);
        }
      }
    }
  }
`;
