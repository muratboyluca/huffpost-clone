import { Link } from "react-router-dom";

const FrontPageTop = ({ entries }) => {
  return (
    <div className="FrontPageTop">
      {entries.map((entry) => {
        const { id, image, headline } = entry;
        return (
          <article key={id} className="top-card">
            <div className="top-headline">
              <Link to={`/entry/${id}`}>{headline}</Link>
            </div>
            <div className="top-image">
              <Link to={`/entry/${id}`}>
                <img src={image} alt=""></img>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FrontPageTop;
