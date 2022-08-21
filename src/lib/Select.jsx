import { useState } from "react";
import { ReactComponent as Arrow } from "./caret-down-solid.svg";

import "./Select.css";

const Select = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleOptionClicked = (e) => {
    setSelectedItem(e.target.innerHTML);
  };

  return (
    <div className="Select">
      <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "dropdown__button" : "dropdown__button"}>
          <div className="selected-item">{selectedItem}</div>
          <span className="icon-wrapper">
            <Arrow className="arrow-icon" />
          </span>
        </div>
        <ul className={isOpen ? "dropdown__menu" : "dropdown__menu hide"}>
          {data.map((item, key = 0) => {
            key++;
            return (
              <li
                className="dropdown__menu__item"
                key={key}
                onClick={handleOptionClicked}
              >
                <p className="dropdown__menu__item__content">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
