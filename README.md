# 🚀 Personal Portfolio - Muhammed Adnan K

A modern, responsive portfolio website showcasing my journey as a beginner Python developer learning full-stack development.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design
- **Pure Black Theme** - Modern dark design with blue accents
- **Adaptive Particles** - Auto-detects system dark/light mode
- **Smooth Animations** - 60fps animations throughout
- **Responsive Layout** - Works on all devices

### 🌟 Highlights
- ✅ Dynamic particle background with mouse interaction
- ✅ Auto theme detection (dark/light mode)
- ✅ Interactive tech stack cards
- ✅ Custom social badges with brand colors
- ✅ Modern profile cards
- ✅ Smooth hover effects everywhere

### 🎯 Sections
1. **Hero** - Introduction with social links and stats
2. **About** - Profile cards with developer info
3. **Skills** - Interactive tech stack cards
4. **Projects** - Portfolio showcase
5. **Contact** - Get in touch form

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Vanilla JS for interactions

### Features Implemented
- CSS Grid & Flexbox layouts
- CSS Custom Properties (variables)
- Particle animation system
- Theme detection API
- Font Awesome icons
- Google Fonts (Inter, JetBrains Mono)

## 🎨 Color Palette

```css
/* Primary Colors */
--primary: #3B82F6;      /* Blue */
--secondary: #8B5CF6;    /* Purple */
--accent: #EC4899;       /* Pink */
--success: #10B981;      /* Green */

/* Background */
--bg-body: #000000;      /* Pure Black */
--bg-surface: #0a0a0a;
--bg-card: #0f0f0f;

/* Text */
--text-main: #ffffff;
--text-secondary: #e5e7eb;
--text-muted: #9ca3af;
```

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   └── image.png       # Profile image
├── README.md           # This file
├── THEME_ENGINE.md     # Theme system docs
└── UPGRADE_SUMMARY.md  # Upgrade history
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic understanding of HTML/CSS/JS (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/adnanxpkd/portfolio.git
cd portfolio
```

2. **Open in browser**
```bash
# Using Python
python3 -m http.server 8000

# Or simply open index.html in your browser
```

3. **View the site**
```
http://localhost:8000
```

## 🎯 Customization

### Update Personal Info

**1. Edit HTML (index.html)**
```html
<!-- Update name, title, description -->
<h1>Your Name</h1>
<div class="hero-subtitle">Your Title</div>
<p class="hero-desc">Your description...</p>
```

**2. Update Social Links**
```html
<!-- Change URLs to your profiles -->
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
```

**3. Update Tech Stack**
```html
<!-- Add/remove tech cards -->
<div class="tech-card">
    <img src="icon-url" alt="Tech Name">
    <span class="tech-name">Tech Name</span>
</div>
```

### Change Colors

Edit CSS variables in `style.css`:
```css
:root {
    --primary: #YOUR_COLOR;
    --secondary: #YOUR_COLOR;
    /* ... */
}
```

## 🌟 Key Features Explained

### 1. Dynamic Particle System
- Auto-adapts to system theme
- Mouse interaction & repulsion
- Shooting stars animation
- Particle linking based on distance

### 2. Adaptive Theme
```javascript
// Detects system preference
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches 
    ? "dark" : "light";

// Updates live when system theme changes
window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", e => {
        theme = e.matches ? "dark" : "light";
    });
```

### 3. Interactive Cards
- Hover lift effects
- Gradient overlays
- Icon animations
- Smooth transitions

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

### Mobile Features
- Hamburger menu
- Stacked layouts
- Touch-friendly buttons
- Optimized spacing

## 🎨 Animation Details

### Particle Background
- **Count**: 90 particles
- **FPS**: 60fps
- **Features**: Mouse repulsion, linking, glow effects

### Card Animations
- **Fade-in**: Staggered (0.1s - 0.45s delays)
- **Hover lift**: 4-8px translateY
- **Transitions**: 0.3s cubic-bezier easing

## 🔧 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📊 Performance

- **Load Time**: < 2 seconds
- **FPS**: Consistent 60fps
- **Lighthouse Score**: 95+
- **Accessibility**: WCAG compliant

## 🤝 Contributing

While this is a personal portfolio, suggestions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muhammed Adnan K**
- Location: Kerala, India 🇮🇳
- Role: Beginner Python Developer
- Goal: Becoming a Full-Stack Engineer

### Connect with me:
- 🔗 LinkedIn: [adnanxpkd](https://linkedin.com/in/adnanxpkd)
- 💬 Telegram: [@adnanxpkd](https://t.me/adnanxpkd)
- 📧 Email: adnanxpkd@gmail.com
- 📷 Instagram: [@adnanxpkd](https://instagram.com/adnanxpkd)
- 🐙 GitHub: [@adnanxpkd](https://github.com/adnanxpkd)

## 🙏 Acknowledgments

- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter, JetBrains Mono)
- **Devicons** - Technology icons
- **Inspiration** - Modern portfolio designs

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form backend
- [ ] Add project case studies
- [ ] Create resume download feature
- [ ] Add testimonials section
- [ ] Implement manual theme toggle
- [ ] Add more interactive animations

## 🐛 Known Issues

None at the moment! 🎉

## 📸 Screenshots

### Desktop View
![Desktop](https://via.placeholder.com/800x400?text=Desktop+View)

### Mobile View
![Mobile](https://via.placeholder.com/400x800?text=Mobile+View)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Built with ❤️ by Muhammed Adnan K**

![Visitor Count](https://komarev.com/ghpvc/?username=adnanxpkd&label=Portfolio%20Views&color=3B82F6&style=for-the-badge)

</div>
