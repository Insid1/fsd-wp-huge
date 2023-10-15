import React, { type FC } from 'react'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

const NotFoundPage: FC = () => {
  const { t } = useTranslation()
  return (
    <Button>{t('NotFound')}</Button>
  )
}

export default NotFoundPage
