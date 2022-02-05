// import { Link } from "react-router-dom";
import Card from "../Card";

const TopStories = ({ entries }) => {
  return (
    <div className="card-content">
      {entries.map((entry) => (
        <Card key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default TopStories;
