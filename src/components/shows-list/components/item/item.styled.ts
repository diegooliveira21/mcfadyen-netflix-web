import styled from 'styled-components';
import { CoverProps } from 'components/shows-list/components/item/item.type';

export const Cover = styled.div<CoverProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  
  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
