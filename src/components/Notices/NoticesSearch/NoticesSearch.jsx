import { Search } from "components/baseComponents/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "redux/filter/filter";
import { noticesOperations } from "redux/notices";

export const NoticesSearch = ({category}) => {
    const {filter} = useSelector(state => state.filter);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
      dispatch(setFilter(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams({filter});

    dispatch(noticesOperations.getAll({category, filter}));
  }
  
    const handleSearhcEscClick = () => {
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