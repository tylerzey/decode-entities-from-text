interface Translator { [key: string]: string }

const decodeEntities = (stringIncludingEntities: String = '') => {


  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;

  const translate: Translator = {
    "nbsp": " ",
    "amp": "&",
    "quot": "\"",
    "lt": "<",
    "gt": ">"
  };

  return stringIncludingEntities.replace(translate_re, (_, entity: string) => {
    return translate[entity];
  }).replace(/&#(\d+);/gi, (_, numStr) => {
    const num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });

};

export default decodeEntities