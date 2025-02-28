import {
  Header,
  Info,
  Nav,
  HomeContainer,
  ThreeFactors,
  NavLink,
  Banner,
  ProductList,
  FilterButton,
  AboutUs,
  Depoiments,
} from "./style.js";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiShoppingCart,
  HiOutlineClipboardList,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { PiGoogleChromeLogo, PiHourglassBold } from "react-icons/pi";
import { IoBagAdd } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import iceCreams from "../../assets/images/icecreams-home.png";
import cascaoTrufadoBanner from "../../assets/images/cascao-banner.png";
import superSundaeBanner from "../../assets/images/sundae-banner.png";
import milkShakeBanner from "../../assets/images/milkshake-banner.png";
import { useState } from "react";
import { product } from "../../data/products.js";
import Carousel from "../../components/carousel/index.jsx";
import DepoimentsCard from "../../components/card_depoimentos/index.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 150) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  // Estado para armazenar a categoria de filtro ativa
  const [activeFilter, setActiveFilter] = useState("all");

  // Função para filtrar produtos com base na categoria selecionada
  const getFilteredProducts = () => {
    if (activeFilter === "all") {
      return product; // Retorna todos os produtos
    } else if (activeFilter === "picole") {
      return product.filter((item) => item.category === "picole");
    } else if (activeFilter === "pote") {
      return product.filter((item) => item.category === "pote");
    } else if (activeFilter === "acai") {
      return product.filter((item) => item.category === "acai");
    }
    return product; // Caso padrão
  };

  // Produtos filtrados baseados no filtro ativo
  const filteredProducts = getFilteredProducts();

  // Função para mudar o filtro ativo
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
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
                  <NavLink href="#sabores" changeColor={changeHeader}>
                    Sabores
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#sobre" changeColor={changeHeader}>
                    Sobre
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#depoimentos-de-clientes"
                    changeColor={changeHeader}
                  >
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
      <ProductList id="sabores">
        <div className="product-container">
          <div>
            <h2>Nossos produtos</h2>
          </div>
          <div className="btn-filters">
            <FilterButton
              isActive={activeFilter === "all"}
              onClick={() => handleFilterChange("all")}
            >
              Todos
            </FilterButton>
            <FilterButton
              isActive={activeFilter === "pote"}
              onClick={() => handleFilterChange("pote")}
            >
              Potes
            </FilterButton>
            <FilterButton
              isActive={activeFilter === "acai"}
              onClick={() => handleFilterChange("acai")}
            >
              Açaí
            </FilterButton>
            <FilterButton
              isActive={activeFilter === "picole"}
              onClick={() => handleFilterChange("picole")}
            >
              Picolés
            </FilterButton>
          </div>
          <div className="products-container-box">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-box">
                <img src={product.imageUrl} alt={product.name} loading="lazy" />
                <div className="details-product">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price-buy">
                    <p className="price">
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product.price)}
                    </p>
                    <button>
                      <IoBagAdd size={18} color="#fff" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProductList>

      {/* SOBRE */}
      <AboutUs id="sobre">
        <div className="about-container">
          <div className="ab-txt">
            <div className="ab-title">
              <h2>Sobre a Maq Soft</h2>
              <div className="line-title"></div>
            </div>
            <p className="ab-paragraph">
              <span className="ab-subtitle">Quem nós somos?</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              odio ipsum quaerat repellendus? At quae, pariatur autem quas
              quibusdam omnis deserunt eaque atque odit, magnam ea vitae
              molestias, totam numquam? At quae, pariatur autem quas quibusdam
              omnis deserunt eaque atque odit, magnam ea vitae molestias, totam
              numquam?
              <span className="ab-subtitle">Princípios e valores</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium sint in fugit tenetur veniam animi, soluta voluptates
              dolor doloribus eum distinctio repudiandae. Voluptas, repellat
              facilis quibusdam vero doloremque quis accusantium. At quae,
              pariatur autem quas quibusdam omnis deserunt eaque atque odit,
              magnam ea vitae molestias, totam numquam?
            </p>
          </div>
          <div className="carousel-container">
            <Carousel className="carousel"></Carousel>
          </div>
        </div>
      </AboutUs>

      {/* DEPOIMENTOS */}
      <Depoiments id="depoimentos-de-clientes">
        <div className="dp-container">
          <div className="dp-title">
            <div className="line-title"></div>
            <h2>O que os clientes dizem?</h2>
          </div>
          <div className="dp-cards">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              grabCursor={true}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1100: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <DepoimentsCard
                  user="Francieli Ferrari B."
                  customerMessage="“Um dos melhores sorvetes de Bauru, o atendimento então sem igual, o melhor”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DepoimentsCard
                  user="Ângela Oliveira"
                  customerMessage="“Que ambiente agradável! Local limpo, organizado, perfeito para ir sozinho ou com a família. Amei!”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DepoimentsCard
                  user="Plinio Lopes"
                  customerMessage="“Sorveteria versátil com opções quentes e um cantinho nostálgico. Parabéns!”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DepoimentsCard
                  user="Cauã Henrique"
                  customerMessage="“Boa sorveteria com sorvetes de massa e soft deliciosos. Ambiente agradável e bom atendimento!”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DepoimentsCard
                  user="Fernando Rocha"
                  customerMessage="“Ótima sorveteria com sorvetes deliciosos, ambiente agradável e ótimo atendimento.”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <DepoimentsCard
                  user="Gustavo Joel"
                  customerMessage="“Sorveteria excelente, com qualidade e ótimo atendimento. Faço questão de ir lá.”"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Depoiments>
    </>
  );
};

export default Home;
