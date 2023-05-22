export const isEmpty = (value: any): boolean => {
  return (
    value === undefined ||
    value === "" ||
    value === null ||
    value === "undefined"
  );
};

export const stringToASCII = (str: string): string => {
  try {
    return str
      .replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, "a")
      .replace(/[èéẻẽẹêềếểễệ]/g, "e")
      .replace(/[đ]/g, "d")
      .replace(/[ìíỉĩị]/g, "i")
      .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, "o")
      .replace(/[ùúủũụưừứửữự]/g, "u")
      .replace(/[ỳýỷỹỵ]/g, "y");
  } catch {
    return "";
  }
};

export const searchASCII = (
  strSearch: string,
  strOriginal: string
): boolean => {
  if (isEmpty(strOriginal)) {
    if (isEmpty(strSearch)) {
      return true;
    }

    return false;
  }

  const strSearchToASCII = stringToASCII(strSearch.toLowerCase());
  const strOriginalToASCII = stringToASCII(strOriginal.toLowerCase());

  return strOriginalToASCII.includes(strSearchToASCII.trim());
};
