import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

import { Button } from './style';

const ToTopBtn = () => {
  const [toTopBtn, setToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setToTopBtn(true);
      } else setToTopBtn(false);
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {toTopBtn && (
        <Button onClick={scrollUp}>
          <BiArrowToTop />
        </Button>
      )}
    </>
  );
};

export default ToTopBtn;
