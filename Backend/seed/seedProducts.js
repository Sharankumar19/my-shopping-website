const Product = require('../model/products');
const sequelize = require('../config/db');

const seedProducts = async () => {
  await sequelize.sync();

  await Product.bulkCreate([
    {
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
      price: 129.99,
      image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      category: 'Electronics',
      stock: 50
    },
    {
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch with heart rate monitor and GPS',
      price: 199.99,
      image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      category: 'Electronics',
      stock: 30
    },
    {
      name: 'Laptop Backpack',
      description: 'Durable water-resistant backpack with padded laptop compartment',
      price: 49.99,
      image_url: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
      category: 'Accessories',
      stock: 100
    },
    {
      name: 'Coffee Maker',
      description: 'Programmable coffee maker with thermal carafe',
      price: 79.99,
      image_url: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
      category: 'Home & Kitchen',
      stock: 45
    },
    {
      name: 'Yoga Mat',
      description: 'Non-slip eco-friendly yoga mat with carrying strap',
      price: 29.99,
      image_url: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
      category: 'Sports',
      stock: 75
    },
    {
      name: 'Running Shoes',
      description: 'Lightweight running shoes with cushioned sole',
      price: 89.99,
      image_url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      category: 'Sports',
      stock: 60
    }
  ]);

  console.log("Products inserted successfully!");
  process.exit();
};

seedProducts();
