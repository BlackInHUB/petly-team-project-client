import { useState } from 'react';
import { Time, TimeList } from './TimeContainerStyled';
import { Container } from './Container';

export const date = new Date();

export const TimeContainer = ({ work }) => {
  const [visible, setVisible] = useState(false);

  return (
    <TimeList>
      <button onClick={() => setVisible(true)}>
        <Time>
          <span>Time:</span>
          {work ? (
            work.map(
              ({ isOpen, from, to }, index) =>
                index === date.getDay() &&
                isOpen && (
                  <span key={index}>
                    {from} - {to}
                  </span>
                )
            )
          ) : (
            <span>{'Closed'}</span>
          )}
        </Time>
      </button>

      {visible && <Container setVisible={setVisible} work={work} />}
    </TimeList>
  );
};
