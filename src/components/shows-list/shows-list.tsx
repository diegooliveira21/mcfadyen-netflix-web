import React from 'react';
import { useSelector } from 'react-redux';
import { dataSelector } from 'store/shows/shows.selector';
import Slider from 'react-slick';
import Item from 'components/shows-list/components/item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/shows-list/components/arrow/arrow';
import { Title } from 'components/shows-list/components/title/title.styled';
import { Box } from '@mui/material';

export default function ShowsList() {
  const data = useSelector(dataSelector);
  const movies = data.MOVIE;
  const tvShows = data.TV_SHOWS;

  return (
    <>
      <Box margin="82px 0">
        <Title>Filmes</Title>
        <Slider
          slidesToShow={5}
          centerMode
          nextArrow={<Arrow />}
          prevArrow={<Arrow />}
        >
          {movies?.map(({ cover, id }) => (
            <Item
              id={id}
              key={id}
              cover={cover}
            />
          ))}
        </Slider>
      </Box>

      <Box margin="82px 0">
        <Title>Séries</Title>
        <Slider
          slidesToShow={5}
          centerMode
          nextArrow={<Arrow />}
          prevArrow={<Arrow />}
        >
          {tvShows?.map(({ cover, id }) => (
            <Item
              id={id}
              key={id}
              cover={cover}
            />
          ))}
        </Slider>
      </Box>
    </>
  );
}
