import Card from "../Card";

const WhatsHappening = ({ entries }) => {
  return (
    <div className="card-content">
      {entries.map((entry) => (
        <Card key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default WhatsHappening;
