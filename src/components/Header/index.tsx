import Link from 'next/link';
import { ReactElement, useEffect, useRef, useState } from "react";
import { useScroll } from '../../hooks/useScroll';
import { DropDown } from '../DropDown';
import {
    Author,
    Container,
    Logo,
    Menu,
    HeaderWrapper,
    MenuWrapper,
    Navbar,
    SearchBar,
    SearchBarWrapper,
    SearchIcon,
    NavLogo
} from './styles';

export const Header = (): ReactElement => {
    
    const { ref, top } = useScroll();

    const fixed = top <= 0;
    
    return (
        <Container>
            <HeaderWrapper>
                <Logo>
                    <img src="/logo.png" alt="Blog Direito Reinventado" />
                    <span>BLOG ACADÊMICO</span>
                </Logo>
                <Author>
                    <span>por</span>
                    <strong>Valéria Damasceno</strong>
                </Author>
            </HeaderWrapper>
            <MenuWrapper ref={ref}>
                <Menu 
                    fixed={fixed}
                >
                    <NavLogo visible={fixed}>
                        <img src="/logo.png" alt="Blog Direito Reinventado" />
                    </NavLogo>
                    <Navbar>
                        <li><Link href="/"><a>home</a></Link></li>
                        <li><Link href="/"><a>sobre</a></Link></li>
                        <li>
                            <DropDown title="conteúdos" items={[
                                { label: 'organização', url: '/organizacao' },
                                { label: 'estudos', url: '/estudos' }
                            ]}/>
                        </li>
                        <li><Link href="/"><a>contato</a></Link></li>
                    </Navbar>
                    <SearchBarWrapper>
                        <SearchBar placeholder="buscar..." />
                        <SearchIcon />
                    </SearchBarWrapper>
                </Menu>
            </MenuWrapper>
        </Container>
    );
}