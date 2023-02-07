import { SearchInput, SearchForm, SearchButton, IconX, IconS } from "./Search.styled"

export const Search = ({handleChange, handleClick, value, onSubmit, submit}) => {
    return (
        <>
        {onSubmit ? 
        (<SearchForm onSubmit={onSubmit}>
            <SearchInput 
                type="text" value={value} placeholder="Search" onChange={handleChange}/>
            <SearchButton type="submit">
                <IconS />
            </SearchButton>
            {/* {!submit ?
            (<SearchButton type="submit">
                <IconS />
            </SearchButton>) :
            (<SearchButton type="button" onClick={handleClick}>
                <IconX />
            </SearchButton>)}             */}
        </SearchForm>) :
        (<SearchForm>
            <SearchInput type="search" value={value} placeholder="Search" onChange={handleChange}/>
            <SearchButton type="button" onClick={handleClick}>{value === '' ? 
            (<IconS />) : 
            (<IconX />)}</SearchButton>
        </SearchForm>)
        }
        </>
    )
};