import axios from 'axios'
let instance = axios.create({
    // baseURL: 'api',
    timeout: 10000,
});

//请求拦截
instance.interceptors.request.use(config => {
    const token = localStorage.token;
    if (token) {
        config.headers.token = token
    } else {
        console.log('没有token');
    }
    return config;
}, error => {
    return Promise.reject(error);
});

//响应拦截
instance.interceptors.response.use(res => {
    return res.data;
}, error => {
    return Promise.reject(error);
})

export default instance