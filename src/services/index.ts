import api from './api';

export const getUsers = async (data: any) => {
  const config = {
    method: 'POST',
    url: 'search/available-slots',
    data
  };
  return api(config);
};
