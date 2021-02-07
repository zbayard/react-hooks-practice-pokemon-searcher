import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({key, id, name, hp, sprites}) {

  const [isFlipped, setIsFlipped] = useState(true)

  function handleFlip(){
    console.log("hello")
    setIsFlipped(!isFlipped)
  }

  return (
    <Card>
      <div className={key} onClick={handleFlip}>
        <div className="image">
          {isFlipped ? <img src={sprites.front} alt="oh no!" /> : <img src={sprites.back} alt="hey"/>}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div> 
      </div>
    </Card>
  );
}

export default PokemonCard;
