import styles from "./spinner.module.css"

const Spinner = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className={`${styles.loader}`}></div>
    </div>
  )
}

export default Spinner
