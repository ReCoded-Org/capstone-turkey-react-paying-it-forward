import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function FooterResourcesLinks() {
  const { i18n, t } = useTranslation(["common"]);
  return (
    <div className=" lg:lg:text-[15px] lg:text-[#FFFFFF] sm:invisible md:invisible lg:visible ">
      <h5 className="font-bold mb-1">{t("resources")}</h5>
      <ul className="list-none mb-0">
        <li>
          <a href="#!">{t("privacyPolicy")}</a>
        </li>
        <li>
          <a href="#!">{t("termsAndConditions")}</a>
        </li>
        <li>
          <a href="#!">{t("contactUs")}</a>
        </li>
      </ul>
    </div>
  );
}
