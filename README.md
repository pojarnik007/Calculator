<h1 align="center">Hi there, I'm <a target="_blank">Maxim</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Calculator task js</h3>
<h3>Задание</h3>
<hr>
<a href="https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?pli=1&tab=t.0#heading=h.5dt3hghpa22f">Ссылка на задание.</a>
<br>
<h3>Сайт с калькулятором</h3>
<hr>
<a href="https://pojarnik.page.gd/?i=1">Ссылка на сайт.</a>

<h3>Инструкция по запуску</h3>
<hr>
Скачать и распаковать zip архив репозитория. <br>В команодной строке перейти в папку проекта с помощью 'cd ..' и прописать одну из команд:
<br>
<h4 align="center">npm run start</h4> <br>   (запуск дев сервера приложения. Сразу откроется окно браузера с портом 5000. Можно редактировать код приложения и он будет динамически его обновлять в браузере)
<br>
<h4 align="center">npm run build:prod</h4>
<br>
<h4 align="center">npm run build:dev</h4>
<br>
(Эти две команды соберут приложение в папку build. Там будет всего два файла, один .html и один .js . Если запустить dev, в файлах будет читаемый но не оптимизированный код, при запуске prod, будет максимально сжатый и оптимизированный код. Это и будет финальное приложение)

<h3>Стек ресурсов</h3>
<hr>
Калькулятор на чистом JavaScript с использованием webpack конфига для оптимизированного кода в production.<br> Насторен Eslint и prettier.<br> Настроен pre-commit-hook.<br> Husky для автоматического запуска проверки и исправления ошибок при выгрузке в git.<br> Также выполнен запуск в прод на бесплатном хостинге.

<h3>Скриншоты</h3>
 <hr>
<div display="flex" align="center">
<img src="/screenshots/1.png" alt="screen" width="300px">
<img src="/screenshots/3.png" alt="screen2" width="295px">
</div>
<br>
<br>

<h3>Реализованные функции</h3>
<hr>
Реаоизованы функции всех кнопок, которые видны на скриншотах. <br> Также реализован процент от числа, например: если вбивать 4-20 и на 20 поставить процент, то калькулятор возьмёт 20% от 4 и это будет второе число.<br> Реализована смена тем калькулятора. При нажатии на кнопку выбора схемы, выезжает меню. На устройствах с широким экраном влево, с узким вверх.
