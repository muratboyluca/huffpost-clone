import { useContext } from "react";
import AdvertisementRight from "../Ad/AdvertisementRight";
import DataContext from "../context/DataContext";
import Life from "./Utils/Life";

import FrontPageTop from "./Utils/FrontPageTop";
import TopStories from "./Utils/TopStories";
import WhatsHappening from "./Utils/WhatsHappening";
import Shopping from "../components/Utils/Shopping";

const Home = () => {
  const { entries } = useContext(DataContext);
  const filteredFrontPage = entries.slice(0, 1);
  const filteredTopStories = entries.slice(1, 9);
  const filteredWhatsHappening = entries.slice(9, 17);
  const filteredLife = entries.slice(17, 21);
  const filteredShopping = entries.slice(22, 27);

  return (
    <main className="Home">
      <div className="front-page-top">
        <div className="row row-1">
          <FrontPageTop entries={filteredFrontPage} />
        </div>
      </div>
      <div className="front-page-content">
        <div className="row row-2">
          <div className="inner-group">
            <div>
              <h2 className="zone-title-text">TOP STORIES</h2>
            </div>
            <TopStories entries={filteredTopStories} />
          </div>
          <AdvertisementRight />
        </div>

        <div className="row row-3">
          <div className="inner-group">
            <div>
              <h2 className="zone-title-text">👇 WHAT'S HAPPENING 👇</h2>
            </div>
            <WhatsHappening entries={filteredWhatsHappening} />

            <Life entries={filteredLife} />
          </div>
          <div>
            <h2 className="zone-title-text">SHOPPING</h2>
            <Shopping entries={filteredShopping} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
