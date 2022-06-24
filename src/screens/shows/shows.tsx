import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from 'store/shows/shows.selector';
import { showsActions } from 'store/shows/shows.slice';
import { Container } from '@mui/material';
import ShowsList from 'components/shows-list/shows-list';

export default function Shows() {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(showsActions.getList());
    },
    [],
  );

  useEffect(
    () => {
      console.log(data);
    },
    [data],
  );

  return (
    <Container>
      <ShowsList />
    </Container>
  );
}
