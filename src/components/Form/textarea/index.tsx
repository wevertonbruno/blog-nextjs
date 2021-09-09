import { TextareaHTMLAttributes } from "react";
import { ReactElement } from "react";
import { Container } from "./styles";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: String;
    required?: Boolean;
}

export const TextArea = ({label, name, required, rows }: TextareaProps): ReactElement => {
    return (
        <Container>
            <label htmlFor={name}>{label}{ required && (<small>*</small>)}:</label>
            <textarea id={name} name={name} rows={rows}></textarea>
        </Container>
    );
}