import * as HttpService from "./http.service";

const ApiUrl = "https://api.punkapi.com/v2"

const UrlParamsReplace = (url, params = {}) => {
  let urlWithPrefix = `${ApiUrl}${url}`;
  if (params) {
    Object.keys(params).forEach(
      (key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key]))
    );
  }
  return urlWithPrefix;
};

const GET_BEERS_API = (page, perPage) => UrlParamsReplace('/beers?page=:page&per_page=:perPage', { page, perPage })

export const getBeers = (page, perPage) => {
  return HttpService.getWithOutAuth(GET_BEERS_API(page, perPage));
}

