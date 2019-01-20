import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const HeaderWrapper = styled.header`
  background: rgba(255, 255, 255, 0.9);
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #fff;
  width: 100%;
`;

const HeaderInner = styled.div`
  max-width: 1260px;
  padding: 0 30px;
  margin: 0 auto;
  overflow: auto;
`;

const HeaderMenu = styled.ul`
  list-style: none;
  text-align: center;

  li {
    display: inline-block;
    padding: 23px 0 0;

    a {
      user-select: none;
      display: inline-block;
      margin: 0 15px;
      padding-bottom: 5px;
      border-bottom: 2px solid rgba(255, 255, 255, 0);

      &.active {
        border-color: rgba(99, 220, 210, 1.0);
      }
    }
  }

  @media screen and (min-width: 35em) {
    text-align: right;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showBorder: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      showBorder: document.documentElement.scrollTop > 150,
    })
  }

  render() {
    const headerClass = this.state.showBorder ? 'with-border' : '';
    return (
      <HeaderWrapper className={headerClass}>
        <HeaderInner>
          <HeaderMenu>
            <li>
              <Link activeClassName="active" to="/">About</Link>
              <Link activeClassName="active" to="/contact">Contact</Link>
            </li>
          </HeaderMenu>
        </HeaderInner>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
