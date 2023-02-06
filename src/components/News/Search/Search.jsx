import { SearchInput, SearchForm, SearchButton, Icon } from "../../../components/baseComponents/Search/Search.styled"
import searchPic from "../../../images/icons/searchSVG.svg";
import xCirlce from "../../../images/icons/x-circle.png";


export default function Search({onChange, value, handleClick}) {
    // const refreshPage = (e) => {
    //     e.stopPropagation()
    //     e.preventDefault();
    //     e.currentTarget.value = "";
    // } 

    return (
        <SearchForm>
            <SearchInput 
                type="search" 
                value={value} 
                placeholder="Search" 
                onChange={onChange}/>
            <SearchButton type="button" onClick={() => handleClick()}>{value === '' ? 
            (<Icon src={searchPic} alt='' />) : 
            (<Icon src={xCirlce} alt='' />)}</SearchButton>
        </SearchForm>)
}