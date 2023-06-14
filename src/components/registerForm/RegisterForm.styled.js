import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`

export const StyledLabel = styled.label`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const StyledInput = styled.input`
    width: 250px;
    padding: 5px 8px;
    font-size: 16px;
`

export const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 10px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #C2C4FF;
    }
`