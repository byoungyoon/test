import { handleFetchError } from '@/utils/errorhandler';

interface FetchData {
  url: string;
  method?: string;
  body?: BodyInit | null;
  token?: string | null;
  image?: boolean;
  abortSignal?: AbortSignal | null;
  credentials?: RequestCredentials;
  isFormData?: boolean;
}

export const fetchUtil = async (data: FetchData) => {
  const {
    url,
    method = 'GET',
    body = null,
    token = null,
    image = false,
    abortSignal = null,
    credentials = 'same-origin',
    isFormData = false,
  } = data;

  let headers: Record<string, string> = {};

  if (!image && !isFormData) {
    headers = {
      'Content-Type': 'application/json',
      Accept: '*/*',
    };
  }
  if (isFormData) {
    headers = { Accept: '*/*', 'Accept-Encoding': 'gzip, deflate, br' };
  }

  if (token) {
    headers = { ...headers, Authorization: `${token}` };
  }

  // https://blogtest.3gptest.com:3001/v1
  // http://192.168.2.109:3001/v1
  // http://localhost:3001/v1
  // https://ps-mkt.co.kr/v1
  //{process.env.NEXT_PUBLIC_BACKEND_URL
  return fetch(`https://ps-mkt.co.kr/v1${url}`, {
    method,
    headers,
    body,
    credentials,
    ...(abortSignal && { signal: abortSignal }),
  }).then(handleFetchError);
};
