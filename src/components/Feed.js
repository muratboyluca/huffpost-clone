import AdvertisementRight from "../Ad/AdvertisementRight";
import Card from "./Card";
// import { useContext } from "react";
// import DataContext from "../context/DataContext";

const Feed = ({ entries }) => {
  // const { entries } = useContext(DataContext);
  return (
    <div className="Feed">
      {entries.map((entry) => (
        <Card key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default Feed;
