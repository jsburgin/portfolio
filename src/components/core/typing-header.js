import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TypingWrapper = styled.div`
  display: inline-block;
  min-height: 51px;
`;

const HeaderText = styled.h1`
  display: block;
  float: left;
  margin-bottom: 1rem;
`;

const Cursor = styled.div`
  float: left;
  height: 30px;
  width: 3px;
  margin-left: 4px;
  background: #fff;

  &.show {
    background: rgba(99,220,210,1.0);
  }
`;

class TypingHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCursor: true,
      blinkInterval: 400,
      length: props.skipTyping ? this.props.title.length : 0,
      intervals: [80, 90, 85, 110],
    }
  }

  getRandomInterval() {
    return this.state.intervals[
      Math.floor(Math.random() * this.state.intervals.length)
    ]
  }

  toggleCursor = () => {
    this.setState({
      showCursor: !this.state.showCursor,
    })
  }

  startCursorBlink = () => {
    setInterval(() => { this.toggleCursor() }, this.state.blinkInterval)
  }

  type = () => {
    const length = this.state.length + 1
    this.setState({ length })

    if (length !== this.props.title.length) {
      setTimeout(() => { this.type() }, this.getRandomInterval())
    } else {
      this.startCursorBlink();
    }
  }

  componentDidMount() {
    this.props.skipTyping ? this.startCursorBlink() : this.type();
  }

  render() {
    const title = this.props.title.substring(0, this.state.length)

    return (
      <TypingWrapper>
        <HeaderText>{title}</HeaderText>
        <Cursor className={this.state.showCursor ? 'show' : ''} />
      </TypingWrapper>
    )
  }
}

TypingHeader.propTypes = {
  title: PropTypes.string.isRequired,
  skipTyping: PropTypes.bool,
}

export default TypingHeader
