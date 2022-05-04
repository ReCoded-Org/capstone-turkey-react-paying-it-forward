import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ItemCard from './ItemCard';
import { getAvailableItems, getItemsByFilter } from './donatedSlice';

function DonatedList({ searchParams, handleResponse }) {
  const { status, items, error } = useSelector((state) => state.donated);
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);

  useEffect(() => {
    if (searchParams === null || searchParams === 'All')
      dispatch(getAvailableItems());
    else dispatch(getItemsByFilter(searchParams));
  }, [searchParams, dispatch]);

  if (status === 'loading')
    return <h1 className="text-2xl text-white">{t('loading')}</h1>;
  if (status === 'failed')
    return <h1 className="text-2xl font-bold my-8">{error}</h1>;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 justify-items-center w-5/6 mx-auto lg:grid-cols-3 md:grid-cols-2">
      {items.map((item) => {
        return (
          <ItemCard key={item._id} data={item} onResponse={handleResponse} />
        );
      })}
    </div>
  );
}

DonatedList.propTypes = {
  searchParams: PropTypes.string.isRequired,
  handleResponse: PropTypes.func.isRequired,
};

export default DonatedList;
