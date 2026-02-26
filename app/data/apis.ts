export interface APIData {
  name: string;
  description: string;
  url?: string;
  tags?: string[];
  status?: "Online" | "Offline" | "Unknown";
}

export interface CategoryData {
  name: string;
  icon: string;
  description: string;
  apis: APIData[];
}

export interface API extends APIData {
  slug: string;
}

export interface Category extends CategoryData {
  slug: string;
  apis: API[];
}

const rawCategories: CategoryData[] = [
  {
    name: "Games & Comics",
    icon: "sports_esports",
    description: "Collection of Video Games, Comics, Anime & Pop Culture APIs",
    apis: [
      {
        name: "Age of Empires II",
        description: "Get information about Age of Empires II resources and units.",
        url: "https://age-of-empires-2-api.herokuapp.com/api/v1/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "PokéAPI",
        description: "The gold standard of public APIs. Get data on Pokémon, moves, abilities, types, and egg groups.",
        url: "https://pokeapi.co/api/v2/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "OpenDota",
        description: "Dota 2 data, matches, and player statistics. Requires no key for basic usage.",
        url: "https://api.opendota.com/api/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "Marvel API",
        description: "Access data about Marvel's vast library of comics. (gateway.marvel.com/v1/public/)",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "Jikan (MyAnimeList)",
        description: "Unofficial MyAnimeList API. Search for anime, manga, characters, and people.",
        url: "https://api.jikan.moe/v4/",
        tags: ["No Auth"],
        status: "Online",
      },
    ],
  },
  {
    name: "Development & Tools",
    icon: "code",
    description: "Collection of Development & Tools APIs",
    apis: [
      {
        name: "JSON Utils",
        description: "Send any JSON payload to this API to validate, format, or minify it.",
        url: "https://emptychair.dev/api/json-utils",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "Timestamp Converter",
        description: "Parse and format UNIX timestamps into human-readable strings, or calculate time differences.",
        url: "https://emptychair.dev/api/time",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "Text Transformer",
        description: "Change casing  or get word counts mathematically. (emptychair.dev/api/text-transform)",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "Lorem Ipsum Generator",
        description: "Generate dummy placeholder text by the word, sentence, or paragraph.",
        url: "https://emptychair.dev/api/lorem",
        tags: ["No Auth"],
        status: "Online",
      },
    ],
  },
  {
    name: "Sci-Fi & Fantasy Universes",
    icon: "rocket_launch",
    description: "Collection of Sci-Fi & Fantasy Universes APIs",
    apis: [
      {
        name: "Ice and Fire API",
        description: "Quantified and structured data from the Game of Thrones universe . (anapioficeandfire.com/api/)",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "STAPI",
        description: "The ultimate open Star Trek database covering spacecraft, species, episodes, and tech.",
        url: "https://stapi.co/api/v2/rest/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "Final Space API",
        description: "Data covering characters, episodes, and quotes from the animated show.",
        url: "https://finalspaceapi.com/api/v0/",
        tags: ["No Auth"],
        status: "Online",
      },
    ],
  },
  {
    name: "Space & Infrastructure",
    icon: "satellite_alt",
    description: "Collection of Space & Infrastructure APIs",
    apis: [
      {
        name: "NOAA / Weather.gov",
        description: "This is a hidden gem. The official US Government weather API funded by tax dollars. Gives you full radar, forecasts, and current conditions completely free.",
        url: "https://api.weather.gov",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "DigitalOcean Status API",
        description: "Real-time access to the uptime, downtime, and operational status of DO's cloud infrastructure. Great for building status dashboards.",
        url: "https://status.digitalocean.com/api/v2/summary.json",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "TheSpaceDevs",
        description: "Real-time data about rocket launches, crewed spaceflights, and space agencies . (ll.thespacedevs.com/2.2.0/)",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "APIs.guru",
        description: "The \"Wikipedia for Web APIs.\" This is a literal open directory of OpenAPI specifications.",
        url: "https://api.apis.guru/v2/list.json",
        tags: ["No Auth"],
        status: "Online",
      },
    ],
  },
  {
    name: "Advanced Finance & On-Chain Crypto",
    icon: "token",
    description: "Collection of Advanced Finance & On-Chain Crypto APIs",
    apis: [
      {
        name: "DEX Screener",
        description: "Real-time blockchain screener, liquidity pool data, and decentralized exchange volume.",
        url: "https://api.dexscreener.com/latest/dex/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "GeckoTerminal",
        description: "Deep on-chain crypto and DeFi data straight from blockchain networks.",
        url: "https://api.geckoterminal.com/api/v2/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "CoinMap",
        description: "Find the exact physical GPS coordinates of cryptocurrency ATMs globally.",
        url: "https://coinmap.org/api/v1/venues/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "Kraken Public Market Data",
        description: "Fetch recent crypto trades, order books, and asset pairs straight from the Kraken exchange without logging in.",
        url: "https://api.kraken.com/0/public/",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "NBP Web API",
        description: "The National Bank of Poland's open API for historic and current currency exchange rates and gold prices.",
        url: "https://api.nbp.pl/api/",
        tags: ["No Auth"],
        status: "Online",
      },
    ],
  },
  {
    name: "Knowledge & Language",
    icon: "school",
    description: "Collection of Knowledge & Language APIs",
    apis: [
      {
        name: "Quote Garden",
        description: "A fast, heavily categorized database of over 7,500 quotes . (quote-garden.onrender.com/api/v3/quotes)",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "Ceska Televize",
        description: "Program data and scheduling from Czech television networks.",
        url: "https://api.ceskatelevize.cz",
        tags: ["No Auth"],
        status: "Online",
      },
      {
        name: "The Rosary API",
        description: "Structured JSON data for Rosary prayers and mysteries.",
        url: "https://the-rosary-api.vercel.app",
        tags: ["No Auth"],
        status: "Online",
      },
    ],
  },
  {
    name: "Artificial Intelligence & LLMs",
    icon: "psychology",
    description: "Collection of Artificial Intelligence & LLMs APIs",
    apis: [
      {
        name: "Google Gemini API",
        description: "Google gives you a massive free tier for their AI models  through Google AI Studio. Perfect for building chatbots or text-analysis tools.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "Groq",
        description: "Lightning-fast AI inference. They offer a highly generous free tier for developers to run models like Llama 3 and Mixtral.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "Hugging Face API",
        description: "Access thousands of open-source AI models for NLP and image tasks. You just need to create an account to get a free read token.",
        tags: ["API Key"],
        status: "Online",
      },
    ],
  },
  {
    name: "Maps & Geocoding",
    icon: "map",
    description: "Collection of Maps & Geocoding APIs",
    apis: [
      {
        name: "Mapbox",
        description: "The absolute best alternative to Google Maps. Your free API key gives you 50,000 free map loads a month, which is enough to run a moderately successful production app for free.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "Positionstack",
        description: "Forward and reverse geocoding . The free key gives you 25,000 requests per month.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "TomTom API",
        description: "Excellent routing, traffic, and map display data with a generous free tier for registered developers.",
        tags: ["API Key"],
        status: "Online",
      },
    ],
  },
  {
    name: "Weather & Climate",
    icon: "thunderstorm",
    description: "Collection of Weather & Climate APIs",
    apis: [
      {
        name: "WeatherAPI",
        description: "One of the most robust weather services available. Signing up gets you a key that allows for 1,000,000 free calls per month for real-time and forecasted weather.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "OpenWeatherMap",
        description: "Their free tier is legendary in the dev community. A quick signup gives you a key for 1,000 API calls per day for global weather data.",
        tags: ["API Key"],
        status: "Online",
      },
    ],
  },
  {
    name: "Media & News",
    icon: "newspaper",
    description: "Collection of Media & News APIs",
    apis: [
      {
        name: "TMDB (The Movie Database)",
        description: "If you are building a movie app, this is the gold standard. Create an account, register your app, and they hand you a key with practically unlimited access to their massive movie/TV database.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "NewsAPI",
        description: "Search worldwide news articles and breaking headlines. It\u2019s completely free for development environments once you register for a key.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "Unsplash API",
        description: "Access millions of high-resolution, royalty-free images. Registering for a key gives you a generous limit of 50 requests per hour to pull professional photography into your UI.",
        tags: ["API Key"],
        status: "Online",
      },
    ],
  },
  {
    name: "Finance & Infrastructure",
    icon: "credit_card",
    description: "Collection of Finance & Infrastructure APIs",
    apis: [
      {
        name: "Stripe",
        description: "The king of payments. While you only pay when you process real money, creating an account gives you free \"Test Mode\" API keys. You can build and test an entire enterprise-grade checkout flow without spending a dime.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "Alpha Vantage",
        description: "Real-time stock, ETF, and forex data. You need to claim a free API key on their site, which gives you 25 API calls per day for deep financial data.",
        tags: ["API Key"],
        status: "Online",
      },
      {
        name: "Supabase",
        description: "An open-source Firebase alternative. Creating an account gives you an API key for a fully functional, free-tier Postgres database, authentication, and edge functions.",
        tags: ["API Key"],
        status: "Online",
      },
    ],
  },
];

export const categories: Category[] = rawCategories.map((category) => ({
  ...category,
  slug: category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  apis: category.apis.map((api) => ({
    ...api,
    slug: api.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
  })),
}));
