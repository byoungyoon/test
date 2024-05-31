import logger from '@/lib/logger';

import { STATUS } from '@/constant/status';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleFetchError = async (res: any) => {
  if (
    res.status >= STATUS.BAD_REQUEST &&
    res.status < STATUS.CONNECTION_TIMED_OUT
  ) {
    logger(res, 'Error while fetching');
    const response = await res.clone().text(); // Use text() instead of json()

    // Replace "NaN" with null in the JSON string
    const sanitizedResponse = response.replace(/NaN/g, 'null');

    // Parse the modified JSON string
    const parsedResponse = JSON.parse(sanitizedResponse);

    const errRes = {
      ...parsedResponse,
      status: res.status,
    };
    if (res.status === STATUS.UNAUTHORIZED) {
      // localStorage.clear();
    } else {
      //   errorToaster(`${parsedResponse.Message || "Your Session has been Expired!"}`);
    }
    throw errRes;
  }

  // Filter NaN values from res;
  const response = await res.clone().text(); // Use text() instead of json()

  // Replace "NaN" with null in the JSON string
  const sanitizedResponse = response.replace(/NaN/g, 'null');

  // Parse the modified JSON string
  return JSON.parse(sanitizedResponse);
};
