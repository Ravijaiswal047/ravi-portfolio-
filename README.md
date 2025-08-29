# 🚀 Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring stunning animations, gradient effects, and professional design.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations and hover effects throughout
- **Developer Branding**: Custom `<RJ/>` logo with coding-themed styling
- **Contact Form**: Integrated EmailJS for functional contact form
- **Glass Morphism**: Modern glass-effect styling on components
- **Performance**: Built with Vite for fast development and optimized builds

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom CSS with modern features (gradients, backdrop-filter, animations)
- **EmailJS** - Contact form functionality
- **ESLint** - Code linting and quality

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── experience.css
│   │   ├── services.css
│   │   ├── portfolio.css
│   │   ├── contact.css
│   │   └── footer.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Create EmailJS account** at [emailjs.com](https://emailjs.com)
2. **Set up email service** and template
3. **Add your credentials** to the Contact component:
   ```javascript
   // In src/components/Contact.jsx
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

## 🎨 Customization

### Colors
Update CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary-color: #6366f1;
  --accent-color: #06b6d4;
  --text-primary: #f8fafc;
  /* ... more variables */
}
```

### Content
- **Hero Section**: Edit `src/components/Hero.jsx`
- **About**: Update `src/components/About.jsx`
- **Projects**: Modify projects array in `src/components/Portfolio.jsx`
- **Services**: Update services array in `src/components/Services.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Breakdown

### Navigation
- Smooth scrolling between sections
- Active section highlighting
- Mobile-responsive hamburger menu
- Animated gradient logo with developer styling

### Animations
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Gradient animations
- Smooth transitions throughout

### Styling
- CSS Grid and Flexbox layouts
- Custom gradient backgrounds
- Glass morphism effects
- Professional shadows and borders

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Feel free to reach out through the contact form on the website or connect with me on social media.

---

Built with ❤️ using React and Vite
