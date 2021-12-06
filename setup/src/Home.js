import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext); if no custom hook way

  // const data = useGlobalContext(); second and best way to call for data from useContext

  const { openSidebar, openModal } = useGlobalContext(); //what should be done

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
