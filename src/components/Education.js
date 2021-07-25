import React from "react";

const Education = () => {
  return (
    <div>
      <h3>EDUCATION</h3>
      <div className="education">
        <h6 className="subtitle">Master of Planning (M.Plan)</h6>
        <p className="edu-ins">
          School of Architecture and Planning, Anna University
        </p>
        <div className="edu-year">
          <p>2016 - 2018</p>
          <p className="location">Chennai</p>
        </div>
        <p className="cgpa">CGPA - 7.0</p>
      </div>
      <div className="education">
        <h6 className="subtitle">Bachelor of Engineering (B.E - Civil)</h6>
        <p className="edu-ins">Government College of Engineering</p>
        <div className="edu-year">
          <p>2012 - 2016</p>
          <p className="location">Salem</p>
        </div>
        <p className="cgpa">CGPA - 8.53</p>
      </div>
      <div className="education">
        <h6 className="subtitle">HSC - 94 %</h6>
        <div className="edu-year">
          <p>2012</p>
          <p className="location">Ariyalur</p>
        </div>
      </div>

      <div className="education">
        <h6 className="subtitle">SSLC - 93.6 %</h6>
        <div className="edu-year">
          <p>2010</p>
          <p className="location">Ariyalur</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
