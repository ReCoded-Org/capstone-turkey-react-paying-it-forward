import { useTranslation } from 'react-i18next';

import { ABOUT_US, QA, ITEMS, DONATORS, PRICING } from '../../routes';

function FooterHomeLinks() {
  const { t } = useTranslation(['common']);
  return (
    <div className=" lg:text-[15px] lg:text-[#FFFFFF] lg:mr-[50px] sm:invisible md:invisible lg:visible">
      <h5 className="lg:font-bold mb-1">{t('home')}</h5>
      <ul className="list-none mb-0">
        <li>
          <a href={ITEMS}>{t('items')}</a>
        </li>
        <li>
          <a href={DONATORS}>{t('donators')}</a>
        </li>
        <li>
          <a href={PRICING}>{t('pricing')}</a>
        </li>
        <li>
          <a href={ABOUT_US}> {t('aboutUs')} </a>
        </li>
        <li>
          <a href={QA}>{t('QA')}</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterHomeLinks;
