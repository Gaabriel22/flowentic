import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import logo from "@/assets/flowentic.png"

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  if (!loading) return null

  return (
    <div className={styles.preloader}>
      <img src={logo} alt="Flowentic Logo" className={styles.logo} />
    </div>
  )
}

export default Preloader
