import React from 'react';
import styled from 'styled-components';
import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'

const SocialLinks = styled.ul`
  display: inline-block;
  list-style: none;
  margin-top: 1rem;

  li {

    a {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
      transition: color 0.3s ease;

      img {
        width: 18px;
      }

      &:hover {
        color: rgba(99,220,210,1.0);
      }
    }

    margin: 0 6px;
  }
`;

const Social = () => (
  <SocialLinks>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshua-burgin/">
        <img src={linkedin} alt="LinkedIn" />
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/jsburgin">
        <img src={github} alt="Github" />
      </a>
    </li>
  </SocialLinks>
)

export default Social
