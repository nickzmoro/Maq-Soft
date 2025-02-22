import { Header, Info, Nav } from "./style.js";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiShoppingCart,
} from "react-icons/hi";
import logo from "../../assets/images/logo.png";

const Home = () => {
  return (
    <>
      <Header>
        <Info>
          <p className="address">
            <HiOutlineLocationMarker size={18} />
            R. Investigador Valdemir Nunes Medeiros
          </p>
          <p className="openingHours">
            <HiOutlineClock size={18} />
            Seg. à Sáb: 13:30 - 22:00 / Dom. 14:30 - 22:00
          </p>
        </Info>

        <Nav>
          <div className="image-logo">
            <img src={logo} alt="Logo" loading="lazy" />
          </div>
          <div className="navigation">
            <nav>
              <ul>
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#">Sabores</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Depoimentos</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="btn-cart">
            <button>
              <HiShoppingCart size={19} />
              Carrinho
            </button>
          </div>
        </Nav>
      </Header>
    </>
  );
};

export default Home;
