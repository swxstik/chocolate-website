const chocolateServices = [
  {
    id: "chocolateFountain",
    title: "Chocolate Fountain",
    shortDescription: "A chocolate fountain is a fun and indulgent treat that adds excitement to any event. Perfect for weddings, birthdays, or celebrations, it lets guests dip treats into flowing, velvety chocolate, making any occasion sweeter.",
    longDescription: "A chocolate fountain is a delightful treat that brings joy to everyone, young and old alike. Its flowing, velvety chocolate creates a fun and interactive experience, making it the perfect addition to any event. Whether you're hosting a wedding, birthday party, or special celebration, a chocolate fountain adds a touch of indulgence and excitement, allowing guests to dip fruits, marshmallows, and other treats into the delicious cascade of chocolate. It’s the ultimate way to make any occasion even sweeter!",
    images: [
      "chocolate services/WhatsApp Image 2024-12-13 at 16.11.34_870248.png",
      "chocolate services/cccc1.jpg",
      "chocolate services/cf3.png"
    ],
    note: "Available on a rental basis",
    rentalImage: "products/frame253.png"  // Add rental image here
  },
  {
    id: "automobileGifts",
    title: "Automobile Gifts",
    shortDescription: "Automobile chocolate gifts, with their car-themed designs and delightful flavors, add excitement to any celebration. Perfect for car enthusiasts and new car owners, they blend creativity and indulgence into memorable moments.",
    longDescription: "Automobile chocolate gifts, crafted in delightful car-themed designs and flavors, add a unique spark to any celebration. These automobile themed gifts capture the joy of both chocolate indulgence and the thrill of automobiles experience. Perfect for car enthusiasts, new car owners and those seeking something out of the ordinary, they make birthdays, anniversaries, corporate events, and festive occasions even more memorable. Combining creativity and deliciousness, automobile chocolate gifts turn every moment into a celebration filled with fun, flavor, and a dash of playful elegance.",
    images: [
      "chocolate services/asset 36.png",
      "services pictures/sm2.png",  
      "services pictures/am3.png",
      "services pictures/am4.png",
      "services pictures/am5.png",
      "services pictures/am6.png",
      "services pictures/am7.png"
    ],
    note: "Made to order"
  },
  {
    id: "customizedChocolates",
    title: "Customized Chocolate Bars",
    shortDescription: "Customized chocolate bars bring a personal touch to celebrations, blending unique designs and flavors into every moment. They create sweet memories and add individuality to every joyous occasion.",
    longDescription: "Customized chocolate bars, tailored with unique flavors, designs, and personal touches, bring an unmatched sense of joy to every celebration. From names and messages to vibrant patterns or logos, these bars create a heartfelt connection, making each occasion feel truly special. Perfect for birthdays, weddings, corporate gifts, or festive gatherings, customized chocolate bars offer not just a delectable treat but a meaningful keepsake that amplifies the spirit of the moment. Their versatility and personal charm add sweetness, fun, and individuality to cherished occasions, turning them into unforgettable memories.",
    images: [
      "services pictures/cc.png",
      "services pictures/cc2.png",
      "services pictures/cc3.png"
    ],
    note: "MOQ applies"
  },
  {
    id: "assortedChocolates",
    title: "Assorted Chocolates",
    shortDescription: "Assorted chocolates add a burst of joy and flavor to any occasion, making every celebration truly special. With their variety and charm, they create sweet memories worth savoring.",
    longDescription: "Assorted chocolates, with their delightful array of flavors, textures, and fillings, have a unique way of turning every moment into a celebration. Whether it’s a creamy truffle melting on the tongue, a nutty bite adding crunch, or a dark chocolate square delivering a rich burst of flavor, each piece offers a new adventure to savor. These little indulgences bring joy to life's special occasions—be it birthdays, anniversaries, festivals, or even just a quiet evening of self-love. The versatility and charm of assorted chocolates make them the perfect companion for creating unforgettable memories, adding a touch of sweetness and fun to any celebration.",
    images: [
      "chocolate services/assorted chocolate.png",
      "chocolate services/asset 9.png",
      "chocolate services/asset 10.png",
      "chocolate services/asset 11.png",  
      "chocolate services/asset 12.png"
    ],
    note: "Varieties change seasonally"
  },
  {
    id: "marbleChocolates",
    title: "Marble Chocolates",
    shortDescription: "MMarble chocolates blend rich flavors with artistic swirls, creating a treat that's both indulgent and visually stunning. Perfect for any celebration, they turn moments into sweet, unforgettable memories.arble chocolates blend rich flavors with artistic swirls...",
    longDescription: "Marble chocolates, with their mesmerizing swirls of flavors and textures, bring an element of artistry and delight to every celebration. Each piece offers a unique combination of creamy white and rich dark chocolate, creating a perfect harmony of taste that pleases every palate. Whether enjoyed as a thoughtful gift, shared at festive gatherings, or savored during personal moments of indulgence, these chocolates add a touch of elegance and excitement to any occasion. Marble chocolates transform simple celebrations into moments of joy and wonder, blending sweetness, creativity, and visual charm to create lasting memories. and luxurious, perfect for special occasions...",
    images: [
      "chocolate services/marbel chocolate.png",
      "services pictures/mc2.png",
      "services pictures/mc3.png",
      "services pictures/mc4.png",
      "services pictures/mc5.png"
    ],
    note: "Handmade to perfection"
  },
  {
    id: "printedChocolates",
    title: "Printed Chocolates",
    shortDescription: "Printed Printed chocolates add a personal and creative touch to celebrations, making every moment uniquely special. Their delightful designs and flavors create lasting memories filled with sweetness and fun. add a personal and creative touch...",
    longDescription: "Logos, Special branding of chocolates through printed sugar sheets infused on chocolates brings innovation and personalization to every celebration, making it a delightful experience for customers. By adorning chocolates with intricate designs, logos, or messages tailored to each brand, this unique approach combines creativity and indulgence. With a variety of chocolate flavors to choose from, these custom creations become not just a treat, but a memorable symbol of the brand itself. Perfect for gifting, corporate events, or festive occasions, chocolates with sugar-sheet branding add a layer of fun and sophistication, turning ordinary moments into extraordinary celebrations filled with sweetness and joy., and more printed onto delicious chocolate...",
    images: [
      "services pictures/pc1.jpg",
      "services pictures/pc2.jpg"
    ],
    note: "Great for branding"
  }
];

function viewService(serviceId) {
  localStorage.setItem("selectedService", serviceId);
  window.location.href = "service_detail.html"; // Must match the file name exactly
}