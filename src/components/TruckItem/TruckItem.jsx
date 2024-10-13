import css from "./TruckItem.module.css";

const TruckItem = ({ car }) => {
  const mainPhoto = car.gallery[0].original;
  const isAC = car.AC;
  const isAutomatic = car.transmission;
  const isKitchen = car.kitchen;
  const isTV = car.TV;
  const isBathroom = car.bathroom;
  const isRadio = car.radio;
  const isPetrol = car.engine;

  return (
    <li className={css.car_card}>
      <img src={mainPhoto} alt="Track photo" className={css.car_photo} />
      <div className={css.main_info}>
        <div className={css.name_price_and_like}>
          <h2 className={css.car_name}>{car.name}</h2>
          <div className={css.heart_and_price}>
            <h2 className={css.car_price}>€{car.price}.00</h2>
            <button className={css.button_like}>
              <svg className={css.icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-Property-1Default"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.reviews_and_location}>
          <svg className={css.star_icon}>
            <use xlinkHref="/src/assets/sprite.svg#icon-star"></use>
          </svg>
          <p className={css.info}>
            {car.rating}({car.reviews.length} Reviews)
          </p>
          <svg className={css.map_icon}>
            <use xlinkHref="/src/assets/sprite.svg#icon-map"></use>
          </svg>
          <p className={css.info}>{car.location}</p>
        </div>
        <p className={css.car_description}>{car.description}</p>
        <ul className={css.features}>
          {isAutomatic == "automatic" && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-diagram"></use>
              </svg>
              <p className={css.feature_name}>Automatic</p>
            </li>
          )}
          {isPetrol == "petrol" && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-fuel-pump"></use>
              </svg>
              <p className={css.feature_name}>Petrol</p>
            </li>
          )}
          {isKitchen && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-cup-hot"></use>
              </svg>
              <p className={css.feature_name}>Kitchen</p>
            </li>
          )}
          {isAC && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-wind"></use>
              </svg>
              <p className={css.feature_name}>AC</p>
            </li>
          )}
          {isRadio && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-ui-radios"></use>
              </svg>
              <p className={css.feature_name}>Radio</p>
            </li>
          )}
          {isTV && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-tv"></use>
              </svg>
              <p className={css.feature_name}>TV</p>
            </li>
          )}
          {isBathroom && (
            <li className={css.feature}>
              <svg className={css.feature_icon}>
                <use xlinkHref="/src/assets/sprite.svg#icon-bi_droplet"></use>
              </svg>
              <p className={css.feature_name}>Bathroom</p>
            </li>
          )}
        </ul>
        <button className={css.show_more_button}>Show more</button>
      </div>
    </li>
  );
};
export default TruckItem;
