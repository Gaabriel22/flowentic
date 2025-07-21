import { Navbar, Nav, Container } from "react-bootstrap"
import { useState } from "react"
import styles from "./styles.module.scss"
import logo from "@/assets/flowentic.png"
import ThemeToggleButton from "../ThemeToggleButton"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const handleNavClick = () => {
    setExpanded(false)
  }

  return (
    <header className={styles.header}>
      <Navbar
        expand="lg"
        className={styles.navbar}
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#home" className={styles.brand}>
            <img src={logo} alt="Logo Flowentic" className={styles.logo} />
            <span className={styles.text}>Flowentic</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="main-navbar"
            className={styles.toggle}
            onClick={() => setExpanded(!expanded)}
          >
            <FaBars className={styles.icon} />
          </Navbar.Toggle>
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={styles.link}
                onClick={handleNavClick}
              >
                Início
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={styles.link}
                onClick={handleNavClick}
              >
                Sobre
              </Nav.Link>
              <Nav.Link
                href="#services"
                className={styles.link}
                onClick={handleNavClick}
              >
                Serviços
              </Nav.Link>
              <Nav.Link
                href="#problems"
                className={styles.link}
                onClick={handleNavClick}
              >
                Problemas
              </Nav.Link>
              <Nav.Link
                href="#process"
                className={styles.link}
                onClick={handleNavClick}
              >
                Processo
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={styles.link}
                onClick={handleNavClick}
              >
                Contato
              </Nav.Link>

              <div className={styles.themeToggle}>
                <ThemeToggleButton />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
