import BaseAPI from './Base';

class UsersAPI extends BaseAPI {
  constructor() {
    super('/');
  }

  addUsers(body: any) {
    console.log('object received', body);
    return this.post('add-user', body);
  }
}

const instance = new UsersAPI();
export default instance;
