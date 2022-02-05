import Card from "../Card";
// import DataContext from "../context/DataContext";

const Life = ({ entries }) => {
  return (
    <>
      <div className="life-title-text">LIFE</div>
      <div className="card-content Life">
        {entries.map((entry) => (
          <Card key={entry.id} entry={entry} />
        ))}
      </div>
    </>
  );
};

export default Life;
