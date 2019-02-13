
function isUrl(string){
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


const requiredUrlPropType = (props, propName, componentName) => {
  const value = props[propName];
  componentName = componentName || 'ANONYMOUS';

  if (value == null || typeof value !== 'string' || (!value.startsWith('/') && !isUrl(value))) {
    return new Error(`Invalid URL prop value '${value}' for ${propName} in ${componentName}`);
  }

  return null;
}

const url = (props, propName, componentName) => {
  if (props[propName] == null) {
    return null;
  }

  return requiredUrlPropType(props, propName, componentName);
}

url.isRequired = requiredUrlPropType;

export default url;