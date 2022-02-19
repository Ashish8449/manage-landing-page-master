import React from "react";

export default function List(props) {
  return (
    <ul>
        {props.item.map((ele, indx)=><li key={indx}>{ele} </li>)}
     
    </ul>
  );
}
