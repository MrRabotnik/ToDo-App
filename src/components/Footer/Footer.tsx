import React from "react";
import "./Footer.scss";
import Tabs from "../Tabs/Tabs";

type FooterProps = {
    activeCount: number;
    clearCompleted: () => void;
    setFilter: any;
};

const Footer: React.FC<FooterProps> = ({ activeCount, clearCompleted, setFilter }) => {
    return (
        <div className="footer">
            <div>{activeCount} items left</div>
            <Tabs setFilter={setFilter} />
            <button onClick={clearCompleted}>Clear completed</button>
        </div>
    );
};

export default Footer;
