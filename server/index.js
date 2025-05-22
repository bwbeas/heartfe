require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const formSchema = new mongoose.Schema({
  message: String,
  isAgreed: String,
  selectedOption: String,
  submittedAt: { type: Date, default: Date.now }
});

const Form = mongoose.model('Form', formSchema);


app.post('/submit', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: 'Saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
