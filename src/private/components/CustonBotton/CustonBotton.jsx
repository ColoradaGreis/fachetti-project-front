import { useTranslation } from 'react-i18next'

export default function CustonBotton ({ disabled }) {
  const { t } = useTranslation('private')
  return (
    <button
      className='button'
      type='submit'
      disabled={disabled}
    >{!disabled ? t('utils.save') : t('utils.saving')}
    </button>
  )
}
