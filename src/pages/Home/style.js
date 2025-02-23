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

  img {
    width: 90px;
    cursor: pointer;
  }

  .navigation {
    nav {
      ul {
        display: flex;
        gap: 70px;

        li {
          a {
            font-size: 1.1rem;
            font-weight: 500;
            color: #fff;
          }
        }
      }
    }
  }

  .btn-cart {
    button {
      ${buttonWithIcon}
    }
  }
`;

/* Home (página inicial) */
export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
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
