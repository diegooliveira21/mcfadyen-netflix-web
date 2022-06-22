import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  box-sizing: border-box;

  border: ${(props) => {
    const { theme: { layout, palette } } = props;

    return css`${layout.border.small} solid ${palette.border.default}`;
  }};
  
  border-radius: ${(props) => props.theme.layout.border.medium};
`;
