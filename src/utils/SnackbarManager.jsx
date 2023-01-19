import { useSnackbar } from 'notistack'

let useSnackbarRef
export const SnackbarUtilitiesConfigurator = () => {
  useSnackbarRef = useSnackbar()
  return null
}

export const SnackbarUtilities = {
  toast (msg, variant = 'success' | 'error' | 'info' | 'warning') {
    useSnackbarRef.enqueueSnackbar(msg, { variant })
  },
  success (msg) {
    this.toast(msg, 'success')
  },
  error (msg) {
    this.toast(msg, 'error')
  },
  info (msg) {
    this.toast(msg, 'info')
  },
  warning (msg) {
    this.toast(msg, 'warning')
  }
}
