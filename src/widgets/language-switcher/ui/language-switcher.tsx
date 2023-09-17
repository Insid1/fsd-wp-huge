import { type FC, type HTMLAttributes } from 'react'
import { RoundFlagRussiaIcon, RoundFlagUKIcon } from 'shared/assets'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface ILanguageSwitcherProps extends Pick<HTMLAttributes<HTMLButtonElement>, 'className'> {
}

const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation()

  const isRussianLng = i18n.language === 'ru'
  const handleToggleLanguage = (): void => {
    void i18n.changeLanguage(isRussianLng ? 'en' : 'ru')
  }

  return (
    <Button className={className} themeType="clear" onClick={handleToggleLanguage}>
      {isRussianLng
        ? <RoundFlagUKIcon width={20} height={20} />
        : <RoundFlagRussiaIcon width={20} height={20} />
      }
    </Button>
  )
}

export default LanguageSwitcher
