This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Run JSON server

Run JSON server with the following command

1. Create a new directory "data" under root directory.
2. Create todos.json file and write some data to it like the following:
        {
            "tasks": [
                {
                    "id": 1,
                    "text": "Complete project proposal"
                },
                {
                    "id": 2,
                    "text": "Schedule meeting with stakeholders"
                },
                {
                    "id": 3,
                    "text": "Research market trends"
                },
                {
                    "id": 4,
                    "text": "Prepare presentation slides"
                },
                {
                    "id": 5,
                    "text": "Review project budget"
                }
            ]
         }

3. Write "json-server":"json-server --watch data/todos.json --port 3001" in package.json and under script section.
4. Run "json-server" with the following command:
    pnpm json-server

## Installing Daisyui

npm i -D daisyui@latest

## Installing React-Icons

npm install react-icons --save

## Auto ID generation

Use uuid to generate auto ID generation.

pnpm i uuid
import { v4 as uuidv4 } from 'uuid';


