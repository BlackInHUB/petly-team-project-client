import { SearchInput, SearchForm, SearchButton, Icon } from "./Search.styled"
import searchPic from "../../../images/icons/search.svg";
import xCirlce from "../../../images/icons/x-circle.svg";

export const Search = ({onChange, handleClick, value, onSubmit, submit}) => {
    return (
        <>
        {onSubmit ? 
        (<SearchForm onSubmit={onSubmit}>
            <SearchInput 
                type="text" value={value} placeholder="Search" onChange={onChange}/>
            {!submit ?
            (<SearchButton type="submit">
                <Icon src={searchPic} alt='' />
            </SearchButton>) :
            (<SearchButton type="button" onClick={handleClick}>
                <Icon src={xCirlce} alt='' />
            </SearchButton>)            
        }
        </SearchForm>) :
        (<SearchForm>
            <SearchInput type="search" value={value} placeholder="Search" onChange={onChange}/>
            <SearchButton type="button" onClick={handleClick}>{value === '' ? 
            (<Icon src={searchPic} alt='' />) : 
            (<Icon src={xCirlce} alt='' />)}</SearchButton>
        </SearchForm>)
        }
        </>
    )
};