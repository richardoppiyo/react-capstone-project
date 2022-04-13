import { useSelector } from 'react-redux';

const handleSearch = (event) => {
  const countries = useSelector((state) => state.myred);
  const value = event.target.value.toLowerCase();
  let result = [];
  result = countries.filter((data) => data.title.search(value) !== -1);

  return result;
};

export default handleSearch;
