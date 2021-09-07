import request from '../request/http';
export const Login = function(params) {
    return request({
        url: '/api/login',
        method: 'post',
        data: params,
    })

}