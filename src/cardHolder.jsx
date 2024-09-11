export default function CardHolder({ data }) {
  return (
    <div>
      {data.map((cardData) => (
        <Card key={cardData.id} img={cardData.img} text={cardData.name} />
      ))}
    </div>
  );
}

function Card({ img, text }) {
  return (
    <div>
      <img src={img} />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
