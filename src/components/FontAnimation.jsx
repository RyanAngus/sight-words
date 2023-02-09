import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function FontAnimation() {

  return (

      <TypeAnimation
          sequence={[
            'Sight', // Types 'One'
            1000, // Waits 1s
            `Sight Words`, // Deletes 'One' and types 'Two'
            
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          cursor={false}
          repeat={0}
          className="appTitle"
          style={{ fontSize: '6em'}}
      />
  )
}