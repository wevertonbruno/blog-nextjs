import { ReactElement } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { ButtonPrimary } from '../Form/ButtonPrimary';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/textarea';
import { Container } from './styles';


export const Contato = (): ReactElement => {
    return (
        <Container id="contato">
            <h3>Entre em contato</h3>
            <Form>
                <Row>
                    <Col md={6}>
                        <Input label="Nome" type="text"/>
                    </Col>
                    <Col md={6}>
                        <Input label="E-mail" type="email" required/>
                    </Col>
                    <Col md={12}>
                        <TextArea label="Mensagem" rows={5} required/>
                    </Col>
                    <Col className="mt-2">
                        <ButtonPrimary label="Enviar" />
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}