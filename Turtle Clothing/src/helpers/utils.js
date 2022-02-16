export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const capitalized = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const sizeF = (string) => {
  let result;
  switch (string) {
    case "xsmall":
      result = "XS";
      break;
    case "small":
      result = "S";
      break;
    case "large":
      result = "L";
      break;
    case "extralarge":
      result = "XL";
      break;
    case "docubleextralarge":
      result = "XXL";
      break;
    default:
    // code block
  }
  return result;
};
