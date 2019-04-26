import Axios from "axios";

//配置
Axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c2e9b8b7096eb383e0cc291/example';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;//传cookie信息
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//qs处理数据。

//拦截器
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //console.log(config)
    //用qs插件处理config里的数据。
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });




export default Axios
