import React from 'react';

import commingSoonImg from '../../assets/images/comming-soon.png';

const CommingSoon = () => {
  return (
    <div>
      <div className='flex w-full items-center justify-center pt-12'>
        <img className='w-96' src={commingSoonImg} alt='comming-soon' />
      </div>
    </div>
  );
};

export default CommingSoon;
