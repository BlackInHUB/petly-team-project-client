import { useState } from "react";
import { Time, TimeList, LiStyled, ListWeek, ListTime } from "./TimeContainerStyled";

export const date = new Date();

const week = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

export const TimeContainer = ({ work }) => {   
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(state => !state);
    }

    return (
            <TimeList>
                
            <button onClick={toggle}>
                <Time>
                    <span>Time:</span>
                    {work ? work.map(({ isOpen, from, to }, index) => (index === date.getDay() && isOpen) &&
                            <span key={index}>{from} - {to}</span>) : <span>{"Closed"}</span>
                        }
                    </Time>
                </button>
                

                {visible && <ul>
                    {work ? work.map(({ isOpen, from, to }, index) => isOpen ?
                        <LiStyled key={index} index={index}><ListWeek>{week[index]}</ListWeek><ListTime>{from}- {to}</ListTime></LiStyled> :
                        <LiStyled key={index} index={index}><ListWeek>{week[index]}</ListWeek><ListTime>Closed</ListTime></LiStyled>) : <li>{"We don't know, yet"}</li>
                    }
                </ul>}

            </TimeList>
    )
}  