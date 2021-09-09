import styled, { css } from 'styled-components';

type WrapperProps = {
    fixed?: Boolean;
}

const fixed = css`
    position: fixed;
    top: 20px;
    z-index: 5;
`

export const Container = styled.aside<any>`
    position: relative;
    min-width: 22rem;
    flex-shrink: 0;
`;

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    width: 16rem;
    padding: 2rem 0;
    margin: 2rem;
    margin-left: 4rem;

    ${props => props.fixed ? fixed : ''}

    figure{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        img{
            width: 10rem;
            height: 10rem;
            margin-bottom: 1rem;
        }

        figcaption{
            text-align: center;
            font-size: 1.2rem;
        }
    }

`

export const Flower = styled.img`
    position: absolute;
    height: 6rem;

    left: -4rem;
    top: 8rem;

    transform-origin: center;
`
