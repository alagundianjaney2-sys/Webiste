# Electric Switchgear Solutions Website

A professional Next.js 15 website with a Siemens-inspired theme, focused on electric switchgear products and solutions. Built with TypeScript and Tailwind CSS featuring the Vidhara company logo.

🌐 **Live Demo**: [View on Vercel](https://your-deployment-url.vercel.app)

## 🎨 Features

- **Siemens-Inspired Design**: Professional teal and gray color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern Components**:
  - Animated hero carousel on homepage
  - Product showcase with hover effects
  - Feature sections with icons
  - Professional footer with contact information
  - Sticky navigation header
- **Four Main Pages**:
  - **Home**: Hero carousel, product showcase, features, and CTA sections
  - **Products**: Detailed product categories (Low, Medium, High Voltage, Distribution)
  - **About**: Company story, statistics, values, mission, and vision
  - **Contact**: Contact information cards, contact form, and map section

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (version 18.17 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

### Installation Steps

1. **Navigate to the project directory**:
   ```powershell
   cd C:\Projects\Website
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Run the development server**:
   ```powershell
   npm run dev
   ```

4. **Open your browser**:
   - Navigate to: `http://localhost:3000`
   - The website should now be running!

### Build for Production

To create an optimized production build:

```powershell
npm run build
npm start
```

## 📁 Project Structure

```
Website/
├── app/                        # Next.js App Router
│   ├── about/                 # About page
│   │   └── page.tsx
│   ├── contact/               # Contact page
│   │   └── page.tsx
│   ├── products/              # Products page
│   │   └── page.tsx
│   ├── layout.tsx             # Root layout with Header & Footer
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles with Tailwind
├── components/                 # Reusable React components
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Footer component
│   ├── Carousel.tsx           # Hero carousel
│   ├── ProductShowcase.tsx    # Product cards grid
│   ├── FeatureSection.tsx     # Features with icons
│   └── CTASection.tsx         # Call-to-action section
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.js             # Next.js configuration
```

## 🎨 Color Palette (Siemens Theme)

- **Primary Teal**: `#009999`
- **Teal Variations**: `#1ab0b0`, `#006b6b`, `#004d4d`
- **Dark Gray**: `#1a1d20`
- **Light Gray**: `#f8f9fa`

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: Arial, Helvetica (Siemens-like)

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## 🌐 Pages Overview

### Home Page
- **Hero Carousel**: Three rotating slides with product highlights
- **Product Showcase**: 4 product categories with features
- **Feature Section**: 4 key benefits with icons
- **CTA Section**: Call-to-action with contact buttons

### Products Page
- **Hero Section**: Page introduction
- **Product Categories**: Detailed information on 4 product types
  - Low Voltage Switchgear (Up to 1kV)
  - Medium Voltage Switchgear (1kV - 36kV)
  - High Voltage Switchgear (Above 36kV)
  - Distribution Boards & Panels
- Each category includes features, applications, and quote request

### About Page
- **Company Story**: Background and history
- **Statistics**: 4 key metrics with icons
- **Core Values**: Innovation, Quality, Safety, Sustainability
- **Mission & Vision**: Company goals and aspirations

### Contact Page
- **Contact Information**: Location, phone, email, hours
- **Contact Form**: Name, email, phone, company, subject, message
- **Map Section**: Placeholder for interactive map

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.ts` to modify the color scheme:
```typescript
colors: {
  siemens: {
    teal: {
      500: '#009999', // Change primary color here
    },
  },
}
```

### Adding New Pages
1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Update navigation links in `components/Header.tsx`

## 📝 Notes

- All TypeScript errors shown in the editor are expected until you run `npm install`
- The website is fully responsive and optimized for all screen sizes
- Images use emoji placeholders - replace with actual product images
- The contact form currently shows an alert - integrate with a backend API for real submissions

## 🤝 Support

For questions or support, please contact the development team.

## 📜 License

This project is proprietary and confidential.

---

**Built with ❤️ using Next.js and Tailwind CSS**
