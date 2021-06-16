const CharacterDetail = () => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <header className="modal__header">
            <h2 className="modal__title">NOMBRE</h2>
            {/* <Link to="/">
                    <span className="modal__close icon fas fa-times"></span>
                  </Link> */}
          </header>
          <section>
            <img className="card__img" src="" alt="" />
            <ul className="ml-1 mt-1">
              <li>Género:genero </li>
              <li>Email:</li>
              <li>Nick: </li>
              <li>Ciuda: </li>
              <li>País:</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
