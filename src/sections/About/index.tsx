import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.scss"
import { FaCogs, FaBolt, FaChartLine } from "react-icons/fa"
import AnimatedSection from "@/components/AnimatedSection"

const About = () => {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <Container>
        <AnimatedSection delay={0}>
          <h2 id="about-title" className={styles.title}>
            Quem Somos
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className={styles.description}>
            A Flowentic nasceu para transformar empresas com soluções de
            automação sob medida. Nossa missão é simplificar processos, reduzir
            desperdícios de tempo e ampliar o crescimento sustentável dos nossos
            clientes. Atuamos com foco em eficiência e personalização, sem
            amarras ou burocracia.
          </p>
        </AnimatedSection>

        <Row className={styles.highlights}>
          <Col md={4}>
            <AnimatedSection delay={0.2}>
              <div className={styles.iconBox}>
                <FaCogs />
                <h4>100% Personalizável</h4>
                <p>
                  Soluções feitas sob medida para seu negócio, sem fórmulas
                  prontas.
                </p>
              </div>
            </AnimatedSection>
          </Col>
          <Col md={4}>
            <AnimatedSection delay={0.3}>
              <div className={styles.iconBox}>
                <FaBolt />
                <h4>Sem Custos Fixos</h4>
                <p>
                  Você paga pelo que usa. Sem mensalidade ou licenças
                  obrigatórias.
                </p>
              </div>
            </AnimatedSection>
          </Col>
          <Col md={4}>
            <AnimatedSection delay={0.4}>
              <div className={styles.iconBox}>
                <FaChartLine />
                <h4>Consultoria Incluída</h4>
                <p>
                  Entregamos mais do que código: entregamos direção e
                  estratégia.
                </p>
              </div>
            </AnimatedSection>
          </Col>
        </Row>

        <AnimatedSection delay={0.5}>
          <div className={styles.timeline}>
            <h5>Marcos Importantes</h5>
            <ul>
              <li>
                <strong>2025</strong> — Fundação oficial da Flowentic e
                primeiros contratos corporativos
              </li>
              <li>
                <strong>2025</strong> — Lançamento do site institucional e
                expansão de serviços
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}

export default About
