import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Icon } from 'semantic-ui-react'

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
`

// const Label = styled.div`
//   margin: 16px 0;
//   height: 0;
//   border-top: 1px solid rgba(255,255,255,.1);
//   color: rgba(255,255,255,.5);
//   padding: 24px;

//   @media screen and (max-width: 900px) {
//     text-align: center;
//   }
// `

const MenuItem = styled.div`
  margin: 8px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 56px;
  text-align: left;
  cursor: pointer;
  background-color: ${props => (props.active ? '#192558' : 'transparent')};
  border: 0;
  padding: 0 0 0 24px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  font-size: 16px;
  line-height: 1;

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    /* background-color: #192558; */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`

const Text = styled.span`
  padding-left: 8px;
  line-height: 1;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};
  font-size: 1.68rem;

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
  }
`

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <Hero>
      //   <h1>Hi.</h1>
      //   <p>
      //     I&apos;m John Doe, a Senior UX Developer with five years of industry experience, specializing in developing
      //     React apps with the best UX users can get.
      //   </p>
      //   <Link to="/contact">
      //     <Button big>
      //       <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
      //         <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
      //       </svg>
      //       Contact
      //     </Button>
      //   </Link>
      // </Hero>
      <Wrap>
        <Link to="/">
          <MenuItem className="active" active={this.props.selected === 'courses'}>
            <Icon name="leaf" />
            <Text>All Articles</Text>
          </MenuItem>
        </Link>
        <Link to="/categories">
          <MenuItem active={this.props.selected === 'playground'}>
            <Icon name="lab" />
            <Text>Categories</Text>
          </MenuItem>
        </Link>
        {/* <Label>Admin</Label>
        <Link to="/dashboard/admin/course">
          <MenuItem active={this.props.selected === 'admin/course'}>
            <Icon name="angle right" />
            <Text>Course</Text>
          </MenuItem>
        </Link>
        <Link to="/dashboard/admin/section">
          <MenuItem active={this.props.selected === 'admin/section'}>
            <Icon name="angle right" />
            <Text>Section</Text>
          </MenuItem>
        </Link> */}
      </Wrap>
    )
  }
}

export default Menu
