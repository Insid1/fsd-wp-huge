import {Dispatch, SetStateAction} from "react";

export type ThemeType = "light" | "dark";

export interface IThemeContext {
  theme?: ThemeType;
  setTheme?: Dispatch<SetStateAction<ThemeType>>;
}
