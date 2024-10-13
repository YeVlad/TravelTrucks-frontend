import TruckItem from "../TruckItem/TruckItem";

import css from "./FoundItems.module.css";

const FoundItems = ({ fetchedTracks }) => {
  return (
    <div className={css.list_container}>
      <ul className={css.list_of_cars}>
        {fetchedTracks.map((item) => {
          return <TruckItem key={item.id} car={item} />;
        })}
      </ul>
    </div>
  );
};
export default FoundItems;
