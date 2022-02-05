import Feed from "./Feed";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const Entertainment = () => {
  const { entries } = useContext(DataContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const filteredEntertainment = entries.filter(
      (entry) => entry.label === "Entertainment"
      // console.log(filteredPolitics);
    );
    setNews(filteredEntertainment);
  }, []);

  return (
    <main className="News">
      <Feed entries={news} />
    </main>
  );
};

export default Entertainment;
