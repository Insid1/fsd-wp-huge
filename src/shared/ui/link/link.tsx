import {FC} from "react";
import {classNames} from "shared/lib";
import {Link as DefaultLink, LinkProps} from "react-router-dom";
import cls from './link.module.scss'
import {ERoutes} from "shared/config/route-config";
import {ColorType} from "shared/config";

interface ILinkProps extends LinkProps {
  to: ERoutes;
  color?: ColorType
}

const Link: FC<ILinkProps> = (
  {
    color = 'primary',
    ...rest
  }) => {

  return (
    <DefaultLink
      className={classNames(
        cls.appLink,
        {},
        [cls[color]],
      )}
      {...rest}
    />
  );
};

export default Link;
