import styled from 'styled-components'

export default styled.form`
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  max-width: 520px;

  button {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.8);
    color: rgba(0, 0, 0, 0.8);
    opacity: 0.3;
    outline: none;
    padding: 8px 40px;
    border-radius: 5px;
    cursor: not-allowed;
    transition: opacity 0.3s ease, color 0.3s ease, border-color: 0.3s ease;

    &.valid {
      opacity: 1;
      color: rgba(99, 220, 210, 1);
      border-color: rgba(99, 220, 210, 1);
      cursor: pointer;
    }
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    outline: none;
    text-indent: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 1.3rem;
  }

  textarea {
    height: 220px;
    resize: none;
  }
`;
