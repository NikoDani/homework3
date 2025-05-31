import Card from './card.jsx';

function PlayerList({ players }) {
  return (
    <>
      {players.map((player, index) => (
        <Card
          key={index}
          title={player.name}
          content={player.price}
          img={player.img}
          bgColor={player.bgColor}
        />
      ))}
    </>
  );
}

export default PlayerList;
