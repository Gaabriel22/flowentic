import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap"
import styles from "./styles.module.scss"

const SERVICE_ID = "seu_service_id"
const TEMPLATE_ID = "seu_template_id"
const PUBLIC_KEY = "sua_public_key"

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setSent(true)
        setError(false)
        form.current?.reset()
      },
      () => {
        setSent(false)
        setError(true)
      }
    )
  }

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-form-title"
    >
      <Container>
        <h2 id="contact-form-title" className={styles.title}>
          Entre em Contato
        </h2>
        <p className={styles.subtitle}>
          Solicite uma proposta personalizada para sua empresa.
        </p>

        <Form ref={form} onSubmit={sendEmail} className={styles.form}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="user_name">
                <Form.Label>Nome*</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  required
                  aria-required="true"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="user_email">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  required
                  aria-required="true"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Empresa</Form.Label>
            <Form.Control type="text" name="company" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="service_type">
            <Form.Label>Tipo de serviço</Form.Label>
            <Form.Select name="service_type">
              <option>Selecione...</option>
              <option>Automação de atendimento</option>
              <option>Relatórios automáticos</option>
              <option>Integrações entre sistemas</option>
              <option>Automação interna (planilhas, Notion, etc.)</option>
              <option>Outro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Mensagem*</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              required
              aria-required="true"
            />
          </Form.Group>

          <Button type="submit" variant="primary" aria-label="Enviar Mensagem">
            Enviar Mensagem
          </Button>

          {sent && (
            <Alert variant="success" className="mt-3">
              Mensagem enviada com sucesso!
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="mt-3">
              Erro ao enviar. Tente novamente.
            </Alert>
          )}
        </Form>
      </Container>
    </section>
  )
}

export default ContactForm
