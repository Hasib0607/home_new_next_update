export const hasProtocol = (input) => {
  return /^https?:\/\//i.test(input);
};

export const extractDomainName = (input) => {
  // Ensure input has protocol for valid URL parsing
  const isWithProtocol = hasProtocol(input);

  try {
    const url = new URL(isWithProtocol ? input : `https://${input}`);

    const hostnameParts = url.hostname.split('.');

    // domain cases
    if (hostnameParts.length == 2) {
      return hostnameParts[0];
    }
    if (hostnameParts.length == 3) {
      return hostnameParts[0] == 'www' ? hostnameParts[1] : hostnameParts[0];
    }
    if (hostnameParts.length == 4) {
      return hostnameParts[1];
    }

    return url.hostname;
  } catch (e) {
    console.warn('Invalid URL:', input);
    return null;
  }
};
