import React from "react";
import type { ButtonClickHandler } from "../clickHandler";

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

  const buttonActive = function (element: HTMLButtonElement) {
    const { innerText } = element;

    setTimeout(() => {
      element.classList.remove("active");
      element.innerText = innerText;
    }, activeDuration);

    element.classList.add("active");
    if (changeText) {
      element.innerText = changeText;
    }
  };

  return <button onClick={clickHandler}>{text}</button>;
};

export default ActionButton;
