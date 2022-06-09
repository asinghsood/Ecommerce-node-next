# Cartify - Ecommerce web app


### Front-End Application
Front-end APP - Built using `NextJS` react app, used NextJS for:

- Routing 
- 	Single page Application (SPA)
-	Code-splitting – Chunking with `next/dynamic` to spit code into chunks
-	Image Optimization – lazy loading with `next/image`.  It includes a variety of built-in performance optimizations 
 
- `Typescript` is used for type check

### Back-End Application

NodeJs API’s - `server-ts` app
Backend App - Built using `NodeJS` with `Express` as web application framework. Also, `cors`  node js package is used to enable CORS for accessing api from frontend application’s localhost origin. `Typescript` for type check.


# Setup

-	Unzip folder `ecommerce-nodejs-nextjs.zip`
-	Open terminal on `ecommerce-nodejs-nextjs` directory.
-	### Backend NodeJS App `server-ts` 
    ```sh
    $ cd server-ts/
    ```
    Install packages
    ```sh
    $ yarn
    ```
    Run local backend server from `server-ts` folder
    ```sh
    $ yarn dev
    ```
    	
    your server will run on http://localhost:3003/

    ### Front End NodeJS App `ecommerce`

    - Open terminal on “ecommerce-nodejs-nextjs” directory.
    ```sh
    $ cd ecommerce/
    ```
    Install packages
    ```sh
    $ yarn
    ```
    Run local front end server from `ecommerce` folder

    ```sh
    $ yarn dev
    ```

	your react app will run on http://localhost:3000/


### Commands Used in To run application

| CLI Command        |                                    Description                                    |
| ------------------ | :-------------------------------------------------------------------------------: |
| `yarn`             | Same as `yarn install`, install dependencies and updates across packages for Frontend from  `ecommerce` folder and for backeend from `server-ts` folder|
| `yarn dev`         |  Starts dev server (`Nextjs`)             for Frontend from `ecommerce` folder and for backend (`Nodejs`) from `server-ts` folder            |
| `yarn build`       |              Compiles the packages, generates and bundles fron end app app. Run Frontend from `ecommerce` folder           |                  |
| `yarn test`        |  Runs Jest unit test suites with React testing library. Run Frontend from `ecommerce`                       |

