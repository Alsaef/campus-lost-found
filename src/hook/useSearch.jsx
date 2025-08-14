import { useState } from 'react';

const useSearch = (initialValue = '') => {
  const [search, setSearch] = useState(initialValue);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return {
    search,
    setSearch,
    handleSearchChange
  };
};

export default useSearch;
