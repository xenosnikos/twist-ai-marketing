# AI-Powered Marketing Automation Presentation

An interactive Svelte presentation for pitching AI-powered marketing automation using MCP servers.

## Features

- 🎯 **20 Interactive Slides** - Complete pitch deck with all content from BUSINESS.MD
- 🎨 **Modern Design** - Following Dofinity design guidelines with clean aesthetics
- 🖱️ **Multiple Navigation Options**:
  - Keyboard: Arrow keys (← →) or Spacebar
  - Touch: Swipe left/right on mobile
  - Buttons: Click arrow buttons on sides
  - Dots: Click navigation dots at bottom
- 📊 **Rich Visualizations**:
  - Mermaid.js diagrams for architecture and flows
  - Syntax-highlighted code blocks (Python, YAML)
  - Interactive statistics cards
  - Comparison tables
  - Timeline views
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- ⚡ **Smooth Animations** - Slide transitions and hover effects

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The dev server will start at http://localhost:5173

## Project Structure

```
src/
├── routes/
│   └── +page.svelte           # Main presentation page
├── lib/
│   ├── components/             # Reusable components
│   │   ├── Slide.svelte
│   │   ├── Navigation.svelte
│   │   ├── Card.svelte
│   │   ├── StatCard.svelte
│   │   ├── CodeBlock.svelte
│   │   ├── DiagramWrapper.svelte
│   │   └── TableView.svelte
│   ├── stores/
│   │   └── presentation.ts     # Slide state management
│   ├── data/
│   │   └── slides.ts          # All slide content
│   └── styles/
│       └── global.css         # Global styles
├── static/
│   ├── fonts/                 # Font files
│   └── assets/                # Images and assets
└── app.html                   # HTML template
```

## Slide Content

All slide content is defined in `src/lib/data/slides.ts` with TypeScript interfaces for type safety. The presentation includes:

1. Title Slide
2. Current Challenge
3. The Vision
4. Solution Architecture (Mermaid diagram)
5. Detailed Flow (Sequence diagram)
6. Value Proposition & ROI
7. MCP Server Capabilities (Python code)
8. Implementation Phases
9. Use Case Examples
10. Integration Simplicity (YAML config)
11. Competitive Advantage
12. Risk Mitigation
13. Success Metrics
14. Investment & Timeline
15. Next Steps
16. Technical Architecture (Appendix)
17. Sample Code (Appendix)
18. Why Now?
19. Call to Action
20. Thank You

## Navigation Controls

### Keyboard
- `→` or `Space` - Next slide
- `←` - Previous slide

### Touch/Mobile
- Swipe left - Next slide
- Swipe right - Previous slide

### Mouse
- Click right arrow - Next slide
- Click left arrow - Previous slide
- Click any dot - Go to that slide

## Customization

### Colors
Edit `src/lib/styles/global.css` to change the color scheme:
- Primary background: `#809df1`
- Dark text: `#1a1a1a`
- Cards: `white`

### Fonts
The presentation uses Montserrat font from Google Fonts. Change in `src/app.html`.

### Slide Content
Modify slides in `src/lib/data/slides.ts`:
- Add new slides to the array
- Update existing content
- Change slide types (title, content, diagram, code, table, stats, timeline, cta)

## Technologies Used

- **SvelteKit** - Frontend framework
- **TypeScript** - Type safety
- **Mermaid.js** - Diagrams and flowcharts
- **Highlight.js** - Code syntax highlighting
- **CSS Grid/Flexbox** - Responsive layouts
- **Svelte Transitions** - Smooth animations

## Deployment

### Build

```bash
npm run build
```

The output will be in the `build/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## Performance

- Code splitting by component
- Lazy loading for Mermaid diagrams
- Optimized fonts with preconnect
- Minimal JavaScript bundle
- Fast page transitions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for presentation purposes.

## Credits

- Design inspired by Dofinity presentation style
- Content based on AI-Powered Marketing Automation pitch
- Built with SvelteKit and modern web technologies
