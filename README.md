# Simple App

A modern, production-ready React application built with TypeScript, Vite, React Router DOM, and Tailwind CSS.

## 🚀 Features

- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and optimized production builds
- **React Router DOM** for client-side routing
- **Tailwind CSS** for modern, responsive styling
- **Production-ready** configuration for Azure App Services

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## 🛠️ Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## 💻 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

## 👀 Preview

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Pages

The application includes three main pages:

1. **Home** (`/`) - Welcome page with feature highlights
2. **About** (`/about`) - Information about the tech stack
3. **Contact** (`/contact`) - Contact form with client-side validation

## 🚢 Deployment to Azure App Services

### Method 1: Using Azure CLI

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy using Azure CLI:
   ```bash
   az webapp up --name your-app-name --resource-group your-resource-group --location eastus --html --src-path ./dist
   ```

### Method 2: Using GitHub Actions

1. Push your code to GitHub

2. In Azure Portal, go to your App Service

3. Navigate to "Deployment Center"

4. Select "GitHub" as the source

5. Configure the repository and branch

6. Azure will automatically create a GitHub Actions workflow

### Method 3: Using VS Code Azure Extension

1. Install the "Azure App Service" extension in VS Code

2. Build the application:
   ```bash
   npm run build
   ```

3. Right-click on the `dist` folder

4. Select "Deploy to Web App"

5. Follow the prompts to select/create an App Service

### Method 4: Manual Deployment via FTP/FTPS

1. Build the application:
   ```bash
   npm run build
   ```

2. In Azure Portal, go to your App Service

3. Navigate to "Deployment Center" → "FTPS credentials"

4. Upload the contents of the `dist` folder to `/site/wwwroot`

## ⚙️ Azure Configuration

The project includes:

- **web.config** - Ensures proper routing with IIS on Azure App Services
- **staticwebapp.config.json** - Configuration for Azure Static Web Apps (if using)

These files ensure that client-side routing works correctly in production.

## 📦 Project Structure

```
DE-SimpleApp/
├── public/
│   └── web.config          # Azure App Services routing configuration
├── src/
│   ├── components/
│   │   └── Layout.tsx      # Shared layout with navigation
│   ├── pages/
│   │   ├── Home.tsx        # Home page
│   │   ├── About.tsx       # About page
│   │   └── Contact.tsx     # Contact page
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Tailwind CSS imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration

```

## 🔧 Configuration Files

- **vite.config.ts** - Vite build and development server configuration
- **tailwind.config.js** - Tailwind CSS customization
- **tsconfig.json** - TypeScript compiler options
- **postcss.config.js** - PostCSS plugins configuration

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🛡️ Production Optimizations

- TypeScript type checking during build
- CSS minification and optimization
- JavaScript minification with esbuild
- Asset optimization and compression
- Proper routing configuration for SPA deployment

## 📄 License

This project is open source and available under the MIT License.
