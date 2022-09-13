import axios from 'axios';
// import env from '../../../../env';
const LIL_API_URL = 'http://10.0.2.2:4000';
import {Platform} from 'react-native';

class InterceptorManager {
  APIInstance: any;
  isRequestIntercepted: boolean = false;
  isResponseIntercepted: boolean = false;

  constructor() {
    console.log('base URL initialized', LIL_API_URL);

    this.APIInstance = axios.create({
      baseURL: LIL_API_URL,
      headers: {
        'Content-Type': 'application/json',
        deviceType: Platform.OS === 'android' ? 'qm_android' : 'qm_ios',
      },
    });
    console.log('this.APIInstance>>', this.APIInstance);
  }

  // createAPIInstance() {
  //   this.APIInstance = axios.create({
  //     baseURL: LIL_API_URL,
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  //   // console.log('this.APIInstance', this.APIInstance);
  //   return this.APIInstance;
  // }

  getAPIInstance() {
    if (this.APIInstance) {
      return this.APIInstance;
    } else {
      this.APIInstance = axios.create({
        baseURL: LIL_API_URL,
        headers: {
          'Content-Type': 'application/json',
          deviceType: Platform.OS === 'android' ? 'qm_android' : 'qm_ios',
        },
      });
      return this.APIInstance;
    }
  }

  getInterceptor() {
    return this.getAPIInstance().interceptors;
  }

  interceptRequest(success: any, failure: any) {
    if (!this.isRequestIntercepted) {
      this.getInterceptor().request.use(success, failure);
      this.isRequestIntercepted = true;
      console.log('isRequestIntercepted', this.isRequestIntercepted);
    }
  }

  interceptResponse(success: any, failure: any) {
    if (!this.isResponseIntercepted) {
      this.getInterceptor().response.use(success, failure);
      this.isResponseIntercepted = true;
    }
  }
}

export default new InterceptorManager();
