import { Container, Row, Col } from "react-bootstrap"
import {
  FaSearch,
  FaFileAlt,
  FaCogs,
  FaCheckCircle,
  FaHandsHelping,
} from "react-icons/fa"
import styles from "./styles.module.scss"
import AnimatedSection from "@/components/AnimatedSection"
import { Suspense } from "react"

const steps = [
  {
    icon: <FaSearch />,
    title: "Diagnóstico gratuito",
    description:
      "Entendemos seus desafios e identificamos oportunidades de automação.",
  },
  {
    icon: <FaFileAlt />,
    title: "Proposta sob medida",
    description: "Criamos uma solução personalizada, adaptada ao seu negócio.",
  },
  {
    icon: <FaCogs />,
    title: "Desenvolvimento",
    description:
      "Construção da automação com tecnologias eficientes e seguras.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Entrega e testes",
    description: "Validação completa com você antes de liberar a automação.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Suporte contínuo",
    description: "Estamos sempre disponíveis para ajustes e novas ideias.",
  },
]

const Process = () => {
  return (
    <section className={styles.process} id="process">
      <Container>
        <AnimatedSection delay={0}>
          <h2
            className={styles.title}
            aria-label="Como Funciona Nosso Processo"
          >
            Como Funciona Nosso Processo
          </h2>
        </AnimatedSection>
        <Row className={styles.stepContainer}>
          {steps.map((step, index) => (
            <Col key={step.title} md={2} sm={12} className={styles.step}>
              <Suspense fallback={<div>Loading...</div>}>
                <AnimatedSection delay={0.1 * (index + 1)}>
                  <div
                    className={styles.iconWrapper}
                    aria-label={`Ícone de ${step.title}`}
                  >
                    {step.icon}
                  </div>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </AnimatedSection>
              </Suspense>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Process
