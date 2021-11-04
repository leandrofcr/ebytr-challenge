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
    right: 10px;
    top: 5px;
  }
`;

export default CardTaskStyled;
