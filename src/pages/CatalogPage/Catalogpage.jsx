import FiltersForm from "../../components/FiltersForm/FiltersForm";
import FoundItems from "../../components/FoundItems/FoundItems";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <section className={css.catalog}>
      <FiltersForm />
      <FoundItems />
    </section>
  );
};

export default CatalogPage;
