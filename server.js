import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 4000;

app.use(cors());

// Proxy endpoint: /proxy?url=...&ua=...
app.get('/proxy', async (req, res) => {
  const { url, ua } = req.query;
  if (!url) {
    return res.status(400).send('Missing url');
  }
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': ua || '',
        'Accept': '*/*',
      },
      redirect: 'follow',
    });
    response.headers.forEach((v, k) => res.setHeader(k, v));
    res.status(response.status);
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send('Proxy error: ' + err.message);
  }
});

// ESM compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from root-level dist
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
