import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import path from 'path';
import qr from 'qr-image';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for GET request
app.get('/', (req, res) => {
  res.render('index.ejs', { url: null });
});

// Route for POST request
app.post('/submit', (req, res) => {
  const url = req.body.url;

  // Generate QR code
  const qr_svg = qr.image(url, { type: 'png' });
  const qrPath = path.join(__dirname, 'public', 'qr-img.png');
  qr_svg.pipe(fs.createWriteStream(qrPath));

  // Render the page with the URL and QR code image
  res.render('index.ejs', { url: url });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
