import {FC, HTMLAttributes} from "react";
import {classNames} from "shared/lib";
import cls from './navbar.module.scss'
import {ERoutes} from "shared/config/route-config";
import {Link, ThemeSwitcher} from "shared/ui";

interface INavbarProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
}

const Navbar: FC<INavbarProps> = ({className}) => {

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Link to={ERoutes.MAIN}>to main</Link>
        <Link to={ERoutes.ABOUT}>to about</Link>
      </div>

      <div className={cls.navbar__right}>
        <ThemeSwitcher/>
      </div>
    </nav>

  );
};

export default Navbar;
