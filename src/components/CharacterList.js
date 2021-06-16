import "../stylesheets/cardList.scss";
import CharacterCard from "./CharacterCard";
const CharacterList = () => {
  return (
    <section>
      <ul className="list">
        <CharacterCard />
      </ul>
    </section>
  );
};
export default CharacterList;
