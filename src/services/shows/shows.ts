import axiosInstance from 'modules/axios/axios';
import { Props } from 'services/shows/shows.type';

const showsService = ({ token }: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getList = () => axiosInstance.get('/shows', config);

  const getMyList = () => axiosInstance.get('/list', config);

  return {
    getList,
    getMyList,
  };
};

export default showsService;
