import styled from 'styled-components';

const CreateTaskWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: whitesmoke;
    color: black;
    padding: 20px;
    border-radius: 15px;

    textarea,
    input,
    select,
    button {
      margin: 10px 10px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
      width: 250px;
      height: 80px;
    }
  }

  button {
    border: none;
    background-color: #5ce4fc;
    padding: 7px 15px;
    border-radius: 5px;
    opacity: 0.9;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.08);
      opacity: 1;
    }
  }
`;

export default CreateTaskWrapper;
