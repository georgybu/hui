
function isUrl(string) {
  const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/; // eslint-disable-line
  const localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/ // eslint-disable-line
  const nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/; // eslint-disable-line

  if (typeof string !== 'string') {
    return false;
  }

  var match = string.match(protocolAndDomainRE);
  if (!match) {
    return false;
  }

  var everythingAfterProtocol = match[1];
  if (!everythingAfterProtocol) {
    return false;
  }

  if (localhostDomainRE.test(everythingAfterProtocol) ||
      nonLocalhostDomainRE.test(everythingAfterProtocol)) {
    return true;
  }

  return false;
}


export const url = (props, propName, componentName) => {
  const value = props[propName];
  componentName = componentName || 'ANONYMOUS';

  if (typeof value === 'string' && (!value.startsWith('/') && !isUrl(value))) {
    return new Error(`Invalid URL prop value '${value}' for ${propName} in ${componentName}`);
  }

  return null;
}
