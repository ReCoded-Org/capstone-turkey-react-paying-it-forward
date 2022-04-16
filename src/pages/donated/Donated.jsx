import { useSearchParams } from 'react-router-dom';

import DonatedList from './DonatedList';
import Filter from './Filter';
import donateImg from '../../assets/donation.svg';

function Donated() {
  const [searchParams, setSearchParams] = useSearchParams({ filter: 'All' });

  const filterBy = (p) => {
    setSearchParams({ filter: p });
  };

  return (
    <>
      <img src={donateImg} alt="Donate Logo" className="mx-auto mt-8" />
      <h1 className="text-[#212121] font-bold text-4xl my-2">
        Available Items
      </h1>
      <Filter filterBy={filterBy} searchParams={searchParams} />
      <DonatedList searchParams={searchParams.get('filter')} />
    </>
  );
}

export default Donated;
