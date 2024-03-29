import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames(
    "day-list__item",
    { "day-list__item--selected": props.selected },
    { "day-list__item--full": props.spots === 0 }
  );
  return (
    <li
      data-testid="day" // Add this line to include the data-testid attribute
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      {!props.spots && <h3 className="text--light">no spots remaining</h3>}
      {props.spots === 1 && (
        <h3 className="text--light">{props.spots} spot remaining</h3>
      )}
      {props.spots > 1 && (
        <h3 className="text--light">{props.spots} spots remaining</h3>
      )}
    </li>
  );
}
