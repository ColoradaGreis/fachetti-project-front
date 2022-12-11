import style from './style.module.css' // eslint-disable-line

export default function CustonButton ({ disabled, onClick, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='btn btn-primary w-100'
    >
      {children}
    </button>
  )
}
