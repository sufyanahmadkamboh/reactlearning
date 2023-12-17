
import React from "react";
import  ReactDOM  from "react-dom/client";


const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"},
[React.createElement("h1", {}, "this is h1 heading inside clild"),
React.createElement("h2", {}, "this is h2 heading inside clild")]));


const heading = React.createElement("h1", {id: "heading"}, "heading from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);