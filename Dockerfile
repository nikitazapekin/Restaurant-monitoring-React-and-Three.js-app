 FROM node 
 WORKDIR /
 COPY . .

 RUN yarn install
 EXPOSE 5173
 CMD ["yarn", "run", "dev"]

 #создать образ
#docker build .
#docker images
#docker run f2d38d3cf6a4
#docker ps
#docker stop 2272845d63aa
#docker start 2272845d63aa
# docker run -p 5173:5173 f2d38d3cf6a4
#==================================================
# Используем базовый образ с Node.js
#FROM node:14-alpine

# Устанавливаем директорию для работы
#WORKDIR /

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
#COPY package*.json ./
#RUN npm install

# Копируем все файлы из текущего каталога в рабочую директорию
#COPY . .

# Собираем React-приложение
#RUN yarn run build

# Команда для запуска React-приложения
#CMD ["yarn", "run", "dev"]

# Определяем имя контейнера
#LABEL name="my-react-app"
#docker build -t my-react-app .
#docker run -d -p 5173:5173 --name my-react-container my-react-app
#docker stop my-react-container
#docker ps -a
#docker logs my-react-container
#docker rm my-react-container









#----------------------------------
#FROM node:14-alpine
 
#WORKDIR /app
 
#COPY package*.json ./
#RUN npm install
 
#COPY . .

 
#RUN yarn run build

 
#CMD ["yarn", "run", "dev"]







#docker build -t my-react-app .
#docker run -p 3000:3000 my-react-app


#docker run -p 5173:3000 my-react-app

#=====================
# Используем базовый образ с Docker
#FROM docker:latest

# Устанавливаем директорию для работы
#WORKDIR  C:/Users/wotbl/testt-doc
#WORKDIR /app
#WORKDIR /
# Установка docker-compose
#RUN apk add --no-cache docker-compose


#CMD docker-compose pull && docker-compose up -d


#docker build -t my-paperless .
#docker run -d my-paperless
#docker ps -a
#docker ps
#docker-compose up -d
#C:\Users\wotbl\my-next-app>docker compose run --rm webserver createsuperuser


#----------------------------------------------------------
#docker build -t app .
#docker run -d app