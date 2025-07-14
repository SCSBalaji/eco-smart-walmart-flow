# SPARKATHON

A modern web application built with React, TypeScript, and Vite for the SPARKATHON hackathon event. Features alerts & analytics pages with an improved UI design.

## 🚀 Live Demo

**Live Application**: [https://sparkathon-xi.vercel.app/](https://sparkathon-xi.vercel.app/)

## 📋 Project Overview

This project showcases a dynamic web application developed for the SPARKATHON hackathon, featuring modern development practices with TypeScript, React, and cutting-edge tooling. The application includes alert systems and analytics functionality with a focus on user experience and performance.

## ✨ Key Features

- **Alerts System**: Real-time alert notifications and management
- **Analytics Dashboard**: Comprehensive data visualization and insights
- **Modern UI/UX**: Clean, responsive interface built with Tailwind CSS
- **TypeScript Support**: Type-safe development with full TypeScript integration
- **Fast Development**: Lightning-fast hot reload with Vite
- **Performance Optimized**: Optimized bundle size and loading times
- **Responsive Design**: Mobile-first approach with cross-device compatibility

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: React Hooks

### Development Tools
- **Linting**: ESLint
- **Code Formatting**: Prettier (via ESLint config)
- **Package Manager**: npm/yarn
- **Version Control**: Git

### Deployment
- **Platform**: Vercel
- **CI/CD**: GitHub Actions (automated deployment)

## 🏗️ Project Structure

```
SPARKATHON/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── pages/            # Application pages
│   ├── styles/           # CSS and styling files
│   ├── utils/            # Helper functions and utilities
│   └── types/            # TypeScript type definitions
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
├── bun.lockb             # Bun lock file
├── components.json       # Shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package-lock.json     # npm lock file
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.app.json     # TypeScript app configuration
├── tsconfig.json         # TypeScript base configuration
├── tsconfig.node.json    # TypeScript Node configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **bun** package manager
- **Git** for version control

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/chaitanya-maddala-236/SPARKATHON.git
   cd SPARKATHON
   ```

2. **Install Dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using bun
   bun install
   ```

3. **Start Development Server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using bun
   bun dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:5173` to view the application

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (if needed):

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=SPARKATHON
```

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.ts`:

```typescript
// Custom configuration for themes, colors, and components
```

### TypeScript

TypeScript configuration is split into multiple files:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js specific settings

### Vite Configuration

Build and development settings in `vite.config.ts`:
- Hot reload configuration
- Build optimizations
- Plugin configurations

## 🎨 UI Components

This project uses Shadcn/ui components configured in `components.json`:
- Consistent design system
- Accessible components
- Customizable themes
- TypeScript support

## 📊 Recent Updates

- ✅ **UI Implementation**: Latest UI changes and improvements
- ✅ **Alerts & Analytics**: Added comprehensive alerts and analytics pages
- ✅ **Tech Stack Migration**: Migrated to Vite + React + Shadcn/ui + TypeScript
- ✅ **Performance Optimization**: Improved loading times and user experience

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the Vite configuration

2. **Environment Variables**
   - Set up any required environment variables in Vercel dashboard

3. **Deploy**
   - Push to main branch for automatic deployment
   - Or deploy manually using Vercel CLI

### Manual Deployment

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview

# Deploy the dist folder to your hosting provider
```

## 🔍 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow TypeScript best practices
   - Ensure code passes linting
   - Add appropriate types
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Code Style Guidelines

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add comments for complex logic

## 🐛 Issues & Bug Reports

If you encounter any issues:

1. Check existing [Issues](https://github.com/chaitanya-maddala-236/SPARKATHON/issues)
2. Create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details

## 📈 Performance

- **Build Tool**: Vite for fast development and optimized builds
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Loading Time**: < 2s first contentful paint
- **TypeScript**: Compile-time error catching for better reliability

## 🔮 Future Enhancements

- [ ] Add unit tests with Vitest
- [ ] Implement progressive web app (PWA) features
- [ ] Add internationalization (i18n)
- [ ] Enhance analytics dashboard with more charts
- [ ] Add dark mode toggle
- [ ] Implement real-time notifications

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chaitanya Maddala**
- GitHub: [@chaitanya-maddala-236](https://github.com/chaitanya-maddala-236)
- Project Repository: [SPARKATHON](https://github.com/chaitanya-maddala-236/SPARKATHON)

## 🙏 Acknowledgments

- SPARKATHON hackathon organizers
- React and TypeScript communities
- Vite and Tailwind CSS teams
- Shadcn/ui for excellent component library
- Open source contributors

---

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check existing documentation
- Review the code comments for implementation details

⭐ **Star this repository if you found it helpful!**
