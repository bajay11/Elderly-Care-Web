import React from 'react';

const MyComponent = () => {
  const myObject = { /* Your object here */ };

  return (
    <div>
      {Object.entries(myObject).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
