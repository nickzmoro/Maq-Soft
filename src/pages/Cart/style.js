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

      .nav-history {
        display: flex;
        align-items: center;
        gap: 10px;
        width: fit-content;

        .home {
          font-weight: 600;
        }

        p {
          font-weight: 500;
        }

        .home {
          display: flex;
          align-items: center;
          gap: 8px;

          &:hover {
            text-decoration: underline;
            opacity: 0.9;
          }
        }

        .home,
        p,
        span {
          color: rgba(0, 0, 0, 0.6);
          font-size: 1.1rem;

          @media (max-width: 768px) {
            font-size: 1.3rem;
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
      gap: 20px;
      position: relative;

      @media (max-width: 910px) {
        flex-direction: column;
      }

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

          .image-container {
            min-width: 125px;
            height: 150px;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
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

      .cart-summary {
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        margin-top: 20px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        height: 60vh;
        max-height: 60vh;
        position: sticky;
        top: 20px;
        right: 0;

        .viaWhatsApp {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background-color: #cfffd1;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 20px;

          p {
            display: flex;
            flex-direction: column;
            gap: 3px;
            color: rgba(0, 0, 0, 0.5);
            font-size: 0.9rem;

            span {
              color: #4caf50;
              font-weight: 600;
            }
          }
        }

        .cart-summary-detail {
          .user-name {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.25);

            label {
              font-size: 1.1rem;
              font-weight: 600;
            }

            input {
              padding: 8px 16px;
              border: 1px solid rgba(0, 0, 0, 0.25);
              border-radius: 8px;
              font-size: 0.9rem;
            }
          }

          .detail {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.25);

            h3 {
              font-size: 1.1rem;
              font-weight: 600;
            }

            p {
              display: flex;
              justify-content: space-between;
              color: rgba(0, 0, 0, 0.6);
              font-weight: 500;

              span {
                max-width: 190px;
              }
            }
          }

          .total-cart {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;

            h3 {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.8);
              font-weight: 600;
            }

            .total-price {
              font-weight: 700;
            }
          }

          .btn-finish {
            width: 100%;
            padding: 10px 0;
            border-radius: 12px;
            background-color: #3c4d5b;
            color: #fff;
            cursor: pointer;
            font-weight: 500;
            font-size: 1rem;
            transition: 0.2s ease;

            &:hover {
              opacity: 90%;
            }
          }
        }
      }
    }
  }
`;
