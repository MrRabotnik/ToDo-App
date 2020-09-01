import React from 'react';


function Button() {
    let content = "Sign Me Up";
    return (
        <button>{content}</button>
    );
}

function Body () {
    return (
        <div id="info" className="info-container">
            <h3>BACK TO NATURE</h3>
            <h1 id="heading">LET'S GO CAMPING</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150</p>
            <Button value = "Sign Me Up"/>
        </div>
    );
}

export default Body;

function lightning() {
    document.getElementById("heading").style.color = "#e9cb43";
    setTimeout(() => {
        document.getElementById("heading").style.color = "white";
    }, 500);
}

setInterval(lightning, 1000);