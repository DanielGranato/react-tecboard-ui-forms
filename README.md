# Tecboard

A tech events hub built with React, Material UI, React Hook Form, Zod, and TanStack Query.

## 📖 About

Tecboard lets users browse tech events (Front-end, Design, Marketing, and more) and register new ones. Events are shown as cards with image, name, date, and theme, and can be explored through pagination or infinite scroll.

The project follows Alura's "React: explorando frameworks e bibliotecas para criação de interfaces e validação de formulários" course, and focuses on the libraries that make a React app production-ready: a component library, schema-based form validation, and server-state management.

## ✨ Features

- List of events as cards (image, name, date, theme)
- Event registration form with schema validation
- Pagination with previous/next controls
- Infinite scroll with a "load more" button
- Events organized by theme (Front-end, Design, Marketing)
- Responsive layout

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **Material UI (MUI)**: component library and responsive layout
- **React Hook Form**: performant form state management
- **Zod**: schema validation with custom error messages
- **TanStack Query**: data fetching, caching, pagination, and infinite queries
- **json-server**: mock REST API
- **ESLint**

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/DanielGranato/react-tecboard-ui-forms.git

# Navigate into the project folder
cd react-tecboard-ui-forms

# Install dependencies
pnpm install
```

### Running locally

The project needs two processes running at the same time: the mock API and the React app.

```bash
# Terminal 1: start the mock API (http://localhost:3000)
pnpm run json-server

# Terminal 2: start the React app (http://localhost:5173)
pnpm run dev
```

### Other scripts

| Script | Description |
| --- | --- |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run lint` | Run ESLint |

## 🌐 API

json-server simulates a REST API, with data stored in `db.json`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/events` | List all events |
| `GET` | `/events?_page=1&_per_page=4` | List events with pagination |
| `POST` | `/events` | Create a new event |

## 🎯 Learning Objectives

This project was built to practice:

- Building interfaces with a component library (MUI)
- Managing forms with React Hook Form
- Validating data with Zod schemas and custom error messages
- Fetching and caching server data with TanStack Query (`useQuery`, `useMutation`)
- Implementing pagination and infinite scroll (`useInfiniteQuery`)

## 📄 License

This project is open source and available under the MIT License.
