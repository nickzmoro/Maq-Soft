import {
  Header,
  Info,
  Nav,
  HomeContainer,
  ThreeFactors,
  NavLink,
  Banner,
} from "./style.js";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiShoppingCart,
  HiOutlineClipboardList,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { PiGoogleChromeLogo, PiHourglassBold } from "react-icons/pi";
import logo from "../../assets/images/logo.png";
import iceCreams from "../../assets/images/icecreams-home.png";
import cascaoTrufadoBanner from "../../assets/images/cascao-banner.png";
import superSundaeBanner from "../../assets/images/sundae-banner.png";
import milkShakeBanner from "../../assets/images/milkshake-banner.png";
import { useState } from "react";
import { product } from "../../data/products.js";

const Home = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 150) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <Header changeBackground={changeHeader}>
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
                  <NavLink href="#" changeColor={changeHeader}>
                    Início
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" changeColor={changeHeader}>
                    Sabores
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" changeColor={changeHeader}>
                    Sobre
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" changeColor={changeHeader}>
                    Depoimentos
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" changeColor={changeHeader}>
                    Contato
                  </NavLink>
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

      {/* HOME */}
      <HomeContainer>
        <div className="infoCTA">
          <h1>Maq Soft - A melhor sorveteria de Bauru!</h1>
          <p>
            Desde 2009, trazendo cremosidade e sabor irresistível para você.
            Venha experimentar nossos sabores exclusivos!
          </p>
          <button className="btn-CTA">
            Ver Cardápio
            <HiOutlineClipboardList size={19} />
          </button>
        </div>
        <div className="imgIceCreams">
          <img src={iceCreams} alt="Nossos Sorvetes" loading="lazy" />
        </div>
      </HomeContainer>

      {/* TRÊS FATORES */}
      <ThreeFactors>
        <div className="factor-content">
          <HiOutlineShoppingBag size={"5rem"} color="#406381" />
          <div className="factor-txt">
            <h3>Reserva Online</h3>
            <p>
              Faça sua reserva de forma digital e retire seu sorvete sem espera
              e fila!
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="factor-content">
          <PiGoogleChromeLogo size={"5rem"} color="#406381" />
          <div className="factor-txt">
            <h3>Avaliações do Google</h3>
            <p>
              Nossa sorveteria é muito bem avaliada no Google, trazendo boas
              experiências.
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="factor-content">
          <PiHourglassBold size={"5rem"} color="#406381" />
          <div className="factor-txt">
            <h3>Experiência no mercado</h3>
            <p>
              Mais de 15 anos de tradição e centenas de clientes satisfeitos -
              Reserve e Retire!
            </p>
          </div>
        </div>
      </ThreeFactors>

      {/* BANNERS */}
      <Banner>
        <div className="bigger-banner">
          <div className="banner-txt">
            <h4>O prefiridinho da galera</h4>
            <h3>
              Cascão <br />
              Trufado
            </h3>
            <p>
              Sorvete expresso <span>+</span> chocolate em volta <span>+</span>{" "}
              cobertura <span>+</span> canudo waffer
            </p>
            <button>Reserve agora!</button>
          </div>
          <img src={cascaoTrufadoBanner} alt="Cascão Trufado" loading="lazy" />
        </div>
        <div className="small-banners-container">
          <div className="small-banner">
            <div className="banner-txt">
              <h3>
                Super <br />
                Sundae
              </h3>
              <button>Reserve agora!</button>
            </div>
            <img src={superSundaeBanner} alt="Super Sundae" loading="lazy" />
          </div>
          <div className="small-banner">
            <div className="banner-txt">
              <h3>
                Milk <br />
                Shake
              </h3>
              <button>Reserve agora!</button>
            </div>
            <img src={milkShakeBanner} alt="Milk Shake" loading="lazy" />
          </div>
        </div>
      </Banner>

      {/* NOSSOS PRODUTOS */}
      {product.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} loading="lazy" />
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
