import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
        NavItem, NavLink, NavBtnLink, NavBtn } from './NavbarElements'
import { FaBars } from 'react-icons/fa' 
import Sidebar from '../Sidebar'

const Navbar = ({ toggle }) => {
    
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='discover'>Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services'>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='sign-up'>Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
            <Sidebar />
        </Nav>
    </>
  )
}

export default Navbar;