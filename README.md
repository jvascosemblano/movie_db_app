# Movie DB React App

Search for movies and get specific details on whichever one you choose.

## Installation & Setup

### Step 1 - Install necessary software:

You will need:

- [Git](http://git-scm.com/downloads)
- [node](https://nodejs.org/)
- [yarn](https://yarnpkg.com/en/docs/install) (Optional. Not Required if you use NPM)

Please install them if you don't have them already.

### Step 2 - Clone the repository:

From the command line, clone the repository:

```sh
$ git clone https://github.com/jvascosemblano/movie_db_app.git
```

### Step 3 - Install dependencies

If you are using yarn run from the root of the repository:

```sh
yarn
```

If you are using npm, run from the root of the repository:

```sh
npm run install
```

### Step 4 - Run the app

Once the dependencies are installed, you can run the app for a lesson:

```sh
cd movie_db_app
yarn start
# or
npm start
```

Your browser should open up to a running app.

## API Documentation

[The Movie Database (TMDB)](https://www.themoviedb.org/) is a community built movie and TV database, which was used in this project.

#### Returns a list of movies based on search term

```http
  GET /search/movie
```

| Parâmetro | Tipo     | Descrição                   |
| :-------- | :------- | :-------------------------- |
| `api_key` | `string` | **Mandatory** - API key     |
| `query`   | `string` | **Mandatory** - Search term |

#### Returns information about a specific movie

```http
  GET /movie/${movie_id}
```

| Parâmetro  | Tipo     | Descrição                                  |
| :--------- | :------- | :----------------------------------------- |
| `api_key`  | `string` | **Mandatory** - API key                    |
| `movie_id` | `string` | **Mandatory** - Unique identifier of movie |

## FAQ

#### Why did you use Create-React-App?

Create-react-app was used purely for simplification in the process of creating this app.
Obviously, there's a lot of unnecessary modules installed that make the app even heavier.

#### Why is the file structure not singular?

What I mean by this is that there's no stylesheet for each component, as it should be.
To make the process easier, since the project is quiet small, I've divided the components into categories and created a style sheet for each.

## Author

- [@jvascosemblano](https://github.com/jvascosemblano)
