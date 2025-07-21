import { useTheme } from "../../hooks/useTheme"
import { Button } from "react-bootstrap"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="outline-primary" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
    </Button>
  )
}

export default ThemeToggleButton
