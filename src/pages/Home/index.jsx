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
  Location,
  WhatsApp,
  Contact,
  Footer,
} from "./style.js";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiShoppingCart,
  HiOutlineClipboardList,
  HiOutlineShoppingBag,
  HiArrowSmUp,
} from "react-icons/hi";
import { PiGoogleChromeLogo, PiHourglassBold } from "react-icons/pi";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
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
import vectorDivider from "../../assets/images/shape-divider.png";

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
      {/* BOTÃO WHATSAPP FIXO */}
      <WhatsApp>
        <p>Alguma dúvida? Entre em contato.</p>
        <a
          href="https://wa.me/5514996661883?text=Olá!+Estou+entrando+em+contato+através+do+site+da+Maq+Soft.+Como+posso+ser+atendido(a)?"
          target="_blank"
        >
          <AiOutlineWhatsApp size={40} />
        </a>
      </WhatsApp>

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
                  <NavLink href="#contato" changeColor={changeHeader}>
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

      {/* ONDE NOS ENCONTRAR? */}
      <Location id="localizacao">
        <img src={vectorDivider} alt="Vetor" className="vector-divider" />
        <div className="location-container">
          <div className="loc-info">
            <div className="loc-txt">
              <div className="loc-title">
                <h2>Onde nos encontrar?</h2>
                <div className="line-title"></div>
              </div>
              <p>
                Estamos localizados na{" "}
                <strong>
                  R. Investigador Valdemir Nunes Medeiros, 2-16, Núcleo
                  Eldorado, Bauru - SP, 17024-820
                </strong>
                . Venha nos visitar e aproveitar os melhores sorvetes da cidade!
              </p>
            </div>
            <div className="social-media">
              <p>Nos siga nas nossas redes sociais:</p>
              <div className="sc-media-icon">
                <a href="https://www.instagram.com/maq.soft/" target="_blank">
                  <AiOutlineInstagram
                    className="icon-media"
                    size={35}
                    color="#bee1ff"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063545444727"
                  target="_blank"
                >
                  <AiOutlineFacebook
                    className="icon-media"
                    size={35}
                    color="#bee1ff"
                  />
                </a>
                <a
                  href="https://wa.me/5514996661883?text=Olá!+Estou+entrando+em+contato+através+do+site+da+Maq+Soft.+Como+posso+ser+atendido(a)?"
                  target="_blank"
                >
                  <AiOutlineWhatsApp
                    className="icon-media"
                    size={35}
                    color="#bee1ff"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="loc-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.7077458926357!2d-49.05663912413176!3d-22.30358554629986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67ec04c1fa31%3A0x5c685341ca969ae9!2sR.%20Investigador%20Valdemir%20Nunes%20Medeiros%2C%20236%20-%20N%C3%BAcleo%20Eldorado%2C%20Bauru%20-%20SP%2C%2017024-820!5e0!3m2!1spt-BR!2sbr!4v1740775966497!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Location>

      {/* FORMULÁRIO DE CONTATO */}
      <Contact id="contato">
        <div className="contact-container">
          <div className="ct-title">
            <h2>Fale conosco!</h2>
            <div className="line-title"></div>
          </div>
          <div className="ct-form">
            <form>
              <div>
                <label htmlFor="nome">
                  Seu nome<span>*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite o seu nome"
                  required
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="email">
                  Seu e-mail<span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite o seu melhor e-mail"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem">
                  Mensagem<span>*</span>
                </label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  placeholder="Deixe aqui a sua mensagem"
                  required
                ></textarea>
              </div>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </Contact>

      {/* FOOTER */}
      <Footer>
        <div className="footer-container">
          <div className="footer-top">
            <div className="foot-info">
              <img src={logo} alt="logo" loading="lazy" />
              <p className="email">maqsoft@gmail.com</p>
              <p className="tel">(14) 99162-9644</p>
            </div>
            <div className="foot-navigation">
              <div>
                <p>Início</p>
                <a href="#">Voltar ao topo</a>
              </div>
              <div>
                <p>Produtos</p>
                <a href="#sabores">Ver nossos produtos</a>
              </div>
              <div>
                <p>Sobre</p>
                <a href="#sobre">Quem somos</a>
                <a href="#sobre">Princípios</a>
              </div>
              <div>
                <p>Localização</p>
                <a href="#localizacao">Endereço</a>
                <a
                  href="https://maps.app.goo.gl/CxqPzc7UZb2hb5wF7"
                  target="_blank"
                >
                  Google Maps
                </a>
              </div>
              <div>
                <p>Avaliações</p>
                <a href="#depoimentos-de-clientes">Google</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2025 | Todos os direitos reservados.</p>
            <a href="#">
              <HiArrowSmUp color="#bee1ff" size={20} />
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Home;
