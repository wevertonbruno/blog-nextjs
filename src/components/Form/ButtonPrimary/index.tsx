import { ButtonHTMLAttributes, InputHTMLAttributes, ReactElement } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: String;
    required?: Boolean;
}

export const ButtonPrimary = ({ label }: ButtonProps): ReactElement => {
    return (
        <Container>
            <label>{ label }</label>
        </Container>
    );
}