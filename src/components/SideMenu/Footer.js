import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #0DB7ED;
`

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #0DB7ED;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
`

const Text = styled.span`
  padding-left: 8px;
  font-weight: 700;
`

export default class SideFooter extends Component {
  render() {
    return (
      <Wrap>
        <Link href = '/'>
          <LogoWrap>
            <img width='16px' src={'/static/logo.png'} />
            <Text>BounceCode</Text>
          </LogoWrap>
        </Link>
      </Wrap>
    )
  }
}
