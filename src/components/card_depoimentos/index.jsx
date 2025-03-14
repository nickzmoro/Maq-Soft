import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { HiStar } from "react-icons/hi";
import { DepoimentCard } from "../card_depoimentos/style";

const DepoimentsCard = ({ user, customerMessage }) => {
  return (
    <DepoimentCard>
      <div>
        <div className="dp-user-image">
          <img
            src="https://lvk0y2uvlr.ufs.sh/f/loKb7FsSxkQDLBu0YSCesPVuz6kn9HYb1mxyAhlwf0NX83UR"
            alt="Usuário"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <div className="name-user">
          <p>{user}</p>
          <FcGoogle size={23} />
        </div>
        <div className="stars">
          <HiStar size={23} color="#406381" />
          <HiStar size={23} color="#406381" />
          <HiStar size={23} color="#406381" />
          <HiStar size={23} color="#406381" />
          <HiStar size={23} color="#406381" />
        </div>
      </div>
      <div className="dp-txt">
        <p>{customerMessage}</p>
      </div>
    </DepoimentCard>
  );
};

DepoimentsCard.propTypes = {
  user: PropTypes.string.isRequired,
  customerMessage: PropTypes.string.isRequired,
};

export default DepoimentsCard;
