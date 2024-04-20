import { useState } from "react";

type StateChange = () => void;

const useOpenState = (
  initialState: boolean,
): {
  isOpen: boolean;
  open: StateChange;
  close: StateChange;
  toggle: StateChange;
} => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
};

export default useOpenState;
