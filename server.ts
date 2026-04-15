import express from 'express';
import { createServer as createViteServer } from 'vite';
import geoip from 'geoip-lite';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CACHE_TTL_MS = parseInt(process.env.CACHE_TTL_MS || '3600000', 10);
const OXR_APP_ID = process.env.OXR_APP_ID;

// USD Prices from user
const PRICES_USD: Record<string, { marketing: number; utility: number; auth: number }> = {
  "Австралия": { marketing: 0.1135, utility: 0.0212, auth: 0.0212 },
  "Австрия": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "Азербайджан": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Аргентина": { marketing: 0.0961, utility: 0.0464, auth: 0.0464 },
  "Армения": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Бангладеш": { marketing: 0.1135, utility: 0.0212, auth: 0.0212 },
  "Бельгия": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "Бразилия": { marketing: 0.0972, utility: 0.0134, auth: 0.0134 },
  "Великобритания": { marketing: 0.0825, utility: 0.0396, auth: 0.0396 },
  "Венгрия": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Вьетнам": { marketing: 0.1135, utility: 0.0212, auth: 0.0212 },
  "Германия": { marketing: 0.2104, utility: 0.0963, auth: 0.0963 },
  "Греция": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Грузия": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Дания": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "Египет": { marketing: 0.1001, utility: 0.0079, auth: 0.0079 },
  "Израиль": { marketing: 0.0555, utility: 0.0108, auth: 0.0108 },
  "Индия": { marketing: 0.0196, utility: 0.0041, auth: 0.0041 },
  "Индонезия": { marketing: 0.0644, utility: 0.0447, auth: 0.0447 },
  "Испания": { marketing: 0.0956, utility: 0.0361, auth: 0.0361 },
  "Италия": { marketing: 0.1073, utility: 0.0533, auth: 0.0533 },
  "Казахстан": { marketing: 0.0939, utility: 0.0150, auth: 0.0150 },
  "Канада": { marketing: 0.0398, utility: 0.0076, auth: 0.0076 },
  "Колумбия": { marketing: 0.0207, utility: 0.0031, auth: 0.0031 },
  "Малайзия": { marketing: 0.1331, utility: 0.0258, auth: 0.0258 },
  "Мексика": { marketing: 0.0482, utility: 0.0163, auth: 0.0163 },
  "Нигерия": { marketing: 0.0805, utility: 0.0132, auth: 0.0132 },
  "Нидерланды": { marketing: 0.2459, utility: 0.0877, auth: 0.0877 },
  "Норвегия": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "ОАЭ": { marketing: 0.0779, utility: 0.0287, auth: 0.0287 },
  "Пакистан": { marketing: 0.0739, utility: 0.0189, auth: 0.0189 },
  "Перу": { marketing: 0.1091, utility: 0.0361, auth: 0.0361 },
  "Польша": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Португалия": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "Россия": { marketing: 0.1242, utility: 0.0705, auth: 0.0705 },
  "Румыния": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "США": { marketing: 0.0398, utility: 0.0076, auth: 0.0076 },
  "Саудовская Аравия": { marketing: 0.0782, utility: 0.0201, auth: 0.0201 },
  "Словакия": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Таиланд": { marketing: 0.1135, utility: 0.0212, auth: 0.0212 },
  "Турция": { marketing: 0.0182, utility: 0.0033, auth: 0.0033 },
  "Узбекистан": { marketing: 0.1135, utility: 0.0212, auth: 0.0212 },
  "Украина": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Филиппины": { marketing: 0.1135, utility: 0.0212, auth: 0.0212 },
  "Финляндия": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "Франция": { marketing: 0.1330, utility: 0.0533, auth: 0.0533 },
  "Чехия": { marketing: 0.1331, utility: 0.0382, auth: 0.0382 },
  "Чили": { marketing: 0.1375, utility: 0.0361, auth: 0.0361 },
  "Швейцария": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "Швеция": { marketing: 0.0921, utility: 0.0311, auth: 0.0311 },
  "Южная Африка": { marketing: 0.0595, utility: 0.0148, auth: 0.0148 }
};

const COUNTRY_TO_CURRENCY: Record<string, string> = {
  "Австралия": "AUD", "Австрия": "EUR", "Азербайджан": "AZN", "Аргентина": "ARS",
  "Армения": "AMD", "Бангладеш": "BDT", "Бельгия": "EUR", "Бразилия": "BRL",
  "Великобритания": "GBP", "Венгрия": "HUF", "Вьетнам": "VND", "Германия": "EUR",
  "Греция": "EUR", "Грузия": "GEL", "Дания": "DKK", "Египет": "EGP",
  "Израиль": "ILS", "Индия": "INR", "Индонезия": "IDR", "Испания": "EUR",
  "Италия": "EUR", "Казахстан": "KZT", "Канада": "CAD", "Колумбия": "COP",
  "Малайзия": "MYR", "Мексика": "MXN", "Нигерия": "NGN", "Нидерланды": "EUR",
  "Норвегия": "NOK", "ОАЭ": "AED", "Пакистан": "PKR", "Перу": "PEN",
  "Польша": "PLN", "Португалия": "EUR", "Россия": "RUB", "Румыния": "RON",
  "США": "USD", "Саудовская Аравия": "SAR", "Словакия": "EUR", "Таиланд": "THB",
  "Турция": "TRY", "Узбекистан": "UZS", "Украина": "UAH", "Филиппины": "PHP",
  "Финляндия": "EUR", "Франция": "EUR", "Чехия": "CZK", "Чили": "CLP",
  "Швейцария": "CHF", "Швеция": "SEK", "Южная Африка": "ZAR"
};

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "$", EUR: "€", GBP: "£", KZT: "₸", RUB: "₽", TRY: "₺", AED: "د.إ", SAR: "﷼",
  AUD: "A$", AZN: "₼", ARS: "$", AMD: "֏", BDT: "৳", BRL: "R$", HUF: "Ft",
  VND: "₫", GEL: "₾", DKK: "kr", EGP: "E£", ILS: "₪", INR: "₹", IDR: "Rp",
  CAD: "C$", COP: "$", MYR: "RM", MXN: "$", NGN: "₦", NOK: "kr", PKR: "₨",
  PEN: "S/", PLN: "zł", RON: "lei", THB: "฿", UZS: "so'm", UAH: "₴", PHP: "₱",
  CZK: "Kč", CLP: "$", CHF: "CHF", SEK: "kr", ZAR: "R"
};

const ISO_TO_COUNTRY: Record<string, string> = {
  "AU": "Австралия", "AT": "Австрия", "AZ": "Азербайджан", "AR": "Аргентина",
  "AM": "Армения", "BD": "Бангладеш", "BE": "Бельгия", "BR": "Бразилия",
  "GB": "Великобритания", "HU": "Венгрия", "VN": "Вьетнам", "DE": "Германия",
  "GR": "Греция", "GE": "Грузия", "DK": "Дания", "EG": "Египет",
  "IL": "Израиль", "IN": "Индия", "ID": "Индонезия", "ES": "Испания",
  "IT": "Италия", "KZ": "Казахстан", "CA": "Канада", "CO": "Колумбия",
  "MY": "Малайзия", "MX": "Мексика", "NG": "Нигерия", "NL": "Нидерланды",
  "NO": "Норвегия", "AE": "ОАЭ", "PK": "Пакистан", "PE": "Перу",
  "PL": "Польша", "PT": "Португалия", "RU": "Россия", "RO": "Румыния",
  "US": "США", "SA": "Саудовская Аравия", "SK": "Словакия", "TH": "Таиланд",
  "TR": "Турция", "UZ": "Узбекистан", "UA": "Украина", "PH": "Филиппины",
  "FI": "Финляндия", "FR": "Франция", "CZ": "Чехия", "CL": "Чили",
  "CH": "Швейцария", "SE": "Швеция", "ZA": "Южная Африка"
};

// Cache for OpenExchangeRates
let cachedRates: Record<string, number> | null = null;
let lastFetchTime = 0;

async function getExchangeRates() {
  const now = Date.now();
  if (cachedRates && (now - lastFetchTime < CACHE_TTL_MS)) {
    return cachedRates;
  }

  if (!OXR_APP_ID) {
    console.warn("OXR_APP_ID is missing. Falling back to 1:1 USD rates.");
    return null;
  }

  try {
    const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${OXR_APP_ID}`);
    if (!response.ok) {
      throw new Error(`OXR API error: ${response.statusText}`);
    }
    const data = await response.json();
    cachedRates = data.rates;
    lastFetchTime = now;
    return cachedRates;
  } catch (error) {
    console.error("Failed to fetch exchange rates:", error);
    return cachedRates; // Return stale cache if available
  }
}

async function startServer() {
  // API routes FIRST
  app.get("/api/pricing", async (req, res) => {
    try {
      let countryName = "Казахстан"; // Default

      // Check if country is explicitly requested
      if (req.query.country && typeof req.query.country === 'string' && PRICES_USD[req.query.country]) {
        countryName = req.query.country;
      } else {
        // Try to determine from IP
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        if (ip && typeof ip === 'string') {
          // Extract first IP if it's a list
          const realIp = ip.split(',')[0].trim();
          const geo = geoip.lookup(realIp);
          if (geo && geo.country && ISO_TO_COUNTRY[geo.country]) {
            countryName = ISO_TO_COUNTRY[geo.country];
          }
        }
      }

      const currencyCode = COUNTRY_TO_CURRENCY[countryName] || "USD";
      const symbol = CURRENCY_SYMBOLS[currencyCode] || currencyCode;
      const usdPrices = PRICES_USD[countryName] || PRICES_USD["США"];

      const rates = await getExchangeRates();
      const rate = rates ? (rates[currencyCode] || 1) : 1;

      const convertedPrices = {
        marketing: Number((usdPrices.marketing * rate).toFixed(2)),
        utility: Number((usdPrices.utility * rate).toFixed(2)),
        authentication: Number((usdPrices.auth * rate).toFixed(2)),
        usd_marketing: usdPrices.marketing,
        usd_utility: usdPrices.utility,
        usd_authentication: usdPrices.auth
      };

      res.json({
        country: countryName,
        currency: currencyCode,
        symbol: symbol,
        timestamp: Math.floor(lastFetchTime / 1000),
        prices: convertedPrices,
        availableCountries: Object.keys(PRICES_USD)
      });
    } catch (error) {
      console.error("Pricing API Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
