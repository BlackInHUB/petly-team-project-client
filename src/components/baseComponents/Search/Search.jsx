import { SearchInput, SearchForm, SearchButton, IconX, IconS } from "./Search.styled"

export const Search = ({handleChange, handleClick, value, onSubmit, disabled}) => {
    return (
        <>
        {onSubmit ? 
        (<SearchForm onSubmit={onSubmit}>
            <SearchInput 
                type="text" value={value} placeholder="Search" disabled={disabled} onChange={handleChange}/>
            <SearchButton type="submit">
                <IconS />
            </SearchButton>
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
