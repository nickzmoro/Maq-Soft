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
  }

  .openingHours {
    margin-left: 20px;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: transparent;
  padding: 10px 0;
  color: ${(props) => (props.changeColor ? "#000" : "#fff")};

  img {
    width: 90px;
    cursor: pointer;
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
    button {
      ${buttonWithIcon}
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
  background-image: url(${backgroundImage});
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 1;

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

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: #fff;
      max-width: 600px;
      line-height: 60px;
      position: relative;
      margin-bottom: 15px;

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
      }
    }

    p {
      font-size: 1.1rem;
      color: #fff;
      opacity: 90%;
      max-width: 600px;
    }

    button {
      ${buttonWithIcon}
    }
  }

  .imgIceCreams {
    img {
      width: 400px;
      filter: drop-shadow(0 50px 50px rgba(64, 99, 129, 100));
      animation: ${shake} 10s ease-in-out 0s infinite normal none;
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
  flex-wrap: wrap;
  gap: 40px;
  padding: 6rem 5rem;

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

  .line {
    width: 1px;
    height: 65px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

/* BANNERS */
export const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0rem 0 3rem 0;

  .bigger-banner {
    display: flex;
    background-color: #31475a;
    border-radius: 12px;
    padding: 0px 64px;

    .banner-txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
      }

      h4,
      h3 {
        text-transform: uppercase;
      }

      p {
        font-size: 1.1rem;
        color: rgba(256, 256, 256, 0.8);
        max-width: 300px;
        margin-bottom: 25px;

        span {
          color: #bee1ff;
        }
      }

      button {
        ${buttonBanner}
      }
    }

    img {
      width: 325px;
      transform: scale(1.2) translateX(45px);
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

      button {
        ${buttonBanner}
      }
    }

    .small-banner:nth-last-child(1) {
      background-color: #8ba3b8;
    }

    .banner-txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  .product-container {
    width: 66%;
    height: 100%;

    h2 {
      font-size: 2.2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding-bottom: 15px;
      font-weight: 800;
      color: #1e1e1e;
    }

    .btn-filters {
      margin: 20px 0 50px 0;
      display: flex;
      gap: 7px;
    }

    .products-container-box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      flex-wrap: wrap;
      gap: 15px;

      .product-box {
        display: flex;
        align-items: center;
        gap: 20px;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
        transition: 0.1s ease;

        &:hover {
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

          img {
            transform: scale(1.02) rotate(2deg);
          }
        }

        img {
          width: 150px;
          height: 150px;
          transition: 0.3s ease;
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
  }
`;

export const FilterButton = styled.button`
  color: ${(props) => (props.isActive ? "#fff" : "rgba(0, 0, 0, 0.5)")};
  background-color: ${(props) => (props.isActive ? "#406381" : "transparent")};
  border: ${(props) =>
    props.isActive ? "1px solid #406381" : "1px solid rgba(0, 0, 0, 0.3);"};
  font-size: 1.1rem;
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
