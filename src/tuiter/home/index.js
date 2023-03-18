import React from "react";
import TuitsList from "../tuits";
import "./index.css";
import WhatsHappening from "./whats-happening";
const Home = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitsList />
        </>
    );
};
export default Home;