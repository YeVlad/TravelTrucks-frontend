import { useSelector } from "react-redux";
import FiltersForm from "../../components/FiltersForm/FiltersForm";
import FoundItems from "../../components/FoundItems/FoundItems";
import css from "./CatalogPage.module.css";

import { selectTracks } from "../../redux/tracks/selectors";

const CatalogPage = () => {
  const fetchedTracks = useSelector(selectTracks);

  return (
    <section className={css.catalog}>
      <FiltersForm />
      {fetchedTracks.length > 0 ? (
        <FoundItems fetchedTracks={fetchedTracks} />
      ) : (
        <div className={css.empty_space}></div>
      )}
    </section>
  );
};

export default CatalogPage;
