import { Search } from "components/baseComponents/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/filter";

export const NoticesSearch = () => {
    const {filter} = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
      dispatch(setFilter(e.target.value))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(noticesOperations.)
  }
  
    const handleSearhcEscClick = () => {
    //   setFilter('')
    };

    return (
        <Search 
            handleChange={handleFilterChange}
            handleClick={handleSearhcEscClick}
            value={filter}
            onSubmit={handleSubmit}
        />
    )
};