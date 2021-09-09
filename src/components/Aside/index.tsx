import { ReactElement } from "react";
import { useScroll } from '../../hooks/useScroll';

import { Container, Flower, Wrapper } from './styles';


export const Aside = (): ReactElement => {
    const { ref, top } = useScroll();

    const fixed = top <= 20;

    return (
        <Container ref={ref}>
            <Wrapper fixed={fixed}>
            <Flower src="/flor.png" />
                <figure>
                    <img src="/me.png" alt="Valéria Damasceno Foto" />
                    <figcaption>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos odio corrupti quod inventore atque delectus nostrum eaque ex tenetur impedit?
                    </figcaption>
                </figure>
            </Wrapper>
        </Container>
    );
}