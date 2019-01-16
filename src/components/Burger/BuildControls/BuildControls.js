import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];

const BuildControls = props => (
  <div className="BuildControls">
    <p>total price: <strong>{props.price.toFixed(2)}</strong> $</p>
    {
    controls.map(ctrl => <BuildControl key = {ctrl.label}
     label = {ctrl.label}
     added={()=> props.ingredientAdded(ctrl.type)}
     removed={()=>props.ingredientRemoved(ctrl.type)}
     disabled = {props.disabeld[ctrl.type]} 
    />)}
    <button className="OrderButton"
    disabled={!props.purchaseable}
    onClick={props.ordered}
    >Order Now</button>
  </div>
)
export default BuildControls;
