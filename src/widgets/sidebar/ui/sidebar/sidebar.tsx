import {FC, useState} from "react";
import {classNames} from "shared/lib";
import cls from './sidebar.module.scss'
import {Button, LanguageSwitcher} from "shared/ui";
import {CrossIcon} from "shared/assets";

interface ISidebarProps {
}

const Sidebar: FC<ISidebarProps> = ({children}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState)
  }

  return (
    <div className={classNames(
      cls.sidebar,
      {
        [cls.collapsed]: isCollapsed,
      }
    )}>
      <Button
        className={cls.closeBtn}
        themeType="clear"
        onClick={handleToggleCollapse}
      >
        <CrossIcon width={20} height={20}/>
      </Button>
      <LanguageSwitcher/>
    </div>
  );
};

export default Sidebar;
