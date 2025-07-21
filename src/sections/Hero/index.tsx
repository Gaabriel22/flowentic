import { Container, Button } from "react-bootstrap"
import styles from "./styles.module.scss"
import logoIcon from "@/assets/flowentic.png"
import { FaArrowDown } from "react-icons/fa"
import AnimatedSection from "@/components/AnimatedSection"
import { motion } from "framer-motion"
import { Suspense } from "react"

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <Container className="text-center">
        <AnimatedSection delay={0}>
          <Suspense fallback={<div>Loading...</div>}>
            <motion.img
              src={logoIcon}
              alt="Logo Flowentic"
              className={styles.logo}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              loading="lazy" // Lazy load da imagem
            />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1
            className={styles.title}
            aria-label="Automatize. Simplifique. Cresça."
          >
            Automatize. Simplifique. Cresça.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className={styles.subtitle}>
            Soluções de automação personalizadas para empresas que querem
            crescer com eficiência.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <Button
            size="lg"
            className={styles.cta}
            href="#contact"
            aria-label="Fale conosco"
          >
            Fale Conosco
          </Button>
        </AnimatedSection>

        <motion.div
          className={styles.scrollDown}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown aria-label="Desça para ver mais informações" />
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
