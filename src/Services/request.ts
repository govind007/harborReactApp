import axios from 'axios'
import Config from '@/Config'

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "axios"
 *
 * @return {object}           The response data
 */
export function request({ url, external }: { url: string; external?: boolean }): Promise<any | { err: ResponseError }> {
  if (external) {
    return axios.get(url);
  }
  else {
    return axios.get(`${Config.backendUrl}${url}`)
  }
}

export function postRequest({
  url,
  data,
  external,
}: {
  url: string;
  data: any;
  external?: boolean;
}): Promise<any | { err: ResponseError }> {
  if (external) {
    return axios.post(url, data);
  }
  else {
    return axios.post(`${Config.backendUrl}${url}`, data);
  }
}

