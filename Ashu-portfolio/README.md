# Ashutosh Portfolio

A rebuilt 2026 portfolio using Next.js App Router, React 19, Tailwind CSS 4, Framer Motion, and React Three Fiber.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- Three.js with React Three Fiber and Drei
- TypeScript

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

- `src/app` - app router entry, layout, and global styles
- `src/components` - UI and interactive sections
- `src/data` - portfolio content and structured data
- `public` - static assets and project thumbnails

## Note About Build Output

This project currently uses `.next-app` as the build output directory in `next.config.ts`.
That was kept because an older locked `.next` folder existed in this Windows environment during the rebuild.
If you want, we can switch back to the default `.next` output later.
