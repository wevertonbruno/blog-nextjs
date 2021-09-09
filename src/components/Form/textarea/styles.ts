import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    >label{
        color: var(--purple-80);
        font-weight: bold;
        small{
            color: var(--red-50);
        }
    }
    >textarea{
        width: 100%;
        padding: 1rem 2rem;
        border-radius: .5rem;
        color: var(--purple-50);
        border: 1px solid var(--purple-50);
        outline-color: var(--purple-50);
        
    }
`;
