import {Dispatch, SetStateAction} from "react";

export type ThemeType = "light" | "dark";

export type ColorType = "primary" | "secondary";

export type UIElementType = "primary" | "secondary";

export interface IThemeContext {
  theme?: ThemeType;
  setTheme?: Dispatch<SetStateAction<ThemeType>>;
}
