import React from "react";
import "./SingleCard.css";

type Card = {
  src: string;
  id: number;
  matched: boolean;
};

interface SingleCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard: React.FC<SingleCardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  //   const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  //     const target = e.target as HTMLImageElement;
  //     target.classList.toggle("flipped");
  //     handleChoice(card);

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          src="/img/cover.png"
          className="back"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
