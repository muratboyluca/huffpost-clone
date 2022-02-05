import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import AdvertisementTop from "../Ad/AdvertisementTop";

const Entry = () => {
  const { entries } = useContext(DataContext);
  const { id } = useParams();
  const entry = entries.find((entry) => entry.id.toString() === id);
  console.log(entry);

  return (
    <main className="Entry">
      {entry && (
        <>
          {/* <AdvertisementTop /> */}
          <div className="entry-header">
            <span className="entry-label">{entry.label}</span>
            <h1 className="entry-headline">{entry.headline}</h1>
          </div>
          <div className="entry-content-list">
            <div className="entry-description">{entry.description}</div>
            <div className="entry_image">
              <img className="entry_image" src={entry.image}></img>
            </div>
            <p className="entry-entry">{entry.entry}</p>
          </div>
        </>
      )}
    </main>
  );
};

export default Entry;
