import { Container, Row, Col, Card } from "react-bootstrap"
import styles from "./styles.module.scss"
import {
  FaRobot,
  FaChartBar,
  FaPuzzlePiece,
  FaNetworkWired,
} from "react-icons/fa"
import AnimatedSection from "@/components/AnimatedSection"
import { Suspense } from "react"

const services = [
  {
    icon: <FaRobot />,
    title: "Automação de Atendimento",
    description:
      "Chatbots, integração com WhatsApp, e-mail e outros canais para escalar o relacionamento com clientes.",
  },
  {
    icon: <FaChartBar />,
    title: "Relatórios Automáticos",
    description:
      "Dashboards e relatórios enviados por e-mail, prontos para tomada de decisão sem esforço manual.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Integração de Ferramentas",
    description:
      "Conectamos plataformas com APIs, centralizando dados e eliminando retrabalho.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Automações Internas",
    description:
      "Automatize processos em planilhas, Notion, CRMs e outros sistemas internos.",
  },
]

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <Container>
        <AnimatedSection delay={0}>
          <h2 className={styles.title} aria-label="O que Automatizamos">
            O que Automatizamos
          </h2>
        </AnimatedSection>
        <Row>
          {services.map((service, index) => (
            <Col key={service.title} md={6} lg={3} className="mb-4">
              <Suspense fallback={<div>Loading...</div>}>
                <AnimatedSection delay={0.1 * (index + 1)}>
                  <Card className={styles.card}>
                    <div
                      className={styles.icon}
                      aria-label={`Ícone de ${service.title}`}
                    >
                      {service.icon}
                    </div>
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </AnimatedSection>
              </Suspense>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services
