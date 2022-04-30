import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { sortByDate } from './requestSlice';

function Filter({ filterBy, searchParams }) {
  const { type, sortOrder } = useSelector((state) => state.requestedItems);
  const dispatch = useDispatch();

  const handleFilter = (filterTerm) => {
    filterBy(filterTerm);
  };

  const typeList = type.map((itemType) => {
    return (
      <li key={itemType}>
        <button
          type="button"
          className={`${
            itemType === searchParams
              ? 'bg-[#F05A28]'
              : 'bg-[#90B176] cursor-pointer'
          } px-5 py-1 rounded-full my-2`}
          onClick={() => handleFilter(itemType)}
          onKeyDown={() => handleFilter(itemType)}
        >
          {itemType}
        </button>
      </li>
    );
  });

  return (
    <ul className="bg-[#F8F9FA] xl:w-4/6 w-5/6 mx-auto px-3 py-1 rounded lg:rounded-full text-white flex flex-wrap items-center justify-around lg:justify-between mb-8">
      {typeList}

      <li>
        <button
          className="bg-[#545851] px-5 py-1 rounded-full inline-flex items-center my-2"
          onClick={() => {
            dispatch(sortByDate(sortOrder === 'ASC' ? 'DESC' : 'ASC'));
          }}
          type="button"
        >
          Date
          <svg
            className={`fill-current h-4 w-4 ${
              sortOrder === 'ASC' ? '' : 'rotate-180'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
          </svg>
        </button>
      </li>
    </ul>
  );
}

Filter.propTypes = {
  filterBy: PropTypes.func.isRequired,
  searchParams: PropTypes.string.isRequired,
};

export default Filter;
