import styled, { css } from 'styled-components';

export const Container = styled.article` 
    padding: 2rem 4rem;
    border-top: 2px solid var(--purple-50);
    border-bottom: 2px solid var(--purple-50);
    margin-bottom: 6rem;

    position: relative;
`;

export const BodyText = styled.p`
    font-size: 1.2rem;
`;

export const Title = styled.h2`   
`;

const mixinTop = css`
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
`

const mixinBottom = css`
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
`
type OverLineProps = {
    position: String;
}
export const OverLine = styled.span<OverLineProps>`   
    position: absolute;
    display: block;
    width: 10rem;
    text-align: center;
    line-height: 1rem;

    background-color: var(--purple-50);
    color: var(--white);

    padding: .7rem 2rem;
    ${props => (props.position === "top" ? mixinTop : mixinBottom)}

    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-around;

        margin: 0;
        padding: 0;

        li{
            cursor: pointer;
            margin: 0 .2rem;
            line-height: 1rem;
        }
    }
`;

