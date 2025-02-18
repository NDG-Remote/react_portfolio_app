import React, { Component } from 'react';
import { form } from "../assets";

class FormSpGb extends Component {
  render() {
    return (
      <div className={`flex flex-row p-6 rounded-[20px] feature-card dark-frame`}>
        <iframe
          title="Sp GB Form"
          src="https://ndg-remote.github.io/Multistep-Form-Sp-Gb.com/"
          width="360px"
          height="600px"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
        {/* <img src={form} alt="spanien grundbuchauszug" className="w-[100%] h-[100%] rounded-md" /> */}
      </div>
    );
  }
}

export default FormSpGb;