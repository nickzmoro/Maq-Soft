import { styled } from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
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
  background-color: #fff;
  padding: 10px 0;

  img {
    width: 100px;
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
            color: #1e1e1e;
          }
        }
      }
    }
  }

  .btn-cart {
    button {
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
      transition: 0.2s ease;

      &:hover {
        background-color: #5784ab;
      }
    }
  }
`;
