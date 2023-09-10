# Basic React project with **Best practices**

## Архитектура проекта
### В проекте используется архитектура [FSD](https://feature-sliced.design/docs/get-started/overview)

* В Основе подхода лежат **Бизнесс фичи** (Пользователь, задача, посты) и **Бизнесс сущности** (Регистрация, Покупка, Добавление в корзину, удаление пользователя)
* Каждый вышележащий слой может использовать только нижележащие слои (Dependensy inversion)
* Каждый слайс должен обладать публичным АПИ (экспорт наружу через index как правило компонент и типы)

### Слои используемые в проекте
1. [APP](https://feature-sliced.design/ru/docs/reference/layers#app)

2. [Pages](https://feature-sliced.design/ru/docs/reference/layers#pages)

3. [Widgets](https://feature-sliced.design/ru/docs/reference/layers#widgets)

4. [Features](https://feature-sliced.design/ru/docs/reference/layers#features)

5. [Entities](https://feature-sliced.design/ru/docs/reference/layers#entities)

6. [Shared](https://feature-sliced.design/ru/docs/reference/layers#shared)


### Типовая архитектура проекта

```
├── App                 #   Layer - Приложение        
│                       #
├── Pages               #   Layer - Страницы        
│   ├── {SOME WIDGET}   #       Slice - Имя страницы (Main, About, Post)
│   │    ├── model      #           Segment - Бизнесс логика к странице
│   │    ├── lib        #           Segment - Инфраструктурная логика в уровне страницы (helpers/utils)
│   │    └── ui         #           Segment - UI компоненты привязанные к странице
│   (...)               #           
│                       #           
├── Widgets             #   Layer - Виджеты      
│   ├── {SOME WIDGET}   #       Slice - Имя виджета (Header, Navbar, Sidebar, Footer) 
│   │    ├── model      #           Segment - Бизнесс логика к виджету
│   │    ├── lib        #           Segment - Инфраструктурная логика в уровне виджета (helpers/utils)
│   │    └── ui         #           Segment - UI компоненты привязанные к виджету
│   (...)               #           
│                       #
├── Features            #   Layer - Фичи
│   ├── {SOME FEATURE}  #       Slice - Имя фичи (AuthByPhone, RemoveTask, AddPost)
│   │    ├── model      #           Segment - Бизнесс логика к фиче
│   │    ├── lib        #           Segment - Инфраструктурная логика в уровне фичи (helpers/utils)
│   │    └── ui         #           Segment - UI компоненты привязанные к фиче
│   (...)               #           
│                       #
├── Entities            #   Layer - Бизнесс сущности
│   ├── {SOME ENTITY}   #       Slice - Наименование сущности (User, Task, Post)
│   │    ├── model      #           Segment - Бизнесс логика к бизнесс сущности
│   │    ├── lib        #           Segment - Инфраструктурная логика (helpers/utils)
│   │    └── ui         #           Segment - UI компоненты привязанные к бизнесс сущности
│   (...)               #           
│                       #
├── Shared              #   Layer - Переиспользуемые ресурсы
│   ├── api             #           Segment - Логика запросов к АПИ
│   ├── assets          #           Segment - Вспомогательные элементы (шрифты, иконки, картинки и т.п.)
│   ├── config          #           Segment - Конфигурация приложения
│   ├── lib             #           Segment - Инфраструктурная логика приложения
│   └── ui              #           Segment - UI kit приложения
```

