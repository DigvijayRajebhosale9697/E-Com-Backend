import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const items = [
  {
    category: "mobiles",
    title: "Apple iPhone 15",
    imgSrc: "https://www.maplestore.in/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN_9d151e10-d809-499c-95cd-5c7cb7ea9dbe.jpg?v=1701822313",
    amazonLink: "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX2F5QT/ref=sr_1_1_sspa?crid=2ALR6A0QR6100&keywords=iphone%2B15&qid=1702967350&sprefix=iphone%2B1%2Caps%2C288&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    description: "Apple iPhone 15 (128 GB) - Blue",
    price: "89999",
  },
  {
    category: "mobiles",
    title: "Apple iPhone 14",
    imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3PuckZp",
    description: "Apple iPhone 14 (128 GB) - Blue",
    price: "89999",
  },
  {
    category: "tablets",
    title: "Xiaomi Pad 6",
    imgSrc: "https://m.media-amazon.com/images/I/71LRY1j6UHL._SY450_.jpg",
    amazonLink: "https://amzn.to/3EzeQaC",
    description: "Xiaomi Pad 6 - Dark Grey",
    price: "49999",
  },
  {
    category: "tablets",
    title: "Xiaomi Pad 6",
    imgSrc: "https://m.media-amazon.com/images/I/71ioKNHjXKL._SY450_.jpg",
    amazonLink: "https://amzn.to/3ZeNRdY",
    description: "Xiaomi Pad 6 - Mist Blue",
    price: "29999",
  },
  {
    category: "mobiles",
    title: "Apple iPhone 13",
    imgSrc: "https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg",
    amazonLink: "https://amzn.to/44MiYi6",
    description: "Apple iPhone 13 (128GB) - Pink",
    price: "79999",
  },
  {
    category: "tablets",
    title: "Redmi Pad",
    imgSrc: "https://m.media-amazon.com/images/I/61EFdbc0nrL._SY450_.jpg",
    amazonLink: "https://amzn.to/3RabsdH",
    description: "Redmi Pad - Moonlight Silver",
    price: "19999",
  },
  {
    category: "mobiles",
    title: "Apple iPhone 12",
    imgSrc: "https://m.media-amazon.com/images/I/71hIfcIPyxS._SX679_.jpg",
    amazonLink: "https://amzn.to/3r6XJtv",
    description: "Apple iPhone 13 (128GB) - Purple",
    price: "69999",
  },
  {
    category: "laptops",
    title: "Lenovo IdeaPad",
    imgSrc: "https://m.media-amazon.com/images/I/61PeZXpc5-L._SY450_.jpg",
    amazonLink: "https://amzn.to/44JsK4r",
    description: 'Lenovo IdeaPad | Intel Core i5 12450H 14" (35.5cm) ',
    price: "29999",
  },
  {
    category: "tablets",
    title: "Samsung Galaxy Tab A8",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3Pdsh4F",
    description: "Samsung Galaxy Tab A8 2- Gray, (SM-X200NZAEINU)",
    price: "49999",
  },
  {
    category: "laptops",
    title: "Apple MacBook Air Laptop",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r9rvhm",
    description: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display",
    price: "89999",
  },
  {
    category: "headphones",
    title: "boAt Rockerz 450",
    imgSrc: "https://m.media-amazon.com/images/I/61u1VALn6JL._SY450_.jpg",
    amazonLink: "https://www.amazon.in/Boat-Rockerz-450-Lightweight-Compatibility/dp/B08667772G/ref=sr_1_4?crid=2F5I7G4J42JNT&keywords=headphones&qid=1702976615&sprefix=head%2Caps%2C270&sr=8-4&th=1",
    description: "boAt Rockerz 450-(Aqua Blue)",
    price: "89999",
  },
  {
    category: "dslrcameras",
    title: "Canon EOS 1500D",
    imgSrc: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
    amazonLink: "https://amzn.to/3F7jW8e",
    description: "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
    price: "36999",
  },
  {
    category: "dslrcameras",
    title: "Nikon D5600",
    imgSrc: "https://m.media-amazon.com/images/I/81bVHWevmyL._AC_UY327_FMwebp_QL65_.jpg",
    amazonLink: "https://amzn.to/3ZaLp5W",
    description: "Nikon D5600 Digital Camera 18-55mm Lens",
    price: "46999",
  },
  {
    category: "dslrcameras",
    title: "Sony Alpha ILCE-6400",
    imgSrc: "https://m.media-amazon.com/images/I/81lghf1fdzL._AC_UY327_FMwebp_QL65_.jpg",
    amazonLink: "https://amzn.to/3T3sTG6",
    description: "Sony Alpha ILCE-6400 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm Lens",
    price: "78999",
  },

  // Earphones
  {
    category: "earphones",
    title: "Sony WF-1000XM4",
    imgSrc: "https://m.media-amazon.com/images/I/61KfkgL8aRL._AC_UY327_FMwebp_QL65_.jpg",
    amazonLink: "https://amzn.to/3PpXqJt",
    description: "Sony WF-1000XM4 Industry Leading Noise Canceling Truly Wireless Earbuds",
    price: "19999",
  },
  {
    category: "earphones",
    title: "boAt Airdopes 441",
    imgSrc: "https://m.media-amazon.com/images/I/614gbl-O98L._AC_UY327_FMwebp_QL65_.jpg",
    amazonLink: "https://amzn.to/3RAhqsY",
    description: "boAt Airdopes 441 TWS Ear-Buds with IWP Technology and Up to 30 Hours Playback",
    price: "2499",
  },
  {
    category: "earphones",
    title: "JBL C100SI",
    imgSrc: "https://m.media-amazon.com/images/I/517Gp4t9OFL._AC_UY327_FMwebp_QL65_.jpg",
    amazonLink: "https://amzn.to/45IykOm",
    description: "JBL C100SI Wired In Ear Headphones with Mic",
    price: "699",
  },

  // Smart Watches
  {
    category: "smartwatches",
    title: "Apple Watch Series 8",
    imgSrc: "https://m.media-amazon.com/images/I/8183tbgkwbL._AC_UY327_FMwebp_QL65_.jpg",
    amazonLink: "https://amzn.to/45HxOGo",
    description: "Apple Watch Series 8 (GPS, 45mm) - Midnight Aluminium Case with Midnight Sport Band",
    price: "47999",
  },
  {
    category: "smartwatches",
    title: "Samsung Galaxy Watch 5",
    imgSrc: "https://m.media-amazon.com/images/I/71d7quY-KxL._AC_UY327_FMwebp_QL65_.jpg",
    amazonLink: "https://amzn.to/3LiOjUL",
    description: "Samsung Galaxy Watch 5 Bluetooth (44mm) - Graphite",
    price: "25999",
  },
  {
    category: "smart watches",
    title: "Noise ColorFit Pro 4",
    imgSrc: "https://m.media-amazon.com/images/I/41iRj4+m8oL._AC_SR250,250_QL65_.jpg",
    amazonLink: "https://amzn.to/3Zf4fwL",
    description: "Noise ColorFit Pro 4 Alpha 1.78 AMOLED Display, Bluetooth Calling Smart Watch",
    price: "3999",
  },
];

async function run() {
  try {
    await client.connect();
    console.log('Connected to database');

    const database = client.db('Products');
    const collection = database.collection('Products_Data');

    const result = await collection.insertMany(items);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
