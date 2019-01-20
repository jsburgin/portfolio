import React from 'react'

import TypingHeader from '../components/core/typing-header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Page from '../components/core/page'
import ContactForm from '../components/contact/contact-form'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Page>
      <div className="page-content">
        <TypingHeader title="Let's get in touch." skipTyping />
        <ContactForm />
      </div>
    </Page>
  </Layout>
)

export default ContactPage
