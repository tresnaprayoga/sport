import React from "react";
import OurPartnerItem from "./PartnerItem";

const OurPartnerList = ({ partners }) => (
  <div className="partners-list">
    {partners.map((partner, idx) => (
      <OurPartnerItem
        key={idx}
        name={partner.name}
        logo={partner.logo}
      />
    ))}
  </div>
);

export default OurPartnerList;
