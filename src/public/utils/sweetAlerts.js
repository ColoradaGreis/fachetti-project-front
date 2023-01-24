import Swal from 'sweetalert2'

export const swallError = (message, ok) => {
  if (ok) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }
  if (!ok) {
    Swal.fire({
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000
    })
  }
}
