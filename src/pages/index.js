import React from 'react'
import TypingHeader from '../components/core/typing-header'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/core/profile';
import Social from '../components/core/social';

const Hero = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .hero-content {
    width: 100%;

    a {
      color: #000;
    }
  }
`;

const Description = styled.p`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 590px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <div className="hero-content">
        <Profile />
        <TypingHeader title="Hi, I'm Josh Burgin." />
        <Description>
          I'm a Software Engineer working with the Design Platform
          team <a href="https://squarespace.com">@squarespace</a> in NYC.
          I love all things web development and data visualization.<br />
          Formerly <a href="https://etsy.com">@etsy</a> and <a href="https://espn.com">@espn</a>.
        </Description>
        <Social />
      </div>
    </Hero>
  </Layout>
)

export default IndexPage
