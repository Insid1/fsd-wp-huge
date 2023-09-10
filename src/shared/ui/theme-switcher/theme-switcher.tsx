import {FC, HTMLAttributes, SVGProps} from "react";
import {classNames} from "shared/lib";
import cls from './theme-switcher.module.scss'
import {useTheme} from "shared/config";
import {ThemeDarkIcon, ThemeLightIcon} from "shared/assets";
import Button from "shared/ui/button/button";

interface IThemeSwitcherProps extends Pick<HTMLAttributes<HTMLButtonElement>, 'className'> {
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({className}) => {
  const {toggleTheme, theme} = useTheme()

  const svgProps: SVGProps<SVGSVGElement> = {
    width: 30,
    height: 30
  }

  return (
    <Button
      themeType="clear"
      className={classNames(
        cls.themeSwitcher,
        {},
        [className])
      }
      onClick={toggleTheme}
    >
      {theme === 'light'
        ? <ThemeLightIcon {...svgProps} />
        : <ThemeDarkIcon  {...svgProps} />
      }
    </Button>
  );
};

export default ThemeSwitcher;
