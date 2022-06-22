import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.core.secondary}
`;
