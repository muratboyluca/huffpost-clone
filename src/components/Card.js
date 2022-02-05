import { Link } from "react-router-dom";

const Card = ({ entry }) => {
  return (
    <div className="card">
      <Link className="card-image-link" to={`/entry/${entry.id}`}>
        <div className="card-image">
          <img src={entry.image}></img>
        </div>
      </Link>
      <div className="card-text">
        <div className="card-label">{entry.label}</div>
        <div className="card-category">{entry.category}</div>

        <div>
          <Link to={`/entry/${entry.id}`}>
            <h3 className="card-text-headlines">{entry.headline}</h3>
          </Link>
        </div>
        <div className="card-description">{entry.description}</div>
        <div className="card-byline">{`By ${entry.by}`}</div>
      </div>
    </div>
  );
};

export default Card;
