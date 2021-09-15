import React from 'react';

const GetUrlBlock = ({ url }) => {
  return (
    <div className='get-url-div'>
      <b>GET</b> <a href={url}>{url}</a>
    </div>
  );
};

export default GetUrlBlock;
