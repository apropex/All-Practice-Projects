# Next.js + ShadCN UI Practice Project

This project is a practice playground to explore and implement modern UI components using **ShadCN UI** in a **Next.js 15 (App Router)** application with **Tailwind CSS v4** and **React 19**.

## 🔗 Live Demo

[https://radix-ui-and-shad-cn-ui.vercel.app](https://radix-ui-and-shad-cn-ui.vercel.app)

## 📦 GitHub Repository

[https://github.com/pxgacademy/Radix-UI-and-ShadCN-UI](https://github.com/pxgacademy/Radix-UI-and-ShadCN-UI)

---

## 🛠️ Features

This project demonstrates usage of various components from **ShadCN UI**, integrated with **Radix UI** primitives and custom Tailwind styling.

### ✅ ShadCN Components Used

- `Avatar`
- `Badge`
- `Breadcrumb`
- `Button`
- `Calendar`
- `Card`
- `Chart`
- `Checkbox`
- `Collapsible`
- `Dropdown Menu`
- `Form`
- `Hover Card`
- `Input`
- `Label`
- `Popover`
- `Progress`
- `Scroll Area`
- `Select`
- `Separator`
- `Sheet`
- `Sidebar`
- `Skeleton`
- `Table`
- `Tooltip`

---

## 📚 Tech Stack

- **Next.js 15** (App Router with Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- **Lucide React** (Icons)
- **React Hook Form** + Zod (Form validation)
- **Date-FNS** (Date utilities)
- **Recharts** (Charts)
- **Radix UI** (Low-level UI primitives)
- **TanStack Table v8** (Advanced table handling)
- **Patch-package** (for patching issues with dependencies)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pxgacademy/Radix-UI-and-ShadCN-UI.git
cd Radix-UI-and-ShadCN-UI
```

### 2. Install Dependencies

Using `pnpm`:

```bash
pnpm install
```

Or with `npm`:

```bash
npm install
```

Or with `yarn`:

```bash
yarn install
```

### 3. Start Development Server

```bash
pnpm run dev
```

Then open `http://localhost:3000` in your browser.

---

## ⚠️ Deployment Issue Faced

While deploying to **Vercel**, the app initially failed due to `patch-package` being required **after install**. The issue was resolved by adding:

```json
"scripts": {
  "postinstall": "patch-package",
  "prepare": "patch-package"
}
```

This ensures that patched dependencies are applied correctly during the build process on Vercel.

---

## 📄 License

This project is for **educational and practice purposes**. Feel free to explore and learn.

---

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
