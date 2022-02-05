import Feed from "./Feed";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const Politics = () => {
  const { entries } = useContext(DataContext);
  const [politics, setPolitics] = useState([]);

  useEffect(() => {
    const filteredPolitics = entries.filter(
      (entry) => entry.label === "Politics"
      // console.log(filteredPolitics);
    );
    setPolitics(filteredPolitics);
  }, []);

  return (
    <main className="News">
      <Feed entries={politics} />
    </main>
  );
};

export default Politics;
