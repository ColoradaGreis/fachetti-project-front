
export const getValidationError = (errorCode) => {
  const codeMatcher = {
    ERR_EMPTY: 'No hay datos',
    ERR_NOT_FOUND: 'No se encontró el recurso',
    ERR_NOT_ALLOWED: 'No se permite el recurso',
    ERR_NOT_ACCEPTABLE: 'No se acepta el recurso',
    ERR_CONFLICT: 'Conflicto',
    ERR_BAD_REQUEST: 'Petición incorrecta',
    ERR_NETWORK: 'Se rompió la red',
    ERR_TIMEOUT: 'Se acabó el tiempo',
    ERR_CANCEL: 'Se canceló la petición',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
    ERR_404: 'Error 404',
    ERR_405: 'Error 405'

  }

  return codeMatcher[errorCode]
}
