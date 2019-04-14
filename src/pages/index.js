import React from 'react'
import TypingHeader from '../components/core/typing-header'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Page from '../components/core/page';
import Profile from '../components/core/profile';
import Social from '../components/core/social';

const Description = styled.p`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 590px;
`

// Prevent retyping the header after switching pages
let skipTyping = false

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Page>
      <div className="page-content">
        <Profile />
        <TypingHeader
          title="Hi, I'm Josh Burgin."
          skipTyping={skipTyping}
          onComplete={() => {
            skipTyping = true
          }}
        />
        <Description>
          I'm a Software Engineer working with the Design Platform
          team <a href="https://squarespace.com">@squarespace</a> in NYC.
          I love all things web development and data visualization.<br />
          Formerly <a href="https://etsy.com">@etsy</a> and <a href="https://espn.com">@espn</a>.
        </Description>
        <Social />
      </div>
    </Page>
  </Layout>
)

export default IndexPage
