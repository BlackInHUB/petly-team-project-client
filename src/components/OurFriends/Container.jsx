import { useEffect, useRef, useCallback } from 'react';
import { LiStyled, ListWeek, ListTime } from './TimeContainerStyled';

const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

export const Container = ({ setVisible, work }) => {
  const refContainer = useRef(null);
  const refFirst = useRef(true);

  const handler = useCallback(
    e => {
      if (refFirst.current) {
        console.log('done2');
        refFirst.current = false;
        return;
      }
      console.log('click', refContainer.current);
      console.log(refContainer.current.contains(e.target));
      if (refContainer.current.contains(e.target)) return;
      setVisible(false);
    },
    [setVisible]
  );

  useEffect(() => {
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, [handler]);

  return (
    <ul ref={refContainer}>
      {work ? (
        work.map(({ isOpen, from, to }, index) =>
          isOpen ? (
            <LiStyled key={index} index={index}>
              <ListWeek>{week[index]}</ListWeek>
              <ListTime>
                {from}- {to}
              </ListTime>
            </LiStyled>
          ) : (
            <LiStyled key={index} index={index}>
              <ListWeek>{week[index]}</ListWeek>
              <ListTime>Closed</ListTime>
            </LiStyled>
          )
        )
      ) : (
        <li>{"We don't know, yet"}</li>
      )}
    </ul>
  );
};
