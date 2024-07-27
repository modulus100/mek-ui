A stunning and functional retractable sidebar for Next.js built on top of [shadcn/ui](https://ui.shadcn.com) complete with desktop and mobile responsiveness.

## Client types generation

   ```bash
   npx openapi-typescript http://localhost:8080/api/v1/v3/api-docs -o ./src/client/schema.d.ts
   ```


## Features

- Retractable mini and wide sidebar
- Scrollable sidebar menu
- Sheet menu for mobile
- Grouped menu with labels
- Collapsible submenu
- Extracted menu items list

## Tech/framework used

- Next.js 14
- Shadcn/ui
- Tailwind CSS
- TypeScript
- Zustand

## Starting the project locally

1. Clone the repository

   ```bash
   git clone https://github.com/salimi-my/shadcn-ui-sidebar
   ```

2. Install dependencies

   ```bash
   cd shadcn-ui-sidebar
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

