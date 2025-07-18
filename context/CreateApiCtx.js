// get, get-detail, post, patch, delete
// query params
// payload of request data
// api url
ApiUrl = "http://instagram.apis.com:8000";

const createApiUrl = (api_path, query_params) => {
  let url = `${ApiUrl}/${api_path}/`;
  let i = 0;
  for (query in query_params) {
    if (i === 0) {
      url += `?${query}=${query_params[query]}`;
    } else {
      url += `&${query}=${query_params[query]}`;
    }
    i += 1;
  }
  return url;
};

const createApiHeader = (is_default = true, token = null) => {
  let header = {};
  // update the content type
  if (is_default) {
    header["Content-Type"] = "application/json";
  } else {
    header["Content-Type"] = "multipart/form-data";
  }
  // update the authorization token
  if (token !== null) {
    header["Authorization"] = `Bearer ${token}`;
  }

  return header;
};

const createApiRequest = (api_method, header, data = null) => {
  let request = {
    method: api_method,
    header: header,
  };
  // update the data
  if (data !== null && ["POST", "PATCH"].includes(api_method)) {
    request["data"] = data;
  }
  return request;
};

const CreateApiCtx = async ({
  api_path,
  api_method,
  query_params = {},
  is_default_header = true,
  data = {},
  token = null,
}) => {
  try {
    let url = createApiUrl(api_path, query_params);
    let header = createApiHeader(is_default_header, token);
    let req = createApiRequest(api_method, header, data);
    let response = await fetch(url, req);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default CreateApiCtx;
