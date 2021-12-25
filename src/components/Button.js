import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1rem;
background:transparent;  
color: var(--mainBlue);
border-radius: 4px;
&:hover {
    background: var(--mainBlue);
    color: var(--mainWhite);
}
`;

