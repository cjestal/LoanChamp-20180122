import constantService from './constantService'
// import apiServiceMock from './apiService.mock'
import axios from 'axios';  
import querystring from 'querystring';
// var qs = require('qs');
import qs from 'qs'
var baseUrl = `http://${constantService.hostName}`;
// apply api mocking
// apiServiceMock(baseUrl);

const instance = axios.create({  
    baseURL: baseUrl,  
    timeout: 20000,  
    validateStatus:function(status){  
        return status < 500;  
    },  
    headers: {  
        // 跨域请求 这个配置不能少  
        "Content-Type": "application/json;charset=UTF-8",  
        // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",  
        
        'Accept': 'application/json'  
    }  
}); 

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    $(".full").show();
    return config;
  }, function (error) {
    // Do something with request error
    $(".full").hide();
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    $(".full").hide();
    return response;
  }, function (error) {
    // Do something with response error
    $(".full").hide();
    return Promise.reject(error);
  });

 


export default {

    /** 
     * @param url 
     * @param paramObj  发送ajax 传递的参数对象 
     * @returns {promise} 返回promise对象 
     * @example 
     axios.get('/user', { 
      params: { 
        ID: 12345 
      } 
    }) 
     .then(function (response) { 
      console.log(response); 
    }) 
     .catch(function (response) { 
      console.log(response); 
    }); 
     */  
    get:function(url, paramObj){  
        var apiStr = baseUrl + url;  
        return instance.get(apiStr,paramObj);  
    },  
  
    /** 
     * @param url 
     * @param paramObj  发送ajax 传递的参数对象 
     * @returns {promise} 返回promise对象 
     * @example 
     axios.post('/user', { 
    firstName: 'Fred', 
    lastName: 'Flintstone' 
  }) 
     .then(function (response) { 
    console.log(response); 
  }) 
     .catch(function (response) { 
    console.log(response); 
  }); 
     */  
    post:function(url,paramObj){  
    	
        var apiStr = baseUrl + url;  
        // var data = jsonProp(paramObj)
        // data = qs.stringify(data)
        // console.log(data);
        return instance.post(apiStr,paramObj);  
    },  

}

function jsonProp (obj) {
  Object.keys(obj).forEach((key) => {
    if ((typeof obj[key]) === 'object') {
      obj[key] = JSON.stringify(obj[key])
    }
  })
  return obj
}