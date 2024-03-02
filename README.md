# REST API for Hagakure

This is the backend for Hagakure, a project in development.

## Installation

<details>
  <summary><b>Click to expand</b></summary>

  <br>

  **Runtime and dependencies**

  This project currently runs on the Bun 1.0.29 runtime. If you don't have it installed, I advise you just [install the latest version](https://bun.sh/) and it should work.

  With Bun installed, run the following command to install the project's dependencies:
  ```bash
  bun install
  ```
  **Database**

  This project requires a Postgres database.  If you have [Docker](https://www.docker.com/) installed, you can use the provided `docker-compose.yml` file to start and stop a DB container by running these commands:
  ```bash
  bun run db:up

  bun run db:down
  ```

  **Environment variables**

  With a Postgres database running, copy the contents of `.env.template` to a new file called `.env` and fill in the environment variables with your database connection string and the desired port you want to run the application on.

  Then run the Drizzle commands to initialize the database schema.

  ```bash
  bun run db:generate

  bun run db:migrate
  ```

  Remember to run migrations after making changes to the database schema:

  ```bash
  bun run db:migrate
  ```

  Always commit the new migration files generated in `./drizzle`!

  **Setup complete and additional scripts**

  With these steps done, you're ready to start the development server:
  ```bash
  bun run dev
  ```
  Happy coding!

  **Additional scripts you should be aware of (WIP):**

  ```bash
  # lint and format the project with Biome
  bun run lint:fix

  ...
  ```
</details>

## Architecture
<details>
  <summary><b>Click to expand</b></summary>

  <br>

  This project implements a few concepts from Clean Architecture (or at least attempts to), represented through this image:

  <center>
    <img src="./docs/ca-diagram.png" width="400">
  </center>

  <br>

  The core of the application are it's domain entities, use cases and business logic. They must not have have any external dependencies. The Domain layer is where application entities and data structures are contained and can be found at `src/core/domain`. The Application layer has business logic that implements the use cases of the system - located in `src/core/application`.

  Outside of this core, the application has an Infrastructure layer, where external dependencies like databases and HTTP servers can be interacted with, and a Presentation layer, where the application can be interacted with - in this case, defining controller classes that handle HTTP requests and responses and invoke the correct use cases.

  As a rule, each layer cannot have dependencies from an outermost layer - instead relying on interfaces and the Dependency Inversion principle.

</details>

## Tech stack
<details>
  <summary><b>Click to expand</b></summary>

  <br>

  This application is built using:
  - [Bun]((https://bun.sh/)) (runtime)
  - [ElysiaJS](https://elysiajs.com/) (API framework)
  - [Drizzle](https://orm.drizzle.team/) (ORM)
  - [TypeScript](https://www.typescriptlang.org/) (type-checking)
  - [Docker](https://www.docker.com/) (database containers in development environment)
</details>