import axios from "axios";

async function fetchHelper(
  url: string,
  method: string,
  data?: { [key: string]: any },
  headers?: { [key: string]: any },
  responseType?: string
) {
  const baseURL: string | undefined =
    process.env.REACT_APP_UNSPLASH_API_BASE_URL;

  const accessKey: string | undefined =
    process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY;

  try {
    const fetch: { [key: string]: any } = {
      url: `${baseURL}${url}`,
      method,
      data: data ? data : null,
      headers: headers
        ? { ...headers, Authorization: `Client-ID ${accessKey}` }
        : { Authorization: `Client-ID ${accessKey}` },
      responseType: responseType,
    };

    const response = await axios(fetch);

    return response;
  } catch (error) {
    throw error;
  }
}

export default fetchHelper;
