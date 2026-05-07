export const fetchGeoData = async (): Promise<string | null> => {
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (res.ok) {
      const data = await res.json();
      if (data && data.country_code) {
        return data.country_code; // e.g. 'RU'
      }
    }
  } catch (e) {
    // Ignore error and try fallback
  }

  try {
    const res = await fetch('https://ipwho.is/');
    if (res.ok) {
      const data = await res.json();
      if (data && data.country_code) {
        return data.country_code; // e.g. 'RU'
      }
    }
  } catch (e) {
    // Ignore error
  }

  return null;
};
