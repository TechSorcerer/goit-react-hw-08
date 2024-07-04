import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters /filtersSlice";
import { selectNameFilter } from "../../redux/filters /filtersSel";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;
