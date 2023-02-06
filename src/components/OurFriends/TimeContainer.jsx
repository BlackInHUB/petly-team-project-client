import { Time, TimeList } from "./TimeContainerStyled";

const date = new Date();

const week = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

export const TimeContainer = ({ work }) => {       
    return (
        <ul>
            <TimeList>
                <Time>Time:</Time>
                {work ? work.map(({ isOpen, from, to }, index) => index === date.getDay() && <p key={index}>{from} - {to}</p>) : "--------------------------------------"}

                <ul>
                    {work ? work.map(({ isOpen, from, to }, index) => isOpen && <li key={index}>{week[index]} {from} - {to}</li>) : "--------------------------------------"}
                </ul>

            </TimeList>
        </ul>
    )
}  