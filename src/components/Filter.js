const Filter = () => {
  return (
    <>
      <label className="formfilter__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input className="formfilter__input" type="text" name="name" id="name" />
    </>
  );
};

export default Filter;
