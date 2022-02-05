import Card from "../Card";

const Shopping = ({ entries }) => {
  return (
    <div className="card-content Shopping">
      {entries.map((entry) => (
        <Card key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default Shopping;
