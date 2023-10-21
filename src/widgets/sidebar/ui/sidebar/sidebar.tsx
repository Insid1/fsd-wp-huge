import { type FC, type PropsWithChildren, useState } from 'react'
import { classNames } from 'shared/lib'
import cls from './sidebar.module.scss'
import { Button } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
import { LanguageSwitcher } from 'widgets/language-switcher'

const Sidebar: FC<PropsWithChildren> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleToggleCollapse = (): void => {
    setIsCollapsed((prevState) => !prevState)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.sidebar,
        {
          [cls.collapsed]: isCollapsed,
        },
      )}>
      <Button
        className={cls.closeBtn}
        data-testid="sidebar-toggle-button"
        themeType="clear"
        onClick={handleToggleCollapse}
      >
        <CrossIcon width={20} height={20}/>
      </Button>
      <LanguageSwitcher className={cls.languageSwitcher} />
    </div>
  )
}

export default Sidebar
