import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import TypingHeader from '../components/core/typing-header';
import SEO from '../components/seo'

const NotFound = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound>
      <div>
        <TypingHeader title="404 Not Found..." />
        <p>Uh oh. It looks like there's not a page here.</p>
      </div>
    </NotFound>
  </Layout>
)

export default NotFoundPage
