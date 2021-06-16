import React, { useEffect, useState } from "react";
import "../stylesheets/filter.scss";

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
