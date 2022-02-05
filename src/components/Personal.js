import Feed from "./Feed";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const Personal = () => {
  const { entries } = useContext(DataContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const filteredPersonal = entries.filter(
      (entry) => entry.label === "HuffpostPersonal"
      // console.log(filteredPolitics);
    );
    setNews(filteredPersonal);
  }, []);

  return (
    <main className="News">
      <Feed entries={news} />
    </main>
  );
};

export default Personal;
