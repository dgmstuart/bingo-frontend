import type { MouseEvent } from "react";

export type ClickHandler<T> = (event: MouseEvent<T>) => void;
