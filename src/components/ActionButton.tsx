import React from "react";
import type { ButtonClickHandler } from "../App";

const ActionButton: React.FC<{
  text: string;
  changeText?: string;
  onClick: ButtonClickHandler;
  activeDuration: number;
}> = ({ text, changeText, onClick, activeDuration }) => {
  const clickHandler: ButtonClickHandler = (event) => {
    const target = event.target as HTMLButtonElement;
    target.disabled = true;
    onClick(event);
    buttonActive(target);
    target.disabled = false;
  };

  const setStyles = function (element: HTMLElement, styles: Object) {
    Object.assign(element.style, styles);
  };

  const buttonActive = function (element: HTMLButtonElement) {
    const {
      innerText,
      style: { color, backgroundColor },
    } = element;

    setTimeout(() => {
      setStyles(element, {
        color: color,
        backgroundColor: backgroundColor,
      });
      element.innerText = innerText;
    }, activeDuration);

    setStyles(element, {
      color: "#282c34",
      backgroundColor: "white",
    });
    if (changeText) {
      element.innerText = changeText;
    }
  };

  return <button onClick={clickHandler}>{text}</button>;
};

export default ActionButton;
