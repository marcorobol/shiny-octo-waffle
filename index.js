import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

if (DB_URL) {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connesso a MongoDB');
  } catch (err) {
    console.error('Errore durante la connessione a MongoDB:', err.message);
  }
} else {
  console.warn('DB_URL non definito');
}

app.listen(PORT, () => {
  console.log(`Server Express avviato sulla porta ${PORT}`);
});

export default app;
