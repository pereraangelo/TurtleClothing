import React from "react";
import ContentLoader from "react-content-loader";

export const StoreItemLoader = (props) => {
  return (
    <ContentLoader
      backgroundColor={"#333"}
      speed={2}
      width="auto"
      height="auto"
      viewBox="0 0 364 434"
      {...props}
    >
      <rect x="115" y="66" rx="6" ry="6" width="134" height="151" />
      <rect x="33" y="238" rx="6" ry="6" width="299" height="15" />
      <rect x="249" y="21" rx="6" ry="6" width="76" height="24" />
      <rect x="97" y="274" rx="5" ry="5" width="170" height="9" />
      <rect x="97" y="330" rx="5" ry="5" width="170" height="9" />
      <rect x="132" y="367" rx="6" ry="6" width="100" height="31" />
    </ContentLoader>
  );
};

 
export default {  StoreItemLoader };
