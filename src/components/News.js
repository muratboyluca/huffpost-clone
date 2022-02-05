import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const News = () => {
  const { entries } = useContext(DataContext);
  return (
    <main className="News">
      <Feed entries={entries} />
    </main>
  );
};

export default News;
