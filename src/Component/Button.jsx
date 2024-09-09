import styles from './Button.module.css'
function Button({childern ,  onClick , type}) {
  return (
    <Button onClick={onClick} type={type} className={`${styles.btn} ${styles.primary}`} >{childern}</Button>
  )
}

export default Button