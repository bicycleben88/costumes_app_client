import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";
import Costume from "../components/Costume";
import Arrow from "../components/Arrow";

const Dashboard = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url, token } = globalState;

  const [userCostumes, setUserCostumes] = React.useState(null);

  const [costumeIndex, setCostumeIndex] = React.useState(null);

  React.useEffect(() => {
    getCostumes();
  }, []);

  //Get Costumes
  const getCostumes = async () => {
    const response = await fetch(`${url}/costumes`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    const data = await response.json();
    setCostumeIndex(data.length - 1);
    setUserCostumes(data);
  };

  //Delete Costume
  const deleteCostume = (costume) => {
    fetch(`${url}/costumes/${costume._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(() => {
      getCostumes();
    });
  };

  //Carousel functions
  const previousSlide = () => {
    const lastIndex = userCostumes.length - 1;
    const shouldResetIndex = costumeIndex === 0;
    const index = shouldResetIndex ? lastIndex : costumeIndex - 1;
    setCostumeIndex(index);
  };
  const nextSlide = () => {
    const lastIndex = userCostumes.length - 1;
    const shouldResetIndex = costumeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : costumeIndex + 1;
    setCostumeIndex(index);
  };

  const loaded = () => {
    return (
      <section className="dashboard">
        <Link to="/new">
          <h2 className="dashboard-h2">Make a new Costume</h2>
        </Link>
        <article className="carousel">
          <Arrow
            direction="left"
            clickFunction={previousSlide}
            image="/lnr-arrow-left.svg"
          />
          <Costume costume={userCostumes[costumeIndex]} />
          <Arrow
            direction="right"
            clickFunction={nextSlide}
            image="/lnr-arrow-right.svg"
          />
        </article>
      </section>
    );
  };

  return userCostumes ? loaded() : <h4>...Getting Your Costumes</h4>;
};

export default Dashboard;
