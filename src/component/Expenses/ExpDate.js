import React from "react";
import "./ExpDate.css";

const ExpDate=(props) =>{
  const days = props.date.toLocaleString("en-US", { day: "2-digit" });
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const years = props.date.getFullYear();

  return (
    <div className="date">
      <div>{days},{months}</div>
      <div>{years}</div>
    </div>
  );
}

export default ExpDate;
