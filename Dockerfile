# Используем официальный образ Node.js
FROM node:18-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем статический сервер
RUN npm install -g serve

# Открываем порт
EXPOSE 4173

# Запускаем билд через serve
CMD ["serve", "-s", "dist", "-l", "4173"]
