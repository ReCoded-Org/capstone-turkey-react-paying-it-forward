import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ItemCard from './ItemCard';
import { getRequestedItems } from './requestSlice';

function RequestList({ searchParams, handleResponse }) {
  const { status, items, error } = useSelector((state) => state.requestedItems);
  const dispatch = useDispatch();

  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    dispatch(getRequestedItems());
  }, [dispatch]);

  const itemList = items.filter((e) => {
    if (searchParams === 'All') return true;
    return e.type === searchParams;
  });

  if (status === 'loading')
    return <h1 className="text-2xl text-white">{t("loading")} </h1>;
  if (status === 'failed')
    return <h1 className="text-2xl font-bold my-8">{error}</h1>;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 justify-items-center w-5/6 mx-auto lg:grid-cols-3 md:grid-cols-2">
      {itemList.length === 0 ? (
        <h1 className="text-2xl font-bold my-8 col-span-3">
        {t("noRequest")}
        </h1>
      ) : (
        itemList.map((item) => {
          return (
            <ItemCard key={item._id} data={item} onResponse={handleResponse} />
          );
        })
      )}
    </div>
  );
}

RequestList.propTypes = {
  searchParams: PropTypes.string.isRequired,
  handleResponse: PropTypes.func.isRequired,
};

export default RequestList;
