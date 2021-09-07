import Mock from 'mockjs';
const login = Mock.mock(
    '/api/login', 'post', () => {
        return {
            code: 200,
            token: Mock.Random.string('lower', 18),
            permissions: Mock.Random.string('1|2', 1),
            message: 'success'
        }
    })

export default { login }