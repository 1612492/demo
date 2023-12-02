# Demo

### What I do

- Initialize the codebase for both backend and frontend
- Use Express, PostgreSQL in backend
- Add docker-compose, db migration for backend
- Database has nfts table has foreign key from users table to determine NFT’s owner
- Use Vite, React, TailwindCSS for frontend
- Create reponsive layout from your design
- Get data from server
- Can search, filter by using API
- Can load more data if you need
- Refresh data each 60s

### Improvements/ Missing pieces if I have more time

- Save the search, filler in url params to quick return or sharing purpose
- Add the loading skeleton, error notification, move the filter to sidebar in mobile breakpoint.
- And image optimazer like sharp to have more image sizes, formats
- Add more custom hooks, common components, replace the current Tooltip, Slider (no use libraries)
- Add storybook for built-in components
- Use vitest to test utils and react testing library to test search, filter UI
- Dockerize for prod
- Maybe some devices are not reponsive

## Instruction

### Prerequisites

Create database

```jsx
cd server
docker compose up -d
```

Use migration

```jsx
pnpm migrate:up
```

Go back to root folder

### Dev

```jsx
pnpm dev
```

It will run server and client parallelly

Server: http://localhost:4000

Client: http://localhost:3000

### Production build

```jsx
pnpm build
```

To serve build folders

```jsx
pnpm start
```
