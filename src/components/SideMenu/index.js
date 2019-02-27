import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu'
import Footer from './Footer'
// import MenuIcon from '../../MenuIcon';

const MobileMenu = styled.div`
  position: fixed;
  top: 18px;
  left: 24px;
  z-index: 210;
  line-height: 0;

  @media screen and (min-width: 900px){
    display: none;
  }
`
const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`
const MenuWrap = styled.div`
  background-position: center;
  background-size: 400% 400%;
  z-index: 100;
  width: 280px;
  height: 100vh;
  justify-content: space-between;
  display: flex;
  position: fixed;
  align-items: center;
  float: left;
  flex-direction: column;
  /* box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  background-color: #fff; */
  color: white;
  padding-left: 10%;
  padding-top: 20%;
  padding-bottom: 50px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow-y: auto;

  @media screen and (max-width: 900px) {
    transform-origin: top left;
    transform: ${props => props.open ? 'scale(1, 1)': 'scale(0, 0)'};
    opacity: ${props => props.open ? '1': '0'};
    border-radius: ${props => props.open ? '0%': '0 0 50% 0'};
    width: 100%;
  }

  @media screen and (min-width: 900px) {
    background-size: 100% 100%;
  }
`

export default class SideMenu extends Component {

  constructor(props){
    super(props);

    this.state = {
      menu_open: false
    }
  }

  toggleMenu = () => {
    this.setState({
      menu_open: ! this.state.menu_open
    })
  }

  render() {
    return (
      <div>
        <MobileMenu onClick={this.toggleMenu} >
          {/* <MenuIcon active={this.state.menu_open} /> */}
        </MobileMenu>
        <MenuWrap open={this.state.menu_open}>
          <Menu  />
          <Footer />
        </MenuWrap>
      </div>
    )
  }
}
