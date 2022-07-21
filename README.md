# Shopping List

This project simply adds your shopping item and keeps tracks of it on the priority basis.

---

## Tech Stack

<!-- **Client:** React, Redux, TailwindCSS -->

**Server:** Node, Express, MongoDB, Mongoose

---

## API Reference

#### Get all shopping list items

```http
  GET /api/lists
```

#### Create new shopping list item

```http
  POST /api/lists
```

#### Get specific shopping list item

```http
  GET /api/lists/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete specific shopping list item

```http
  DELETE /api/lists/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update specific shopping list item

```http
  PATCH /api/lists/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

---

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

---

## Run Locally

Clone the project

```bash
  git clone https://github.com/nikhiljerry29/shopping-list.git
```

Go to the project directory

```bash
  cd shopping-list
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

---

## Authors

-   [@nikhiljerry29](https://github.com/nikhiljerry29)
