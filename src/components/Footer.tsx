import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <div className="mcFooter">
      <div className="column">
        <span>
          CopyRight &copy; {new Date().getFullYear()}. All rights reserved.
        </span>
      </div>
      <div className="column">
        <span>Created by: </span>&nbsp;&nbsp;
        <div className="row">
          <a
            href="https://www.linkedin.com/in/suresh-ungarala/"
            title="LinkedIn"
          >
            <span className="linkedin"></span>
          </a>
          <a
            href="https://github.com/sureshUngarala/moment-capturer"
            title="GitHub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="github"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;