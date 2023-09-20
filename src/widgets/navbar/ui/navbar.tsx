import { type FC, type HTMLAttributes } from 'react'
import { classNames } from 'shared/lib'
import { ERoutes } from 'shared/config/route-config'
import { Link } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from 'widgets/theme-switcher'
import cls from './navbar.module.scss'

interface INavbarProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {}

const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <nav className={classNames(cls.navbar, {}, [className as string])}>
      <div className={cls.links}>
        <Link to={ERoutes.MAIN}>{t('Main')}</Link>
        <Link to={ERoutes.ABOUT}>{t('About')}</Link>
      </div>

      <div className={cls.navbar__right}>
        <ThemeSwitcher/>
      </div>
    </nav>

  )
}

export default Navbar
