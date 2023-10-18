import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { Link as DefaultLink, type LinkProps } from 'react-router-dom'
import cls from './link.module.scss'
import { type ERoutes, RoutePathMap } from 'shared/config/route-config'
import { type ColorType } from 'shared/config'

interface ILinkProps extends LinkProps {
  to: ERoutes
  color?: ColorType
}

const Link: FC<ILinkProps> = (
  {
    color = 'primary',
    to,
    ...rest
  }) => {
  return (
    <DefaultLink
      to={RoutePathMap[to]}
      className={classNames(
        cls.appLink,
        {},
        [cls[color]],
      )}
      {...rest}
    />
  )
}

export default Link
