
import React from "react";
import  ReactDOM  from "react-dom/client";

//react element
const heading = React.createElement("h1",{id: "heading"},"This is our first react heading");


//react element
const headingjsx = <h1 id="heading">Hello from the react component</h1>

//react functional component
const TitleComponent = () => <h1 id="title">Hello from the react title component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

//you can only render react element like this
root.render(headingjsx);

// you can also render a component inside a component

//react functional component inside a compponent
const HeadingComponent = () => (
    <div id="container">
        <TitleComponent /> 
        <h1 id="heading">Hello from the react heading component</h1>
    </div>
    );


//you can render react functional component like this
root.render(<HeadingComponent />)

