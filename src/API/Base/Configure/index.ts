import InterceptorManager from './InterceptorManager';

export const initialize = async (
  onRequestSuccess: any,
  onRequestFail: any,
  onResponseSuccess: any,
  onResponseFail: any,
) => {
  // Add a request interceptor
  InterceptorManager.interceptRequest(async (config: any) => {
    await onRequestSuccess(config);
    // Do something before request is sent
    return config;
  }, onRequestFail);
  // getLILInterceptor().interceptors.request.use(, onRequestFail);

  InterceptorManager.interceptResponse(onResponseSuccess, onResponseFail);

  // getLILInterceptor().interceptors.response.use(
  //   onResponseSuccess,
  //   onResponseFail
  // );
};

export default {
  initialize,
  APIinstance: InterceptorManager.APIInstance,
};
