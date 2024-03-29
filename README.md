# industrial_enterprise-DRF-Front

Курсовой проект по дисциплине СБД (системы баз данных)

Описание проектируемой БД:
----------------------------------------------------------------------------------------------------------------
- Промышленное предприятие осуществляет доставку продукции
конечным потребителям через сеть собственных торговых точек
собственными транспортными единицами различной
грузоподъемности. Выполнение грузоперевозок контролируется по
товарно-транспортным накладным. Необходимо вести учет объема
перевозок по торговым точкам, водителям и транспортным
средствам, контролировать своевременность доставки, рассчитывать
суммарный объем и стоимость перевозки
----------------------------------------------------------------------------------------------------------------

Требования к ПО и утилиты:
----------------------------------------------------------------------------------------------------------------
- PostreSQL, Python, JS, Django, CSS, HTML
----------------------------------------------------------------------------------------------------------------

Задача:
----------------------------------------------------------------------------------------------------------------
- Разработать БД и удобный UI для CRUD операций
----------------------------------------------------------------------------------------------------------------

Установка:
----------------------------------------------------------------------------------------------------------------
-	Склонировать проект
-	Создать виртуальное окружение и установить зависимости командой pip install -r req.txt
-	Создать файл .env в корне проекта и заполнить константы указанные в файле example.env (если не указывать константы для базы данных, то они установятся по дефолту)
-	Если возникнут проблемы с базой данной Postgres, то Django автоматически подключит sqlite3
-	Создать и применить миграции командами (python manage.py makemigrations) (python manage.py migrate)
-	Создайте суперпользователя командой python manage.py createsuperuser
-	API готов к использованию!
- Папку www разместить на любом удобном хостинге поддерживающим необходимые зависимости (или поднять локальный)
- Прописать пути к API
- Проект развернут
----------------------------------------------------------------------------------------------------------------
Навигация:

----------------------------------------------------------------------------------------------------------------
-	По адресу 127.0.0.1:8000/api/ открывается автодокументация
-	По адресу 127.0.0.1:8000/admin открывается окно авторизации в админ-панель
----------------------------------------------------------------------------------------------------------------
