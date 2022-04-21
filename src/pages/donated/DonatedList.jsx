import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';
import { getAvailableItems, getItemsByFilter } from './donatedSlice';

function DonatedList({ searchParams, handleRespone }) {
  const { status, items, error } = useSelector((state) => state.donated);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchParams);
    if (searchParams === null || searchParams === 'All')
      dispatch(getAvailableItems());
    else dispatch(getItemsByFilter(searchParams));
  }, [searchParams, dispatch]);

  if (status === 'loading')
    return <h1 className="text-2xl text-white">Loading...</h1>;
  if (status === 'failed')
    return <h1 className="text-2xl font-bold my-8">{error}</h1>;

  console.log(items);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 justify-items-center w-5/6 mx-auto lg:grid-cols-3 md:grid-cols-2">
      {items.map((item) => {
        return (
          <ItemCard key={item._id} data={item} onRespone={handleRespone} />
        );
      })}
    </div>
  );
}

DonatedList.propTypes = {
  searchParams: PropTypes.string.isRequired,
  handleRespone: PropTypes.func.isRequired,
};

export default DonatedList;
