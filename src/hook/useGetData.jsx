
import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';


const useGetData = ( search, type ) => {
  const {
    data: items = [],
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['items', { search, type }],
    queryFn: async () => {
 

      const res = await axiosInstance.get(`/items?search=${search}&type=${type}`);
      return res.data;
    },
  });


  return { items, isLoading, isError, refetch };
};

export default useGetData;
