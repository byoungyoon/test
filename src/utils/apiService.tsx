/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchUtil } from '@/utils/fetchUtil';
import { appendQueryParams } from '@/utils/urlUtils';

interface RequestOptions {
  url?: string;
  params?: Record<string, any>;
  isAuthorized?: boolean;
  abortSignal?: AbortSignal | null;
  body?: Record<string, any>;
  isFormData?: boolean;
}

export const Get = async ({
  url = '',
  params = {},
  isAuthorized = true,
  abortSignal = null,
}: RequestOptions) => {
  const token = null;

  if (isAuthorized) {
    // token = useAuthStore.getState().token;
    // const session = await getSession();
    // token = session?.user?.token;
  }

  return fetchUtil({
    url: Object.keys(params).length > 0 ? appendQueryParams(url, params) : url,
    token,
    abortSignal,
  })
    .then((res) => {
      const { data } = res;

      return Promise.resolve(data ? data : res);
    })
    .catch((err) => {
      throw new Error(err);
      // return Promise.reject(err);
    });
};

export const Post = async ({
  url = '',
  body = {},
  isAuthorized = true,
  abortSignal = null,
  isFormData = false,
}: RequestOptions) => {
  let token = null;

  if (isAuthorized) {
    // token = useAuthStore.getState().token;
    // const session = await getSession();
    token = '';
  }

  return fetchUtil({
    url,
    token,
    body: isFormData ? (body as any) : JSON.stringify(body),
    method: 'POST',
    abortSignal,
    isFormData,
  })
    .then((res) => {
      const { data } = res;
      return Promise.resolve(data ? data : res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const Put = async ({
  url = '',
  body = {},
  isAuthorized = true,
  abortSignal = null,
}: RequestOptions) => {
  const token = null;

  if (isAuthorized) {
    // token = useAuthStore.getState().token;
    // const session = await getSession();
    // token = session?.user?.token;
  }

  return fetchUtil({
    url,
    token,
    body: JSON.stringify(body),
    method: 'PUT',
    abortSignal,
  })
    .then((res) => {
      const { data } = res;
      return Promise.resolve(data ? data : res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const Delete = async ({
  url = '',
  isAuthorized = true,
  abortSignal = null,
  body = {},
}: RequestOptions) => {
  const token = null;

  if (isAuthorized) {
    // token = useAuthStore.getState().token;
    // const session = await getSession();
    // token = session?.user?.token;
  }

  return fetchUtil({
    url,
    token,
    method: 'DELETE',
    abortSignal,
    body: JSON.stringify(body),
  })
    .then((res) => {
      const { data } = res;
      return Promise.resolve(data ? data : res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const Patch = async ({
  url = '',
  body = {},
  isAuthorized = true,
  abortSignal = null,
}: RequestOptions) => {
  const token = null;

  if (isAuthorized) {
    // token = useAuthStore.getState().token;
    // const session = await getSession();
    // token = session?.user?.token;
  }

  return fetchUtil({
    url,
    token,
    body: JSON.stringify(body),
    method: 'PATCH',
    abortSignal,
  })
    .then((res) => {
      const { data } = res;
      return Promise.resolve(data ? data : res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
