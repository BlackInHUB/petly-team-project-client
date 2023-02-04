import { Watch } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Watch
          height="200"
          width="200"
          color="#F59256"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="watch-loading"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      );
};