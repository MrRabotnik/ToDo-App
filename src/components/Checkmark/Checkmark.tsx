import React from "react";
import "./Checkmark.scss";
import checkmark from "../../assets/checkmark.png";

type CheckmarkProps = {
    click: any;
    checked: boolean;
};

const Checkmark = ({ click, checked }: CheckmarkProps) => {
    return (
        <div
            className="checkmark"
            onClick={click}
        >
            {checked && (
                <img
                    src={checkmark}
                    alt="checkmark"
                />
            )}
        </div>
    );
};

export default Checkmark;
