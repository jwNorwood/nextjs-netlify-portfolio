import React from "react";

const Company = ({ name, industry, years, children }) => {
  return (
    <div className="company">
      <div className="company-header">
      <h3>{name}</h3><strong>{industry}</strong>
      </div>
      <p>
        <strong>Years:</strong> {years}
      </p>
      <p>{children}</p>
    </div>
  );
}

export default Company;