# CineSeek - Movie Discovery App

## API Overview
CineSeek uses the MoviesDatabase API to fetch and display movie data. The API provides endpoints for searching, filtering, and retrieving detailed information about movies, including support for filtering by year and genre, and paginated results.

## Version
v1 (see MoviesDatabase API documentation for the latest version)

## Available Endpoints
- `/titles`: Fetches a list of movies. Supports filtering by year, genre, and pagination.
- `/titles/{id}`: Fetches details for a specific movie by ID.
- `/genres`: Lists available genres.
- `/years`: Lists available years for movies.

## Request and Response Format
- **Request:**
	- Method: `GET` or `POST` (for server-side proxy)
	- Headers: Include API key in headers
	- Query parameters for filtering (e.g., `year`, `genre`, `page`)
- **Response:**
	- JSON object with `results` array containing movie objects
	- Example:
		```json
		{
			"results": [
				{
					"id": "tt1234567",
					"titleText": { "text": "Movie Title" },
					"primaryImage": { "url": "https://..." },
					"releaseYear": { "year": "2024" }
				}
			]
		}
		```

## Authentication
- API key authentication via the `x-rapidapi-key` header
- Store your API key in the `.env.local` file and access it server-side only

## Error Handling
- Common errors include 401 (Unauthorized), 404 (Not Found), and 429 (Rate Limit Exceeded)
- Use try/catch in API routes and check response status codes
- Display user-friendly error messages in the UI

## Usage Limits and Best Practices
- The API enforces rate limits (see provider docs)
- Use pagination to limit request size
- Cache responses client-side where appropriate
- Never expose your API key on the client
- Handle errors gracefully and provide loading states
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
