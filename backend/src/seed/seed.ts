import  sequelize  from "../config/db";
import {User, Product } from "../models";



async function seed() {
  try {
    await sequelize.sync({ force: true });
    console.log(" Tables recreated susscesfully");

// Create new user
await User.create({
  name: "Admin",
  email: "admin@example.com",
  password: "1234", 
  role: "admin",
});

    console.log(" Admin user created");

    // Crear 5 productos con tus campos
    const products = [
      {
        name: "Laptop ASUS ROG",
        description: "Laptop gamer con Ryzen 9, 16GB RAM y RTX 4070",
        price: 2500,
        stock: 10,
        category: "Electrónica",
        imageURL: "https://example.com/laptop.jpg",
      },
      {
        name: "iPhone 15 Pro",
        description: "Smartphone con chip A17 Pro y pantalla OLED",
        price: 1500,
        stock: 20,
        category: "Celulares",
        imageURL: "https://example.com/iphone15pro.jpg",
      },
      {
        name: "Audífonos Sony WH-1000XM5",
        description: "Auriculares con cancelación de ruido premium",
        price: 400,
        stock: 30,
        category: "Audio",
        imageURL: "https://example.com/sony-headphones.jpg",
      },
      {
        name: "Monitor LG UltraWide 34''",
        description: "Monitor curvo 34 pulgadas QHD para productividad",
        price: 700,
        stock: 15,
        category: "Monitores",
        imageURL: "https://example.com/lg-ultrawide.jpg",
      },
      {
        name: "Teclado mecánico Keychron K6",
        description: "Teclado compacto con switches marrones",
        price: 90,
        stock: 25,
        category: "Periféricos",
        imageURL: "https://example.com/keychron-k6.jpg",
      },
    ];

    await Product.bulkCreate(products);
    console.log(" 5 productos creados");

    console.log(" database populated ");
    process.exit(0);
  } catch (error) {
    console.error(" error populate  :", error);
    process.exit(1);
  }
}

seed();