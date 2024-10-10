import React from "react";
import "./Tabs.scss";

type TabsProps = {
    setFilter: (filter: "all" | "active" | "completed") => void;
};

const Tabs: React.FC<TabsProps> = ({ setFilter }) => {
    return (
        <div className="tabs">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
    );
};

export default Tabs;
