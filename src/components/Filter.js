import "../stylesheets/filter.scss";
import PropTypes from "prop-types";

const Filter = (props) => {
  const handleChange = (event) => {
    props.handleFilter({ value: event.target.value });
  };
  return (
    <>
      <form className="formfilter">
        <label className="formfilter__label" htmlFor="name">
          Filtrar por nombre:
        </label>
        <input
          className="formfilter__input"
          type="text"
          name="name"
          id="name"
          value={props.input}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Filter;
Filter.propTypes = {
  input: PropTypes.string,
};
