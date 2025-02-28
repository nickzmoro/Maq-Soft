import { styled } from "styled-components";

export const DepoimentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 320px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 20px 40px 20px;
  border-radius: 12px;

  .dp-user-image {
    margin-bottom: 5px;
    position: relative;

    img {
      width: 100px;
      z-index: 1;
      opacity: 50%;
      position: relative;
    }

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 0;
      width: 100px;
      height: 100px;
      background-color: #406381;
      border-radius: 50px;
      z-index: 2;
      opacity: 30%;
    }
  }

  .name-user {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    p {
      font-weight: 600;
      font-size: 1.1rem;
    }
  }

  .dp-txt {
    p {
      font-size: 1.05rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
