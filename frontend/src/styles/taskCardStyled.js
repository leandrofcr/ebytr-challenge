import styled from 'styled-components';

const CardTaskStyled = styled.section`
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  width: 330px;
  margin: 10px;
  padding: 20px;
  border-radius: 15px;
  position: relative;

  code {
    color: grey;
  }
  span {
    font-style: italic;
    position: absolute;
    left: 10px;
    top: 5px;
  }

  input {
    margin: 0 10px;
  }

  section {
    position: absolute;
    top: 5px;
    right: 5px;

    button {
      background-color: transparent;
      border: none;
      color: #676cdb;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }

      &:first-child {
        color: #f86a60;
      }

      svg {
        font-size: 20px;
      }
    }
  }
`;

export default CardTaskStyled;
