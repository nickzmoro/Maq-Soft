import { styled } from "styled-components";

export const CartContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .cart-content {
    width: 80%;
    height: auto;
    padding: 50px 0;

    header {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .btn-back {
        display: flex;
        gap: 8px;
        color: rgba(0, 0, 0, 0.9);
        font-size: 1.1rem;
        font-weight: 600;
        border: 1px solid rgba(0, 0, 0, 0.9);
        width: fit-content;
        padding: 8px 24px;
        border-radius: 12px;

        .icon-back {
          transition: 0.2s ease;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);

          .icon-back {
            transform: translateX(-2px);
          }
        }
      }

      h3 {
        font-size: 2rem;
        font-weight: 800;
        color: rgba(0, 0, 0, 0.9);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        padding-bottom: 10px;
      }
    }

    main {
      display: flex;
      justify-content: space-between;

      .empty-cart {
        margin-top: 20px;

        p {
          font-size: 1.1rem;
        }
      }

      .items-cart {
        width: 100%;

        .item-cart-box {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 20px 0;

          img {
            width: 90px;
          }

          .item-details {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .item-name {
              font-size: 1.3rem;
              font-weight: 700;
            }

            .item-quantity {
              display: flex;
              align-items: center;
              gap: 8px;
              background-color: rgba(0, 0, 0, 0.08);
              width: fit-content;
              padding: 2px 0px;
              border-radius: 12px;

              .btn-quantity {
                background-color: rgba(0, 0, 0, 0.01);
                cursor: pointer;
                font-size: 1.1rem;
                display: flex;
                padding: 2px 8px;
                border-radius: 50px;

                &:hover {
                  background-color: rgba(0, 0, 0, 0.05);
                }
              }
            }

            .subtotal-remove {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 16px;

              .item-subtotal {
                p {
                  font-size: 1.1rem;
                  font-weight: 600;
                }
              }

              .btn-remove {
                padding: 3px;
                background-color: transparent;
                border: 2px solid #ff0000;
                display: flex;
                border-radius: 6px;
                cursor: pointer;
                transition: 0.2s ease;

                &:hover {
                  background-color: rgba(256, 0, 0, 0.3);
                }
              }
            }
          }
        }
      }
    }
  }
`;
