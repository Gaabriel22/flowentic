import { Container, Row, Col, Button } from "react-bootstrap"
import {
  FaSyncAlt,
  FaExclamationTriangle,
  FaLink,
  FaChartLine,
} from "react-icons/fa"
import styles from "./styles.module.scss"
import AnimatedSection from "@/components/AnimatedSection"
import { Suspense } from "react"

const painPoints = [
  {
    icon: <FaSyncAlt />,
    text: "Tarefas repetitivas que tomam tempo da equipe",
  },
  {
    icon: <FaExclamationTriangle />,
    text: "Erro humano em planilhas e cadastros",
  },
  {
    icon: <FaLink />,
    text: "Sistemas que não se integram",
  },
  {
    icon: <FaChartLine />,
    text: "Falta de relatórios atualizados",
  },
]

const PainPoints = () => {
  return (
    <section className={styles.painPoints} id="problems">
      <Container>
        <AnimatedSection delay={0}>
          <h2 className={styles.title} aria-label="Você está enfrentando isso?">
            Você está enfrentando isso?
          </h2>
        </AnimatedSection>
        <Row>
          {painPoints.map((item, index) => (
            <Col key={item.text} md={6} className="mb-4">
              <Suspense fallback={<div>Loading...</div>}>
                <AnimatedSection delay={0.1 * (index + 1)}>
                  <div className={styles.card}>
                    <span
                      className={styles.icon}
                      aria-label={`Ícone representando ${item.text}`}
                    >
                      {item.icon}
                    </span>
                    <p>{item.text}</p>
                  </div>
                </AnimatedSection>
              </Suspense>
            </Col>
          ))}
        </Row>
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-4">
            <Button
              variant="warning"
              className={styles.cta}
              aria-label="Chamada para ação para automatizar"
            >
              Vamos automatizar isso para você.
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}

export default PainPoints
