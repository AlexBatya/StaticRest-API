import config from '../config/localhost.json'

class AuthService {
	static async authorize(login: string, password: string): Promise<string> {
		if (login === config.server.login && password === config.server.password) {
			return config.server.token;
		} else {
			throw new Error('Ошибка авторизации: неверный логин или пароль');
		}
	}
}

export default AuthService;
