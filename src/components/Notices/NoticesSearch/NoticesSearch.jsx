import { Search } from "components/baseComponents/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/filter";
import { noticesOperations } from "redux/notices";
import { useState } from "react";

export const NoticesSearch = ({category}) => {
    const {filter} = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (filter === '') {
      return
    }
    setSubmit(!submit)
    dispatch(noticesOperations.getAll(category));
  }

  const handleEscClick = async () => {
    try {
      setSubmit(!submit)
      await dispatch(setFilter(''));
      dispatch(noticesOperations.getAll(category));
    } catch (error) {
      console.log(error)
    }
  }

    return (
        <Search 
            handleClick={handleEscClick}
            handleChange={handleFilterChange}
            value={filter}
            onSubmit={handleSubmit}
            submit={submit}
        />
    )
};