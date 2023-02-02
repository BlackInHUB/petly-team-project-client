import {Form, Input, Button} from "./Search.styled";
import searchPic from "../../../images/icons/search.png";
import xCirlce from "../../../images/icons/x-circle.png";

export default function Search({onChange, value}) {
    const refreshPage = () => {
        window.location.reload(false);
    } 

    return (
        <Form>
                <Input
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Search"
                />
                
                {value === "" ? (
                    <Button type="submit">
                        <img src={searchPic} alt="search"/>   
                    </Button>
                ) : (
                    <Button type="submit" onClick={refreshPage}>
                        <img src={xCirlce} alt="search"/>   
                    </Button>
                )
                }
        </Form>
    )
}