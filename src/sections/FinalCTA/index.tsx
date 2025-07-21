import { Container, Button } from "react-bootstrap"
import AnimatedSection from "@/components/AnimatedSection"
import styles from "./styles.module.scss"

const FinalCTA = () => {
  return (
    <AnimatedSection delay={0.2}>
      <section className={styles.finalCTA} aria-labelledby="final-cta-title">
        <Container className={styles.wrapper}>
          <h2 className={styles.title} id="final-cta-title">
            Pronto para automatizar seu negócio?
          </h2>
          <p className={styles.subtitle}>
            Sem mensalidade. 100% personalizado para você.
          </p>
          <Button
            size="lg"
            href="#contact"
            className={styles.ctaButton}
            aria-label="Solicitar Proposta"
          >
            Solicitar Proposta
          </Button>
        </Container>
      </section>
    </AnimatedSection>
  )
}

export default FinalCTA
