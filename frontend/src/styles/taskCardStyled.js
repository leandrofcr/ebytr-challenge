import styled from 'styled-components';

const CardTaskStyled = styled.section`
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  width: 300px;
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

  section {
    position: absolute;
    top: 5px;
    right: 5px;

    button {
      background-color: whitesmoke;
      border: none;
      color: #676cdb;

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
