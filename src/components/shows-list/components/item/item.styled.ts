import styled from 'styled-components';
import { Props } from 'components/shows-list/components/item/item.type';

export const Cover = styled.div<Pick<Props, 'cover'>>`
  width: 200px;
  height: 260px;
  
  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
