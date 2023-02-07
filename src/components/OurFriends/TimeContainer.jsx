import { Time, TimeList } from "./TimeContainerStyled";
import styled from 'styled-components';

const date = new Date();

const week = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];


export const LiStyled = styled.li`background-color:  ${p => (p.index === date.getDay()) ? p.theme.colors.accent : p.theme.colors.background};`

export const TimeContainer = ({ work }) => {      
    return (
        <ul>
            <TimeList>
                <Time>Time:</Time>
                {work ? work.map(({ isOpen, from, to }, index) => index === date.getDay() &&
                    <p key={index}>{from} - {to}</p>) : <p>{"Closed"}</p>
                }

                <ul>
                    {work && work.map(({ isOpen, from, to }, index) => isOpen ?
                        <LiStyled key={index} index={index}>{week[index]} {from} - {to}</LiStyled> :
                        <LiStyled key={index} index={index}> {week[index]} - {"Closed"}</LiStyled>)
                    }
                </ul>

            </TimeList>
        </ul>
    )
}  