import React from 'react'
import axios from 'axios'

import { verifyEmail } from '../../utils/verify'
import Form from '../form/form'
import Error from '../form/error';
import Success from './success'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: '',
      validEmail: false,
      validMessage: false,
      submitted: false,
      emailError: null,
      messageError: null,
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      validEmail: verifyEmail(e.target.value),
      emailError: null,
    })
  }

  handleMessageChange = (e) => {
    const message = e.target.value

    this.setState({
      message: e.target.value,
      validMessage: message.length >= 10 && message.length < 500,
      messageError: null,
    })
  }

  showSuccess = () => {
    this.setState({
      submitted: true,
    })
  }

  showError = (err) => {
    console.log(err);
    this.setState({
      emailError: 'It Looks like something went wrong. Please try again in a few minutes.'
    })
  }

  sendMessage = () => {
    const { email, message } = this.state;
    const requestConfig = {
      method: 'post',
      url: 'https://us-central1-joshburginio.cloudfunctions.net/joshburginio-contact',
      data: {
        email,
        message,
      },
    };

    axios(requestConfig)
      .then(() => { this.showSuccess() })
      .catch((err) => this.showError(err));
  }

  onSubmit = (e) => {
    e.preventDefault()
    let valid = true
    let { emailError, messageError } = this.state

    if (!this.state.validEmail) {
      valid = false
      emailError = 'Invalid email address:';
    }

    if (!this.state.validMessage) {
      valid = false
      messageError = this.state.message.length < 10 ?
        'Message must be at least 10 characters:' :
        'Message must be no more than 500 characters:'
    }

    if (valid) return this.sendMessage()

    this.setState({
      emailError,
      messageError,
    })
  }

  render() {
    const { emailError, messageError } = this.state;
    const valid = this.state.validEmail && this.state.validMessage;

    if (this.state.submitted) {
      return (<Success />)
    }

    return (
      <Form style={{ marginTop: '1.3rem' }}>
        {}
        {emailError && <Error>{emailError}</Error>}
        <input
          name="email"
          onChange={this.handleEmailChange}
          type="email"
          placeholder="Your Email"
        />
        {messageError && <Error>{messageError}</Error>}
        <textarea
          name="message"
          onChange={this.handleMessageChange}
          placeholder="What's on your mind?"
        />
        <button
          onClick={this.onSubmit}
          type="submit"
          className={valid ? 'valid' : ''}
        >
          Send Message
        </button>
      </Form>
    )
  }
}

export default ContactForm
