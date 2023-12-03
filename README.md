# Basic React project with **Best practices**

## Project Architecture
### The project follows the [FSD](https://feature-sliced.design/docs/get-started/overview) architecture.

* The approach is based on **Business Features** (User, Task, Posts) and **Business Entities** (Registration, Purchase, Add to Cart, Delete User).
* Each higher layer can only use the lower layers (Dependency Inversion).
* Each slice should have a public API (exported through an index file, usually containing components and types).


### Layers used in the project
1. [APP](https://feature-sliced.design/ru/docs/reference/layers#app)

2. [Pages](https://feature-sliced.design/ru/docs/reference/layers#pages)

3. [Widgets](https://feature-sliced.design/ru/docs/reference/layers#widgets)

4. [Features](https://feature-sliced.design/ru/docs/reference/layers#features)

5. [Entities](https://feature-sliced.design/ru/docs/reference/layers#entities)

6. [Shared](https://feature-sliced.design/ru/docs/reference/layers#shared)


### Типовая архитектура проекта

```

├── App                 #   Layer - Application        
│                       #
├── Pages               #   Layer - Pages        
│   ├── {SOME WIDGET}   #       Slice - Page name (Main, About, Post)
│   │    ├── model      #           Segment - Business logic for the page
│   │    ├── lib        #           Segment - Infrastructure logic at the page level (helpers/utils)
│   │    └── ui         #           Segment - UI components related to the page
│   (...)               #           
│                       #           
├── Widgets             #   Layer - Widgets      
│   ├── {SOME WIDGET}   #       Slice - Widget name (Header, Navbar, Sidebar, Footer) 
│   │    ├── model      #           Segment - Business logic for the widget
│   │    ├── lib        #           Segment - Infrastructure logic at the widget level (helpers/utils)
│   │    └── ui         #           Segment - UI components related to the widget
│   (...)               #           
│                       #
├── Features            #   Layer - Features
│   ├── {SOME FEATURE}  #       Slice - Feature name (AuthByPhone, RemoveTask, AddPost)
│   │    ├── model      #           Segment - Business logic for the feature
│   │    ├── lib        #           Segment - Infrastructure logic at the feature level (helpers/utils)
│   │    └── ui         #           Segment - UI components related to the feature
│   (...)               #           
│                       #
├── Entities            #   Layer - Business Entities
│   ├── {SOME ENTITY}   #       Slice - Entity name (User, Task, Post)
│   │    ├── model      #           Segment - Business logic for the business entity
│   │    ├── lib        #           Segment - Infrastructure logic (helpers/utils)
│   │    └── ui         #           Segment - UI components related to the business entity
│   (...)               #           
│                       #
├── Shared              #   Layer - Reusable resources
│   ├── api             #           Segment - API request logic
│   ├── assets          #           Segment - Auxiliary elements (fonts, icons, images, etc.)
│   ├── config          #           Segment - Application configuration
│   ├── lib             #           Segment - Application infrastructure logic
│   └── ui              #           Segment - Application UI kit

```
