import Config from './Configure';
const LIL_API_URL = 'https://10.0.2.2:4000';
export default class BaseAPI {
  _baseRoute: string;

  _client: any;

  constructor(baseRoute: string) {
    this._baseRoute = baseRoute;
    this._client = Config.APIinstance;
  }

  post(
    route: string,
    postData?: {},
    headers = {'Content-Type': 'application/json'},
  ) {
    console.log('route here::::', route);
    console.log('base API ::', this._client);
    console.log('postdata::::::', postData);
    console.log('headers', headers);
    console.log(`full path ${LIL_API_URL}/${route}`);

    return this._client.post(`${LIL_API_URL}/${route}`, postData, {
      headers,
    });
  }

  put(route: string, putData: {}, headers = {}) {
    return this._client.put(`${LIL_API_URL}/${route}`, putData, {
      headers,
    });
  }

  get(route: string, params = {}, headers = {}) {
    return this._client.get(`${LIL_API_URL}/${route}`, {params, headers});
  }
}
