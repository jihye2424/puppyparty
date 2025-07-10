import { BiParty } from "react-icons/bi";
import { BsCake } from "react-icons/bs";
import { TbDogBowl } from "react-icons/tb";
import { GiSleevelessJacket } from "react-icons/gi";

const CardSection = ({title,des,btn,setIdx}) => {
  return (
    <div id="cardsection">
      <div className="section-one">
        <p className="card-btn">{btn}</p>
        <p className="card-title">{title}</p>
        <p className="card-des">{des}</p>
      </div>
      <div className="card-icon">
        {setIdx=== 0 ? <BiParty /> :
          setIdx=== 1 ? <BsCake /> : 
            setIdx=== 2 ? <TbDogBowl /> : <GiSleevelessJacket /> }
      </div>
    </div>
  );
};

export default CardSection;