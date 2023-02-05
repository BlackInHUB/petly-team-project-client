import {Form, Input} from "./Search.styled";
// import searchPic from "../../../images/icons/searchSVG.svg";
// import xCirlce from "../../../images/icons/x-circle.png";

export default function Search({onChange, value}) {
    // const refreshPage = (e) => {
    //     e.stopPropagation()
    //     e.preventDefault();
    //     e.currentTarget.value = "";
    // } 

    return (
        <Form>
                <Input
                    type="search"
                    onChange={onChange}
                    value={value}
                    placeholder="Search"
                />
{/*             
                {value !== "" && (
                    <Button type="submit" onClick={() => emptyInput}>
                         <img src={xCirlce} alt="search"/>   
                    </Button>
                )
                } */}
        </Form>
    )
}