import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: ${(props) => props.theme.palette.typography.primary};
  width: 100%;
  padding: 9px;
  margin: 0 0 22px;
  border-radius: ${(props) => props.theme.layout.border.medium};
  background-color: ${(props) => props.theme.palette.core.primary};
  border: 0;
`;
