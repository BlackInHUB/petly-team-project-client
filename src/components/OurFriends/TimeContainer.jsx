import { Time, TimeList } from "./TimeContainerStyled";

  const date = new Date();

export const TimeContainer = ({ work }) => {       
    return (
        <ul>
            <TimeList>
                <Time>Time:</Time>
                {work ? work.map(({ isOpen, from, to }, index) => index === date.getDay() && <p key={index}>{from} - {to}</p>) : "--------------------------------------"}

                <ul>
                    {work ? work.map(({ isOpen, from, to }, index) => isOpen && <li key={index}>{from} - {to}</li>) : "--------------------------------------"}
                </ul>
            </TimeList>
        </ul>
    )
}  