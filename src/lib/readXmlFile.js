import xml from "xml-js";
import { IS_COMPACT_OBJ } from "../constants";

const readXmlFile = async (file) => {
  const content = await file.text();

  if (!content) {
    return null;
  }

  return xml.xml2js(content, {
    compact: IS_COMPACT_OBJ,
    nativeType: true,
    nativeTypeAttributes: true,
  });
};

export default readXmlFile;
