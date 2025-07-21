import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.scss"
import logo from "@/assets/flowentic.png"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <div className={styles.brand}>
              <img src={logo} alt="Flowentic Logo" className={styles.logo} />
              <span>Flowentic</span>
            </div>
          </Col>

          <Col md={4} className={styles.navSection}>
            <a href="#home">Início</a>
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#problems">Problemas</a>
            <a href="#process">Processo</a>
            <a href="#contact">Contato</a>
          </Col>

          <Col md={4}>
            <div className={styles.social}>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className={styles.email}>contato@flowentic.com</p>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <p className={styles.copy}>
              © {currentYear} Flowentic. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
