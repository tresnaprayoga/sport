import React from "react";

const OurPartnerItem = ({ name, logo }) => (
  <div className="partner-card">
    <img
      src={logo}
      alt={name}
    />
  </div>
);

export default OurPartnerItem;
