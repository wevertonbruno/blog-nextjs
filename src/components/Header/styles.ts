import { MutableRefObject } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled, { css } from 'styled-components';

export const Container = styled.header`
    position: relative;
    font-size: 1.5rem;

    color: var(--purple-50);
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem 0;
`

export const Logo = styled.div`
    position: relative;
    display: flex;
    img{
        width: 10rem;
        height: 10rem;
    }

    span {
        position: absolute;
        display: none;
    }
    
`
type NavLogoProps = {
    visible?: Boolean;
}

export const NavLogo = styled.div<NavLogoProps>`
    position: relative;
    display: ${props => props.visible ? "flex" : "none"};
    align-items: center;
    margin-left: 4rem;
    img{
        width: 2rem;
        height: 2rem;
    }
    
`

export const Author = styled.div`
    margin-left: 1rem;
    span{
        margin-right: .2rem;
    }
`

type MenuProps = {
    fixed?: Boolean;
}

const fixed = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
`

export const Menu = styled.nav<MenuProps>`
    width: 100%;

    border-top: 3px solid var(--purple-50-transparent);
    border-bottom: 3px solid var(--purple-50-transparent);
    background-color: var(--white);

    display: flex;
    align-items: center;

    ${props => props.fixed ? fixed : ""}
`

export const Navbar = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    flex-grow: 1;

    >li{  
        padding: .7rem;
        cursor: pointer;
        position: relative;
        >a{
            text-decoration: none;
            color: inherit;
        }

        &+li{
            margin-left: 3rem;
        }

        &:hover{
            background-color: var(--purple-50-transparent);
            
        }

        transition: background .2s;
    }
`

export const SearchBarWrapper = styled.div`
    position: relative;
    margin: 0 1rem;
`

export const SearchBar = styled.input`
    height: 2rem;
    border: 1px solid var(--purple-50-transparent);
    outline: none;

    border-radius: 2rem;
    width: 20rem;
    padding: .7rem 2rem;

    color: var(--purple-50);    
`

export const SearchIcon = styled(FaSearch)`
    cursor: pointer;
    position: absolute;
    right: .5rem;
    color: var(--purple-50);
    top: 50%;
    transform: translateY(-50%);
    height: 1.4rem;
    width: 1.4rem;;
`

export const MenuWrapper = styled.div<any>`
    min-height: 3.5rem;
`
