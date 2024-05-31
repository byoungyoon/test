export function appendQueryParams(
  baseURL: string,
  params: { [key: string]: string | string[] }
): string {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
    } else {
      searchParams.append(key, value);
    }
  }

  return `${baseURL}?${searchParams.toString()}`;
}

export const encodeEscapeCharacterURL = (text: string): string => {
  return encodeURIComponent(text);
};
