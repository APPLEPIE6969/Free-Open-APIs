export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  count: number;
}

export interface API {
  id: string;
  name: string;
  description: string;
  categorySlug: string;
  link: string;
  tags: string[];
  icon: string;
  featured?: boolean;
}

export const categories: Category[] = [
  { id: "1", name: "Animals", slug: "animals", icon: "pets", count: 24, description: "Dogs, cats, fish..." },
  { id: "2", name: "Development", slug: "development", icon: "code", count: 32, description: "Tools, testing, CI..." },
  { id: "3", name: "Games", slug: "games", icon: "sports_esports", count: 18, description: "Scores, items, mods..." },
  { id: "4", name: "Music", slug: "music", icon: "music_note", count: 15, description: "Lyrics, songs, tabs..." },
  { id: "5", name: "Science", slug: "science", icon: "science", count: 14, description: "Math, physics, space..." },
  { id: "6", name: "Weather", slug: "weather", icon: "cloud", count: 22, description: "Forecasts, alerts..." },
  { id: "7", name: "Crypto", slug: "crypto", icon: "currency_bitcoin", count: 42, description: "Coins, exchanges..." },
  { id: "8", name: "Security", slug: "security", icon: "security", count: 8, description: "InfoSec, checks..." },
];

export const apis: API[] = [
  // Animals
  {
    id: "cat-facts",
    name: "Cat Facts",
    description: "Daily cat facts for the feline enthusiast. Simple, reliable, and full of meows.",
    categorySlug: "animals",
    link: "https://catfact.ninja/",
    tags: ["JSON", "Fun"],
    icon: "pets",
    featured: true,
  },
  {
    id: "dog-api",
    name: "Dog API",
    description: "The internet's biggest collection of open source dog pictures.",
    categorySlug: "animals",
    link: "https://dog.ceo/dog-api/",
    tags: ["REST", "Fun"],
    icon: "pets",
  },
  {
    id: "placebear",
    name: "PlaceBear",
    description: "A placeholder service for pictures of bears.",
    categorySlug: "animals",
    link: "https://placebear.com/",
    tags: ["Images", "Fun"],
    icon: "pets",
  },

  // Development
  {
    id: "jsonplaceholder",
    name: "JSONPlaceholder",
    description: "Free fake API for testing and prototyping. Powered by JSON Server + LowDB.",
    categorySlug: "development",
    link: "https://jsonplaceholder.typicode.com/",
    tags: ["REST", "Mock"],
    icon: "data_object",
    featured: true,
  },
  {
    id: "reqres",
    name: "ReqRes",
    description: "A hosted REST-API ready to respond to your AJAX requests.",
    categorySlug: "development",
    link: "https://reqres.in/",
    tags: ["REST", "Mock"],
    icon: "code",
  },
  {
    id: "github-api",
    name: "GitHub API",
    description: "The world's leading software development platform.",
    categorySlug: "development",
    link: "https://docs.github.com/en/rest",
    tags: ["REST", "Auth"],
    icon: "code",
  },

  // Games
  {
    id: "pokeapi",
    name: "PokéAPI",
    description: "All the Pokémon data you'll ever need in one place.",
    categorySlug: "games",
    link: "https://pokeapi.co/",
    tags: ["REST", "No Auth"],
    icon: "capture",
    featured: true,
  },
  {
    id: "rawg",
    name: "RAWG",
    description: "The largest open video game database.",
    categorySlug: "games",
    link: "https://rawg.io/apidocs",
    tags: ["REST", "Auth"],
    icon: "sports_esports",
  },
  {
    id: "fortnite-api",
    name: "Fortnite API",
    description: "Fortnite stats, news, store, and more.",
    categorySlug: "games",
    link: "https://fortniteapi.io/",
    tags: ["REST", "Auth"],
    icon: "sports_esports",
  },

  // Music
  {
    id: "spotify",
    name: "Spotify",
    description: "Get metadata about artists, albums, and tracks.",
    categorySlug: "music",
    link: "https://developer.spotify.com/documentation/web-api/",
    tags: ["REST", "Auth"],
    icon: "music_note",
  },
  {
    id: "audius",
    name: "Audius",
    description: "A decentralized music streaming protocol.",
    categorySlug: "music",
    link: "https://audius.org/api",
    tags: ["REST", "No Auth"],
    icon: "music_note",
  },
  {
    id: "musixmatch",
    name: "Musixmatch",
    description: "Lyrics, translations, and music metadata.",
    categorySlug: "music",
    link: "https://developer.musixmatch.com/",
    tags: ["REST", "Auth"],
    icon: "music_note",
  },

  // Science
  {
    id: "nasa",
    name: "NASA API",
    description: "Access NASA data, including imagery, Mars weather, and more.",
    categorySlug: "science",
    link: "https://api.nasa.gov/",
    tags: ["REST", "Auth"],
    icon: "science",
  },
  {
    id: "spacex",
    name: "SpaceX API",
    description: "Open Source REST API for rocket, core, capsule, pad, and launch data.",
    categorySlug: "science",
    link: "https://github.com/r-spacex/SpaceX-API",
    tags: ["REST", "No Auth"],
    icon: "science",
  },
  {
    id: "numbers-api",
    name: "Numbers API",
    description: "An API for interesting facts about numbers.",
    categorySlug: "science",
    link: "http://numbersapi.com/",
    tags: ["Text", "No Auth"],
    icon: "science",
  },

  // Weather
  {
    id: "openweather",
    name: "OpenWeather",
    description: "Weather forecasts, nowcasts and history in a fast and elegant way.",
    categorySlug: "weather",
    link: "https://openweathermap.org/api",
    tags: ["REST", "Auth"],
    icon: "cloud",
  },
  {
    id: "weatherapi",
    name: "WeatherAPI",
    description: "Realtime weather, future weather, astronomy, and more.",
    categorySlug: "weather",
    link: "https://www.weatherapi.com/",
    tags: ["REST", "Auth"],
    icon: "cloud",
  },
  {
    id: "wttr",
    name: "wttr.in",
    description: "The right way to check the weather.",
    categorySlug: "weather",
    link: "https://wttr.in/:help",
    tags: ["Text", "No Auth"],
    icon: "cloud",
  },

  // Crypto
  {
    id: "coingecko",
    name: "CoinGecko",
    description: "Cryptocurrency data such as price, market cap, and trading volume.",
    categorySlug: "crypto",
    link: "https://www.coingecko.com/en/api",
    tags: ["REST", "No Auth"],
    icon: "currency_bitcoin",
  },
  {
    id: "binance",
    name: "Binance",
    description: "Official API for the Binance cryptocurrency exchange.",
    categorySlug: "crypto",
    link: "https://binance-docs.github.io/apidocs/",
    tags: ["REST", "Auth"],
    icon: "currency_bitcoin",
  },
  {
    id: "coinmarketcap",
    name: "CoinMarketCap",
    description: "Cryptocurrency market cap rankings, charts, and more.",
    categorySlug: "crypto",
    link: "https://coinmarketcap.com/api/",
    tags: ["REST", "Auth"],
    icon: "currency_bitcoin",
  },

  // Security
  {
    id: "haveibeenpwned",
    name: "HaveIBeenPwned",
    description: "Check if you have an account that has been compromised in a data breach.",
    categorySlug: "security",
    link: "https://haveibeenpwned.com/API/v3",
    tags: ["REST", "Auth"],
    icon: "security",
  },
  {
    id: "shodan",
    name: "Shodan",
    description: "The search engine for Internet-connected devices.",
    categorySlug: "security",
    link: "https://developer.shodan.io/",
    tags: ["REST", "Auth"],
    icon: "security",
  },
  {
    id: "virustotal",
    name: "VirusTotal",
    description: "Analyze suspicious files and URLs to detect types of malware.",
    categorySlug: "security",
    link: "https://developers.virustotal.com/",
    tags: ["REST", "Auth"],
    icon: "security",
  },
];
