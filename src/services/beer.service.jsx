import * as HttpService from "./http.service";

const ApiUrl = "https://api.punkapi.com/v2";

const GET_BEERS_API = (page, itemsPerPage) =>
  UrlParamsReplace("/beers?page=:page&per_page=:itemsPerPage", {
    page,
    itemsPerPage,
  });

const UrlParamsReplace = (url, params = {}) => {
  let urlWithPrefix = `${ApiUrl}${url}`;
  if (params) {
    Object.keys(params).forEach(
      (key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key]))
    );
  }
  return urlWithPrefix;
};

export const getBeers = (page, itemsPerPage) => {
  return HttpService.get(GET_BEERS_API(page, itemsPerPage));
};
