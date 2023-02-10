import { Search } from "components/baseComponents/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/filter";
import { noticesOperations } from "redux/notices";

export const NoticesSearch = ({category}) => {
    const {filter} = useSelector(state => state.filter);
    const dispatch = useDispatch();

  const handleFilterChange = async (e) => {
    await dispatch(setFilter(e.target.value));
  };

  const disable = category === 'my-favorites' ? true : category === 'my-notices' ? true : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(noticesOperations.getAll(category));
  }

    return (
        <Search 
            disabled={disable}
            handleChange={handleFilterChange}
            value={filter}
            onSubmit={handleSubmit}
        />
    )
};