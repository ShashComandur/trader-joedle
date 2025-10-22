# Trader Joedle 🛒

A daily price-guessing game inspired by Wordle, featuring real Trader Joe's products!

## About the Game

**Trader Joedle** is a daily puzzle where you try to guess the price of a featured Trader Joe's product in 6 attempts or fewer. Each guess provides a hint to guide you toward the correct price:

- 🟢 **Green circle**: You're within 5% of the actual price - you win!
- 🟡 **Yellow circle + arrow**: You're warm (within 25%) but need to go higher ↑ or lower ↓
- 🔴 **Red circle + arrow**: You're cold but getting feedback

A new Trader Joedle is available every day at 12 AM EST. Share your score when you finish!

## Features

- Daily puzzle with real Trader Joe's products
- Visual product information with images and characteristics
- Smart hint system with emoji feedback
- Shareable results
- Responsive design optimized for mobile and desktop
- Built with accessibility in mind

## Tech Stack

- **Frontend**: SvelteKit with TypeScript, inspired by the Trader Joe's brandkit
- **Styling**: Tailwind CSS with custom fonts
- **Deployment**: Vercel
- **Data**: Ethically sourced from Trader Joe's product API

## Development

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ShashComandur/trader-joedle.git
cd trader-joedle
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run test` - Run all tests
- `npm run test:unit` - Run unit tests
- `npm run test:integration` - Run Playwright integration tests
- `npm run check` - Type checking with Svelte
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## Building for Production

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Contributing

Found a bug or have a suggestion? Please [open an issue](https://github.com/ShashComandur/trader-joedle/issues) or send an email to shashank.comandur@gmail.com.

## Acknowledgments

Special thanks to:
- [Wordle](https://www.nytimes.com/games/wordle/index.html) for the original word-guessing inspiration
- [Costcodle](https://costcodle.com/) by [@Kerm](https://github.com/KermWasTaken) for the price-guessing concept
- Trader Joe's for their amazing products and accessible product data

## License

Created by [Shashank Comandur](http://shashcomandur.com/). All source code is available on [GitHub](https://github.com/ShashComandur/trader-joedle).
