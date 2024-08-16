# StaticRest API

StaticRest API — это серверное приложение, разработанное на Node.js с использованием Express, предназначенное для обработки различных задач по синхронизации данных и авторизации. Проект организован с использованием паттерна MVC (Model-View-Controller), чтобы обеспечить чистоту и поддерживаемость кода.

## Возможности

- **Авторизация**: Обработка запросов на авторизацию пользователей.
- **Синхронизация данных**: Синхронизация товаров, контрагентов, автомобилей, прицепов, вагонов и водителей.
- **Обработка результатов взвешивания**: Приём и обработка данных о результатах взвешивания.

## Структура проекта

```plaintext
StaticRest/
│
├── src/
│   ├── config/
│   │   └── localhost.json  # Файл конфигурации с настройками сервера
│   ├── controllers/
│   │   ├── auth.controllers.ts  # Контроллер авторизации
│   │   ├── sync.controllers.ts  # Контроллер синхронизации данных
│   │   └── weight.controllers.ts  # Контроллер обработки результатов взвешивания
│   ├── services/
│   │   ├── auth.services.ts  # Сервис авторизации
│   │   ├── sync.services.ts  # Сервис синхронизации данных
│   │   └── weight.services.ts  # Сервис обработки результатов взвешивания
│   ├── routes/
│   │   ├── auth.routes.ts  # Маршрут авторизации
│   │   ├── sync.routes.ts  # Маршрут синхронизации данных
│   │   └── weight.routes.ts  # Маршрут обработки результатов взвешивания
│   ├── app.ts  # Точка входа в приложение
│   └── routes.ts  # Инициализация маршрутов
├── tsconfig.json  # Конфигурация TypeScript
├── package.json  # Метаданные проекта и зависимости
└── README.md  # Документация проекта
└── server.js  # Сервер


## Установка 
Убедитесь, что у вас установлены Node.js и npm (Node Package Manager). Затем выполните:

```cmd
npm install
```

## Компиляция TypeScript

Если вы хотите отдельно скомпилировать TypeScript код в JavaScript:

```cmd

npm run build

```

## Запуск и компляция TypeScript

Запустите сервер:

```cmd

npm start

```

## Конфигурация 

Файл src/config/localhost.json содержит параметры конфигурации сервера:

```json
{
	"server": {
		"login": "test",
		"password": "12345",
		"token": "52390723r5tgn89ng92",
		"PORT": 3500 
	}
}
```
Эти параметры можно изменять в зависимости от того, как вы настроите передачу данных в программе "Статика 3". Вы можете изменить login, password, token и PORT в соответствии с вашими требованиями.

<img src = "./img/sin.png"/>
<img src = "./img/integration.png"/>
<img src = "settings.png"/>

## Взаимодействие с API

### Базовый URL

```bash
    http://localhost:PORT/api
```

Замените PORT на фактический номер порта, указанный в вашем файле src/config/localhost.json.

### Авторизация 

Endpoint: /api

Метод: POST

***Тело запроса:

```json
{
  "cmd_id": 1,
  "login": "your_login",
  "password": "your_password"
}
```

*Ответ:*

```json
{
  "cmd_id": 1,
  "token": "your_auth_token"
}
```

### Синхронизация данных 


Синхронизация товаров
Endpoint: /api/sync/goods

Метод: POST

Тело запроса:

```json
{
  "cmd_id": 2,
  "goods": [
    {
      "name": "Good 1",
      "code": "001",
      "coeff": 1.5
    }
  ]
}
```

*Ответ:*

```json
{
  "cmd_id": 2,
  "status": "Синхронизация товаров завершена"
}
```

... (Остальные команды синхронизации можно описать аналогично)

### Результаты взвешивания 

Endpoint: /api/weight

Метод: POST

Тело запроса:

```json
{
  "cmd_id": 8,
  "records": [
    {
      "j_id": "123",
      "tare_date": "2024-08-15T12:00:00Z",
      "brutto_date": "2024-08-15T12:10:00Z",
      "finish_date": "2024-08-15T12:15:00Z",
      "tare": 5000,
      "brutto": 7000,
      "netto": 2000,
      "good": "Grain",
      "sender": "Farm A",
      "recipient": "Mill B",
      "payer": "Company C",
      "car_number": "ABC123",
      "trailer_number": "XYZ789",
      "train_number": "12345",
      "driver": "John Doe",
      "rfid_code": "abc123rfid",
      "operator": "Operator X",
      "photos_tare": [],
      "photos_brutto": [],
      "axles_brutto": [],
      "axles_tare": [],
      "susps": [],
      "downs": [],
      "bets": [],
      "additional": ""
    }
  ]
}
```

Ответ:

```json
{
  "cmd_id": 8,
  "status": "Результаты взвешивания успешно отправлены"
}
```

### Обработка ошибок 

В случае ошибки API вернёт ответ с cmd_id: 9 и соответствующим error_text.

Пример:
```json
{
  "cmd_id": 9,
  "error_text": "Ошибка авторизации: неверный логин или пароль"
}
```
