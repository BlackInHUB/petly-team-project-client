import { Time, TimeList } from "./TimeContainerStyled";

const date = new Date();

const week = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

export const TimeContainer = ({ work }) => {       
    return (
        <ul>
            <TimeList>
                <Time>Time:</Time>
                {work ? work.map(({ isOpen, from, to }, index) => index === date.getDay() && <p key={index}>{from} - {to}</p>) : <p>{"Closed"}</p>}

                <ul>
                     {work && work.map(({ isOpen, from, to }, index) => isOpen ? <li key={index}>{week[index]} {from} - {to}</li> : <li key={index}>{week[index]} - {"Closed"}</li>)}
                </ul>

            </TimeList>
        </ul>
    )
}  