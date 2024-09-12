export default function CardHolder({ data, handleCardClick }) {
  return (
    <div className="cardHolder">
      {data.map((cardData) => (
        <Card
          handleClick={() => handleCardClick(cardData)}
          key={cardData.id}
          img={cardData.img}
          text={cardData.name}
        />
      ))}
    </div>
  );
}

function Card({ img, text, handleClick }) {
  return (
    <div onClick={handleClick} className="card">
      <img src={img} />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
