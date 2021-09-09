import styled from "styled-components";

export const DropDownContainer = styled.div`
    font-size: 1.4rem;
    padding: 0;
    margin: 0;

    .dropdownHeader{
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .list-items{
        display: none;
        background-color: var(--white);

        z-index: 5;
        position: absolute;
        right: 0;
        top: 3rem;
        
        min-width: 10rem;
        max-width: 15rem;

        border: 1px solid var(--purple-50-transparent);
        border-radius: .5rem;

        list-style-type: none;

        padding: 0;
        margin: 0;


        >li{
            padding: .5rem 2rem;
            transition: all .2s;

            &:hover{
                background-color: var(--purple-50-transparent);
            }

        }
    }

    .list-items.active{
        display: block;
    }

`;
