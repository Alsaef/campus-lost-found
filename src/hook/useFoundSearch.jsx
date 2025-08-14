
import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';


const useFoundSearch = ( search) => {
  const {
    data: items = [],
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['items-found', { search }],
    queryFn: async () => {
 

      const res = await axiosInstance.get(`/lost-found?search=${search}`);
      return res.data;
    },
  });


  return { items, isLoading, isError, refetch };
};

export default useFoundSearch;
