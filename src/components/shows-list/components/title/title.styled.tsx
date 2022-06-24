import styled from 'styled-components';
import { TextProps } from 'components/shows-list/components/title/title.type';

export const Title = styled.p<TextProps>`
  font-size: 24px;
  color: white;
  font-weight: ${(props) => props.fontWeight};
`;
