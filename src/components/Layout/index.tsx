import { ReactNode } from "react";
import { ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
import { Aside } from "../Aside";
import { Contato } from "../Contato";
import { Header } from "../Header";
import { Body, Main } from "./styles";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): ReactElement => {
    return (
        <Container>
            <Main>
                <Header/>
                <Body>
                    <section>
                        {children}
                        <Row className="mt-5">
                            <Contato />
                        </Row>
                    </section>
                    <Aside />
                </Body>
            </Main>
        </Container>
    );
}