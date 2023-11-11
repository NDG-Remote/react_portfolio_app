import React, { Component } from 'react';
import { form } from "../assets";

class FormSpGb extends Component {
  render() {
    return (
      <div>
{/*         <iframe
          title="Sp GB Form"
          src="https://myformdesign.online/spanien-grundbuchauszug"
          width="360px"
          height="600px"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
        ></iframe> */}
        <img src={form} alt="spanien grundbuchauszug" className="w-[100%] h-[100%] rounded-md" />
      </div>
    );
  }
}

export default FormSpGb;