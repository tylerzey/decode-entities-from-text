const decodeEntities = (stringIncludingEntities: String = '') => {
  const element = document.createElement('div');

  function decodeHTMLEntities(dirtyString: String) {
    if (!dirtyString) return '';

    // strip script/html tags
    let newStr = dirtyString.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
    newStr = newStr.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
    element.innerHTML = newStr;
    const returnValue = element.textContent;
    element.textContent = '';

    return returnValue;
  }

  return decodeHTMLEntities(stringIncludingEntities);
};

export default decodeEntities