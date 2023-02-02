import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Title, Img, Wrap } from './NoticeNotFound.styled';
import noticeNotFound from '../../../../src/assets/images/notcat.jpg';
function NoticeNotFound() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Add pets here.'],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Wrap>
      <Img src={noticeNotFound} />
      <Title ref={el}></Title>
    </Wrap>
  );
}

export default NoticeNotFound;
