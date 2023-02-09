import { Time, TimeList, LiStyled, ListWeek, ListTime } from "./TimeContainerStyled";

export const date = new Date();

const week = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

export const TimeContainer = ({ work }) => {      
    return (
        <ul>
            <TimeList>
                <Time>Time:</Time>
                {work ? work.map(({ isOpen, from, to }, index) => (index === date.getDay() && isOpen) &&
                    <p key={index}>{from} - {to}</p>) : <p>{"Closed"}</p>
                }

                <ul>
                    {work ? work.map(({ isOpen, from, to }, index) => isOpen ?
                        <LiStyled key={index} index={index}><ListWeek>{week[index]}</ListWeek><ListTime>{from}- {to}</ListTime></LiStyled> :
                        <LiStyled key={index} index={index}><ListWeek>{week[index]}</ListWeek><ListTime>Closed</ListTime></LiStyled>) : <li>{"We don't know, yet"}</li>
                    }
                </ul>

            </TimeList>
        </ul>
    )
}  