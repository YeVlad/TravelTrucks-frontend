import { Formik, Form, Field } from "formik";

import css from "./FiltersForm.module.css";

const FiltersForm = () => {
  return (
    <div className={css.form_container}>
      <Formik>
        <Form className={css.filters_form}>
          <label htmlFor="location" className={css.location_label}>
            Location
          </label>
          <Field className={css.location_field} name="location"></Field>
          <p className={css.word_filters}>Filters</p>
          <p className={css.word_equipment}>Vehicle equipment</p>
          <fieldset className={css.checkbox_group}>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input type="checkbox" className={css.checkbox_input} />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input type="checkbox" className={css.checkbox_input} />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input type="checkbox" className={css.checkbox_input} />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input type="checkbox" className={css.checkbox_input} />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input type="checkbox" className={css.checkbox_input} />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
          </fieldset>
          <p className={css.word_equipment}>Vehicle type</p>
          <fieldset className={css.checkbox_group}>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input
                  type="checkbox"
                  className={css.checkbox_input}
                  name="type"
                />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input
                  type="checkbox"
                  className={css.checkbox_input}
                  name="type"
                />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
            <div className={css.checkbox}>
              <label className={css.checkbox_wrapper}>
                <input
                  type="checkbox"
                  className={css.checkbox_input}
                  name="type"
                />
                <span className={css.checkbox_tile}>
                  <span className={css.checkbox_icon}>
                    <svg></svg>
                  </span>
                  <span className={css.checkbox_label}>AC</span>
                </span>
              </label>
            </div>
          </fieldset>
          <button className={css.search_button}>Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FiltersForm;
