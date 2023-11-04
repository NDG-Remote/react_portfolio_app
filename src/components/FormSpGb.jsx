import React, { Component } from 'react';

class FormSpGb extends Component {
  render() {
    return (
      <div>
        <iframe
/*           className='w-[100%]' */
          title="Sp GB Form"
          src="/src/components/index.html" // Replace with the actual path to your form HTML file
          width="400px"
          height="600px"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    );
  }
}

export default FormSpGb;