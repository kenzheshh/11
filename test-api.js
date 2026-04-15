import https from 'https';

https.get('https://ipapi.co/json/', { headers: { 'User-Agent': 'nodejs' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
