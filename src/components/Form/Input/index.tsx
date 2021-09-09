import { InputHTMLAttributes, ReactElement } from "react";
import { Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: String;
    required?: Boolean;
}

export const Input = ({label, type, name, required }: InputProps): ReactElement => {
    return (
        <Container>
            <label htmlFor={name}>{label}{ required && (<small>*</small>)}:</label>
            <input id={name} name={name} type={type} />
        </Container>
    );
}