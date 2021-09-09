import { ReactNode } from "react";
import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { Aside } from "../Aside";
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
                    </section>
                    <Aside />
                </Body>
            </Main>
        </Container>
    );
}