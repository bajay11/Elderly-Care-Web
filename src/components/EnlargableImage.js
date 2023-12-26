import React, { useState } from 'react';

const EnlargableImage = ({ src, alt }) => {
  const [enlarged, setEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setEnlarged(!enlarged);
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        style={{ cursor: 'pointer', maxWidth: enlarged ? '100%' : '200px' }}
        onClick={toggleEnlarged}
      />
    </div>
  );
};

export default EnlargableImage;
