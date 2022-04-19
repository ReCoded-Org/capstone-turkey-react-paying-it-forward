import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';
import { getRequestItems } from './requestSlice';

function RequestList({ searchParams, handleRespone }) {
  const { status, items, error } = useSelector((state) => state.request);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequestItems());
  }, [dispatch]);

  const itemList = items.filter((e) => {
    if (searchParams === 'All') return true;
    return e.type === searchParams;
  });

  if (status === 'loading')
    return <h1 className="text-2xl text-white">Loading...</h1>;
  if (status === 'failed')
    return <h1 className="text-2xl font-bold my-8">{error}</h1>;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 justify-items-center w-5/6 mx-auto lg:grid-cols-3 md:grid-cols-2">
      {itemList.length === 0 ? (
        <h1 className="text-2xl font-bold my-8 col-span-3">
          There is no request
        </h1>
      ) : (
        itemList.map((item) => {
          return (
            <ItemCard key={item._id} data={item} onRespone={handleRespone} />
          );
        })
      )}
    </div>
  );
}

RequestList.propTypes = {
  searchParams: PropTypes.string.isRequired,
  handleRespone: PropTypes.func.isRequired,
};

export default RequestList;
