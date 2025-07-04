const pageSize=5;
let currentpage=1;
let allproducts=[];

const products = [
  { id: 1, name: 'Purse', code: 'CW29', weight: '350 gm', image: 'productlistings/purse.png', description: 'Chocolate in purse packaging combines elegance, playfulness, and indulgence, making it a delightful addition to any celebration. The stylish and creative design of the purse not only enhances the visual appeal but also holds an exciting assortment of chocolates, from nutty delights to exotic flavors, offering a delightful surprise with every piece. Perfect for gifting, festive occasions, or as a unique keepsake, this packaging adds a charming and fashionable touch to special moments. Chocolate in purse packaging transforms celebrations into chic and joyful experiences, blending sweetness, creativity, and sophistication to make memories even more special.'
   },
  { id: 2, name: 'Duggi', weight: '350 gm', image: 'productlistings/duggi.png', description: 'Chocolate in duggi packaging strikes a perfect chord between cultural creativity and sweet indulgence, adding vibrancy and charm to any celebration. The packaging, inspired by the distinctive form of the duggi, mirrors its rhythmic beats with a delightful assortment of chocolates—from nutty delights to exotic flavors—each one bringing a symphony of taste to every bite. Just as the duggi sets the rhythm for joyous melodies, these chocolates set the tone for festive moments, making them unforgettable. Chocolate in duggi packaging transforms celebrations into harmonious experiences, blending sweetness, tradition, and a playful sense of rhythm to create lasting memories.' },
  { id: 3, name: 'Sleeping Dholak', weight: '200 gm', image: 'productlistings/sleeping_dholak.png', description: `Chocolate in sleeping dholak packaging brings a unique blend of cultural charm and indulgent fun to every celebration. The design, inspired by the serene elegance of a resting dholak, beautifully cradles an assortment of chocolates—from nutty delights to exotic flavors—offering a treat that's as delightful to behold as it is to savor. Just as the dholak's melodies enliven festive gatherings, these chocolates add a rhythm of joy and sweetness to special moments. Chocolate in sleeping dholak packaging transforms occasions into harmonious celebrations, blending tradition, creativity, and flavor to make every event truly memorable.` },
  { id: 4, name: 'Veena', weight: '350 gm', image: 'productlistings/veena.png', description: `Chocolate in veena packaging beautifully harmonizes culture, artistry, and indulgence, making it an extraordinary addition to any celebration. The design, inspired by the elegant curves and strings of the veena, resonates with the charm and sophistication of this classical musical instrument. Much like the veena’s melodies captivate the soul, the assortment of chocolates it holds—from nutty delights to exotic flavors—enchants the senses with every bite. Perfect for gifting or as a centerpiece for festive occasions, chocolate in veena packaging transforms moments into symphonies of joy and flavor, blending sweetness, tradition, and creativity to create unforgettable memories.` },
  { id: 5, name: 'Standing Dholak', weight: '200 gm', image: 'productlistings/standing_dholak.jpg', description: `Chocolate in standing dholak packaging brings a festive rhythm and playful charm to every celebration, creating a unique experience for chocolate lovers. The upright dholak design, inspired by the vibrancy of traditional music, beautifully showcases an assortment of chocolates—from nutty creations to exotic flavors—offering a sweet harmony of taste and style. Just as the beats of a standing dholak energize any gathering, these chocolates add joy and excitement to every moment. Chocolate in standing dholak packaging transforms ordinary occasions into lively celebrations, blending sweetness, tradition, and creativity to craft memories filled with flavor and festivity.` },
  { id: 6, name: 'Small Tabla Set', weight: '165 gm', image: 'productlistings/smal_tabla_set.jpg', description: `Chocolate in small tabla set packaging strikes a perfect harmony between creativity and indulgence, adding a unique cultural flair to any celebration. The intricately designed tabla set holds an assortment of chocolates—from nutty delights to exotic flavors—making it as delightful to look at as it is to enjoy. Ideal for festive gatherings, gifting, or as a distinctive keepsake, this packaging brings joy and excitement to special moments. Chocolate in small tabla set packaging transforms occasions into vibrant celebrations, blending flavor, tradition, and a touch of musical charm for unforgettable memories.`},
  { id: 7, name: 'Jumbo Tabla', weight: '350 gm', image: 'productlistings/jumbo_tabla.jpg', description: `Chocolate in jumbo tabla packaging strikes a harmonious balance between cultural artistry and delectable indulgence, making it a perfect highlight for any celebration. Inspired by the rhythmic beauty of the musical instrument tabla, the packaging encapsulates an array of chocolate varieties—from nutty delights to exotic flavors—each bite as mesmerizing as the beats of a tabla performance. The grandeur of the jumbo tabla design not only enhances the presentation but also pays homage to tradition and creativity. Chocolate in jumbo tabla packaging transforms moments into symphonies of joy and flavor, resonating with sweetness, culture, and festive vibrance to make every occasion unforgettable.` },
  { id: 8, name: 'Fruit Chocolate', weight: '30 gm', image: 'productlistings/fruit_chocolate.jpg', description: `Chocolate in fruit-inspired packaging adds a whimsical and refreshing twist to celebrations, merging visual charm with delectable flavors. From vibrant wrappers mimicking the allure of berries, citrus, or exotic fruits to chocolate infused with fruity notes, these treats bring a burst of joy to any occasion. Perfect for gifting or sharing, they captivate the senses and elevate moments with their creative presentation and taste. Chocolate in fruit packaging transforms every celebration into a feast for the eyes and palate, spreading fun, warmth, and delight in every bite.` },
  { id: 9, name: 'Midang', weight: '350 gm', image: 'productlistings/midang.jpg', description: `Chocolate in mridang packaging brings an extraordinary rhythm of tradition and indulgence to every celebration, making it a truly unique experience. Inspired by the mridang, a classical percussion instrument that produces enchanting beats, the packaging elegantly holds an array of chocolates—from nutty delights to exotic flavors—each offering its own sweet symphony. Just as the mridang sets the tempo for vibrant cultural performances, these chocolates add flavor and joy to festive moments, creating memorable harmonies of taste. Chocolate in mridang packaging transforms occasions into orchestrated celebrations, blending sweetness, cultural artistry, and a sense of rhythm to delight customers and create lasting memories.` },
  { id: 10, name: 'Crystal Jar', weight: '150 gm', image: 'productlistings/crystal_jar.jpg', description: `Chocolate in crystal jar glass packaging exudes elegance and sophistication, transforming every celebration into a luxurious experience. The sparkling clarity of the glass beautifully showcases the assortment of chocolates inside—from nutty delights to exotic flavors—making it a feast for both the eyes and the palate. Perfect for gifting, festive occasions, or as an exquisite table centerpiece, this packaging elevates the joy of sharing and savoring sweet moments. Chocolate in crystal jar packaging turns simple gatherings into memorable celebrations, blending sweetness, style, and timeless charm to create truly unforgettable experiences.` },
  { id: 11, name: 'Lily Basket', weight: '300 gm', image: 'productlistings/lily_basket.jpg', description: `Chocolate in lily basket packaging brings a touch of elegance and natural beauty to every celebration. The intricately crafted basket, inspired by the delicate charm of lilies, perfectly cradles an assortment of chocolates, from nutty delights to exotic flavors, creating a presentation that's both graceful and indulgent. Ideal for festive occasions, gifting, or as a show-stopping centerpiece, this packaging adds sophistication and joy to special moments. Chocolate in lily basket packaging transforms gatherings into unforgettable celebrations, blending sweetness, artistry, and a sense of refined delight.` },
  { id: 12, name: 'Ceramic Item 1', weight: '150 gm', image: 'productlistings/ceramic_item_1.jpg', description: `Chocolate in ceramic packaging combines timeless elegance with thoughtful indulgence, making it a delightful choice for every celebration. The beautifully crafted ceramic containers not only preserve the rich flavors of the chocolates inside—from nutty favorites to exotic varieties—but also serve as keepsakes long after the chocolates are enjoyed. Perfect for gifting or enhancing festive gatherings, this packaging adds a touch of sophistication and sustainability to special moments. Chocolate in ceramic packaging transforms occasions into cherished celebrations, blending sweetness, creativity, and enduring charm to create unforgettable experiences.` },
  { id: 13, name: 'Ceramic Item 2', weight: '150 gm', image: 'productlistings/ceramic_item_2.jpg', description: `Chocolate in ceramic packaging combines timeless elegance with thoughtful indulgence, making it a delightful choice for every celebration. The beautifully crafted ceramic containers not only preserve the rich flavors of the chocolates inside—from nutty favorites to exotic varieties—but also serve as keepsakes long after the chocolates are enjoyed. Perfect for gifting or enhancing festive gatherings, this packaging adds a touch of sophistication and sustainability to special moments. Chocolate in ceramic packaging transforms occasions into cherished celebrations, blending sweetness, creativity, and enduring charm to create unforgettable experiences.` },
  { id: 14, name: 'Potli', weight: '1000 gm', image: 'productlistings/potli.jpg', description: `Chocolate in potli packaging combines tradition with a touch of elegance, creating a delightful experience for every celebration. The charming potli design, often associated with festivity and abundance, beautifully holds an array of chocolates—from nutty delights to exotic flavors—making it a treat both to give and receive. Ideal for gifting during festivals, weddings, or special occasions, this packaging adds a unique and thoughtful element to the moment. Chocolate in potli packaging transforms simple gatherings into vibrant celebrations, blending sweetness, creativity, and cultural charm to make every occasion memorable.` },
  { id: 15, name: 'Loose FR Ladoo', weight: '1000 gm', image: 'productlistings/loose_fr_ladoo.jpg', description: `Loose Chocolate in laddoo shape brings a delightful fusion of tradition and indulgence, making it a charming addition to any celebration. These round, bite-sized delights evoke a sense of nostalgia while offering a variety of flavors, from nutty creations to rich and exotic combinations. Perfect for festive gatherings, gifting, or personal treats, their unique presentation adds a playful and joyful touch to special occasions. Chocolate in loose laddoo shape transforms moments into cherished celebrations, blending sweetness, creativity, and a hint of cultural heritage to create lasting memories.` },
  { id: 16, name: 'Decorative Ladoo', weight: '1000 gm', image: 'productlistings/decorative_ladoo.jpg', description: `Chocolate in decorative laddoo packaging offers a delightful combination of tradition and modern indulgence, perfect for adding a festive flair to any celebration. These beautifully crafted laddoo-inspired designs hold an enticing array of chocolates, from nutty delights to exotic flavors, blending cultural charm with delectable treats. Ideal for gifting, festive gatherings, or simply spreading joy, this unique packaging brings a playful yet elegant touch to special moments. Chocolate in decorative laddoo packaging transforms occasions into joyful celebrations, filled with sweetness, creativity, and cherished memories.` },
  { id: 17, name: 'Half Drum', weight: '1000 gm+', image: 'productlistings/half_drum.jpg', description: `Chocolate in half drum shape brings a bold and creative twist to every celebration, making it both a visual delight and a treat to savor. The distinctive design of the half drum showcases a variety of chocolates—ranging from nutty delights to exotic flavors—offering a unique and indulgent experience. Perfect for festive gatherings, thoughtful gifting, or as a striking centerpiece, this packaging adds charm and excitement to any occasion. Chocolate in half drum packaging transforms simple moments into vibrant celebrations, blending sweetness, creativity, and a sense of playful sophistication.` },
  { id: 18, name: 'Zig Zag Pot', weight: '100 gm', image: 'productlistings/zig_zag_pot.jpg', description: `Chocolate presented in charming zig-zag pot packaging brings a playful and distinctive flair to every celebration. The unique design, paired with an array of delightful chocolate varieties, creates an irresistible combination that is as fun to receive as it is to indulge in. Perfect for festive occasions, gifting, or personal enjoyment, these eye-catching pots add an element of surprise and excitement. With their creative appeal and delectable contents, zig-zag pot chocolates turn any moment into a cheerful celebration filled with joy, flavor, and a touch of whimsy.` },
  { id: 19, name: 'Zig Zag Pot 150', weight: '150 gm', image: 'productlistings/zig_zag_pot_150.jpg', description: `Chocolates in whimsical zig-zag pot packaging add a vibrant and distinctive touch to every celebration. The playful design, combined with a variety of irresistible chocolate delights, makes them as exciting to give as they are to enjoy. Perfect for festive gatherings, thoughtful gifting, or indulgent moments, these charming pots bring an element of surprise and delight. With their unique appeal and mouthwatering contents, zig-zag pot chocolates transform any occasion into a joyful celebration filled with flavor, creativity, and fun.` },
  { id: 20, name: 'Jumbo Matki', weight: '350 gm', image: 'productlistings/jumbo_matki.jpg', description: `` },
  { id: 21, name: 'Bowl 150', weight: '150 gm', image: 'productlistings/bowl_150.jpg', description: `Chocolate in bowl packaging offers a delightful and versatile way to elevate any celebration, combining practicality with indulgence. The inviting design of the bowl beautifully cradles a variety of chocolates, from creamy truffles to crunchy nut-filled delights and rich flavored treats, making it a feast for both the eyes and the taste buds. Perfect for gifting, sharing, or as a centerpiece at festive gatherings, this packaging adds a touch of charm and joy to every occasion. Chocolate in bowl packaging turns moments into memorable celebrations filled with flavor, fun, and a sense of warmth.` },
  { id: 22, name: 'Teddy Bear', weight: '150 gm', image: 'productlistings/teddy_bear.jpg', description: `Chocolate in teddy bear packaging adds an adorable and heartfelt touch to every celebration, making it a perfect choice for spreading joy and delight. With an assortment of chocolate varieties nestled within the cuddly charm of a teddy bear, this packaging becomes a memorable gift for both children and adults alike. Ideal for birthdays, anniversaries, or simply as a gesture of love, it combines sweetness and warmth in a unique presentation. Chocolate in teddy bear packaging transforms special moments into cherished memories, blending fun, flavor, and an irresistible sense of whimsy.` },
  { id: 23, name: 'Rama Basket', weight: '250 gm', image: 'productlistings/rama_basket.jpg' },
  { id: 24, name: 'Tray', weight: '250 gm', image: 'productlistings/tray.jpg' },
  { id: 25, name: 'MDF Tray', weight: '100 gm', image: 'productlistings/mdf_tray.jpg' },
  { id: 26, name: 'Oval Tray', weight: '150 gm', image: 'productlistings/oval_tray.jpg' },
  { id: 27, name: 'Plastic Tray', weight: '250 gm', image: 'productlistings/plastic_tray.jpg' },
  { id: 28, name: 'Thaali 550gm', weight: '550 gm', image: 'productlistings/thaali_550gm.jpg' },
  { id: 29, name: 'Bucket Boque', weight: '250 gm', image: 'productlistings/bucket_boque.jpg' },
  { id: 30, name: 'Hut', weight: '150 gm', image: 'productlistings/hut.jpg', description: `Chocolate in hut-shaped packaging brings a charming and imaginative flair to every celebration, making it a delightful treat for all ages. The unique design, reminiscent of cozy little huts, adds a whimsical touch that perfectly complements the variety of delicious chocolates inside. Ideal for gifting during festive occasions, birthdays, or as a thoughtful surprise, this packaging transforms the simple act of indulging in chocolate into a joyful and memorable experience. With its creative appeal and delectable contents, chocolate in hut-shaped packaging turns every special moment into a celebration of flavor, fun, and warmth.` },
  { id: 31, name: 'Chocolate Bars', weight: '85 gm', image: 'productlistings/chocolate_bars.png', description: `Customized chocolate bars, tailored with unique flavors, designs, and personal touches, bring an unmatched sense of joy to every celebration. From names and messages to vibrant patterns or logos, these bars create a heartfelt connection, making each occasion feel truly special. Perfect for birthdays, weddings, corporate gifts, or festive gatherings, customized chocolate bars offer not just a delectable treat but a meaningful keepsake that amplifies the spirit of the moment. Their versatility and personal charm add sweetness, fun, and individuality to cherished occasions, turning them into unforgettable memories.` },
  { id: 32, name: 'Mugs', weight: '100 gm', image: 'productlistings/mugs.jpg', description: `Chocolate presented in beautifully designed ceramic mugs adds a creative and functional twist to any celebration. This packaging not only showcases a variety of delectable chocolates but also offers a charming keepsake that customers can cherish long after the treats are gone. Perfect for gifting during holidays, birthdays, or special occasions, ceramic mugs filled with chocolates bring warmth, joy, and a sense of thoughtfulness to the moment. Combining indulgence with practicality, this unique presentation turns every celebration into a sweet memory filled with flavor and delight.` },
  { id: 33, name: 'Automobile Gifts', weight: '100 gm', image: 'productlistings/automobile_gifts.png' },
  { id: 34, name: 'Carry Bag', weight: '150 gm', image: 'productlistings/carry_bag.jpg' },
  { id: 35, name: 'MDF Tray', weight: '250 gm', image: 'productlistings/mdf_trayy.jpg' },
  { id: 36, name: 'Decorative Chocobite', weight: '1000 gm+', image: 'productlistings/decorative_chocolate.png' },
  { id: 37, name: 'Valentines', weight: '130 gm', image: 'productlistings/valentines.png' },
  { id: 38, name: 'Sipper', weight: '250 gm', image: 'productlistings/sipper.png' },
  { id: 39, name: 'Customized Branding', weight: '1000 gm+', image: 'productlistings/customized_branding.png' },
  { id: 40, name: 'MDF Basket', weight: '250 gm', image: 'productlistings/mdf_basket.jpg' },
  { id: 41, name: 'Special Delights', weight: '1000 gm+', image: 'productlistings/special_delights.png' },
  { id: 42, name: 'Thaal 1670', weight: '1670 gm', image: 'productlistings/thaal_1670.png' },
  { id: 43, name: 'Round basket', weight: '250 gm', image: 'productlistings/round_basket.png' },
  { id: 44, name: 'Decorative Bites', weight: '1000 gm+', image: 'productlistings/decorative_bites.png' },
  { id: 45, name: 'Haandi', weight: '150 gm', image: 'productlistings/haandi.png' },
  { id: 46, name: 'Flexbox', weight: '130 gm', image: 'productlistings/flexbox.png' },
  { id: 47, name: 'Mayur Tray', weight: '100 gm', image: 'productlistings/mayur_tray.png' },
  { id: 48, name: 'Oval Basket', weight: '250 gm', image: 'productlistings/oval_basket.png' },
  { id: 49, name: 'Plastic Tray 2', weight: '250 gm', image: 'productlistings/plastic_tray_2.png' },
  { id: 50, name: 'Paper Mache Round Basket', weight: '165 gm', image: 'productlistings/paper_mache.png' },
  { id: 51, name: 'Choco Ladoo Box', weight: '65 gm', image: 'productlistings/choco_ladoo_box.png' },
  { id: 52, name: '4 Piece Box', weight: '65 gm', image: 'productlistings/4_pc_box.png' },
  { id: 53, name: 'Choco Dates', weight: '1000 gm', image: 'productlistings/choco_dates.png' },
  { id: 54, name: 'Marble Chocolates', weight: '1000 gm', image: 'productlistings/marble_chocolates.png' },
  { id: 55, name: 'Hazelnut & Walnut Rocks', weight: '1000 gm', image: 'productlistings/hazelnut_box.png' },
  { id: 56, name: 'Crystal Box', weight: '100 gm', image: 'productlistings/crystal_box.jpg' },
  { id: 57, name: 'Heart Shape 115', weight: '115 gm', image: 'productlistings/heart_shape.png', description: `Chocolate in lotus box packaging brings a graceful and enchanting charm to every celebration. The intricate design of the lotus box beautifully complements the variety of delicious chocolates it holds, creating a presentation that's both elegant and memorable. Perfect for festive occasions, heartfelt gifts, or special moments of indulgence, this unique packaging captures attention and adds a touch of sophistication. With its artistic appeal and delectable contents, chocolate in lotus box packaging transforms any occasion into a joyous celebration of flavor, beauty, and delight.` },
  { id: 58, name: 'Lotus', weight: '150 gm', image: 'productlistings/lotus.png', description: `Chocolate in lotus box packaging brings a graceful and enchanting charm to every celebration. The intricate design of the lotus box beautifully complements the variety of delicious chocolates it holds, creating a presentation that's both elegant and memorable. Perfect for festive occasions, heartfelt gifts, or special moments of indulgence, this unique packaging captures attention and adds a touch of sophistication. With its artistic appeal and delectable contents, chocolate in lotus box packaging transforms any occasion into a joyous celebration of flavor, beauty, and delight.` },
  { id: 59, name: 'Square Pot', weight: '100 gm', image: 'productlistings/square_pot.png', description: `Chocolate in square pot packaging offers a delightful combination of elegance and charm, turning every occasion into a celebration of taste and style. The unique design of the square pot beautifully showcases a variety of irresistible chocolates, making it a treat for both the eyes and the palate. Ideal for gifting or sharing during special moments, this packaging adds a modern and sophisticated touch that enhances the joy of indulgence. With its creative appeal and delectable contents, chocolate in square pot packaging transforms ordinary moments into unforgettable celebrations filled with fun and flavor.` },
  { id: 60, name: 'Thaal 785', weight: '785 gm', image: 'productlistings/thaal_785.jpg', description: `Chocolate in thaal packaging exudes grandeur and tradition, turning any celebration into a truly majestic experience. The beautifully arranged thaal, filled with an array of chocolates—from nutty delights to exotic flavors—creates an inviting display that adds a sense of opulence to the occasion. Perfect for festive gatherings, gifting, or as a statement centerpiece, this packaging brings a blend of cultural heritage and indulgence. Chocolate in thaal packaging transforms simple moments into lavish celebrations, filling them with sweetness, joy, and a touch of timeless elegance that leaves a lasting impression.` },
  { id: 61, name: 'Heart Shape', weight: '60 gm', image: 'productlistings/heart_shapee.png' },
  { id: 62, name: 'Almond & Cashew Rocks', weight: '1000 gm', image: 'productlistings/almond_cashew.png', description: `Chocolate in almond and cashew rock varieties offers a delightful fusion of crunch and creaminess, creating the perfect treat for any celebration. The rich, velvety chocolate envelopes the wholesome goodness of almonds and cashews, delivering a medley of textures and flavors in every bite. Perfect for gifting, sharing, or enhancing festive gatherings, these nutty creations bring a sense of joy and indulgence to special moments. Chocolate in almond and cashew rocks transforms simple occasions into cherished celebrations, blending flavor, fun, and a touch of sophistication to make memories even sweeter.` },
  { id: 63, name: 'Silver Bowl', weight: '100 gm', image: 'productlistings/silver_bowl.png', description: `Chocolate in silver bowl packaging exudes a sense of luxury and refinement, making every celebration feel truly special. The gleaming silver bowl beautifully accentuates the rich assortment of chocolates it holds, turning the presentation into an experience of indulgence and elegance. Perfect for gifting or sharing on joyous occasions, this packaging adds a timeless charm and elevates the sweetness of the moment. Combining sophistication with delicious flavors, chocolate in silver bowl packaging transforms ordinary gatherings into memorable celebrations filled with delight and grace.` },
  { id: 64, name: 'Dry Flower', weight: '1000 gm+', image: 'productlistings/dry_flower.png', description: `Chocolate in decorative dry flower packaging adds an enchanting blend of elegance and indulgence to every celebration. The exquisite arrangement of dried flowers beautifully complements the assortment of chocolates, ranging from nutty delights to exotic flavors, creating a presentation that is both captivating and luxurious. Perfect for gifting, festive occasions, or as a stunning centerpiece, this packaging evokes a sense of charm and sophistication, making every moment feel special. Chocolate in decorative dry flower packaging transforms ordinary occasions into delightful celebrations, blending sweetness, artistry, and nature's timeless beauty to create unforgettable memories.` },
  { id: 65, name: 'Heart Shape', weight: '60 gm', image: 'productlistings/heart_shapee.png', description: `Chocolate in heart-shaped packaging brings a touch of romance and joy to every celebration, making it an unforgettable gesture of love and affection. From silky truffles to decadent pralines and fruity delights, the assortment of chocolates inside perfectly complements the charm of the heart-shaped design. Ideal for occasions like anniversaries, Valentine's Day, or heartfelt surprises, this packaging adds a sentimental and playful flair. Chocolate in heart-shaped packaging transforms moments into cherished memories, blending sweetness and thoughtfulness to celebrate love and happiness in the most delightful way.` },
  { id: 66, name: 'Plastic Tray 3', weight: '385 gm', image: 'productlistings/plastic_tray_3.jpg', description: `Chocolate in plastic tray packaging offers a convenient and visually appealing way to make every celebration more delightful. The sturdy and transparent trays beautifully display an enticing assortment of chocolates—ranging from creamy truffles to nut-filled delights and exotic flavors—creating a feast for the eyes and the palate. Perfect for gifting, sharing, or enhancing festive gatherings, this packaging adds a touch of practicality and charm to any occasion. Chocolate in plastic tray packaging transforms moments into joyful celebrations filled with flavor, fun, and effortless elegance.` },
  { id: 67, name: 'Thaali 550', weight: '550 gm', image: 'productlistings/thaali_550.jpg', description: `Chocolate in thaal packaging exudes grandeur and tradition, turning any celebration into a truly majestic experience. The beautifully arranged thaal, filled with an array of chocolates—from nutty delights to exotic flavors—creates an inviting display that adds a sense of opulence to the occasion. Perfect for festive gatherings, gifting, or as a statement centerpiece, this packaging brings a blend of cultural heritage and indulgence. Chocolate in thaal packaging transforms simple moments into lavish celebrations, filling them with sweetness, joy, and a touch of timeless elegance that leaves a lasting impression.` },
  { id: 68, name: 'Pistachio Rocks', weight: '1000 gm+', image: 'productlistings/pista_rocks.png', description: `Chocolate in pistachio rock varieties offers a delightful crunch and a burst of flavor, making every celebration truly indulgent. The rich, creamy chocolate perfectly balances the nutty essence of pistachios, creating a satisfying and gourmet treat. Ideal for gifting, sharing, or savoring during festive gatherings, these pistachio rocks add a touch of sophistication and fun to any moment. Chocolate in pistachio rocks transforms simple occasions into memorable celebrations, blending sweetness, texture, and a hint of luxury to create joyful and flavorful experiences.` },
  { id: 69, name: 'MDF Basket 385', weight: '385 gm', image: 'productlistings/mdf_basket_385.png', description: `Chocolate in MDF basket packaging combines elegance and utility, turning any celebration into an extraordinary experience. These beautifully crafted baskets are designed to hold an assortment of chocolates, from nutty delights to exotic flavors, creating a presentation that’s both stylish and indulgent. Ideal for festive occasions, thoughtful gifting, or as a showpiece for gatherings, this packaging exudes sophistication while adding a personal touch. Chocolate in MDF basket packaging transforms ordinary moments into joyous celebrations, blending sweetness, creativity, and timeless charm to leave lasting impressions.` },
  { id: 70, name: 'Teddy Basket', weight: '200 gm', image: 'productlistings/teddy_basket_2.jpg', description: `Chocolate in teddy basket packaging brings a playful charm and heartwarming joy to every celebration, making it an instant favorite for all ages. The adorable teddy-shaped basket holds a delightful variety of chocolates—from nutty delights to exotic flavors—offering a sweet surprise with every bite. Perfect for gifting, party favors, or as a whimsical centerpiece, this packaging adds an element of fun and delight to special moments. Chocolate in teddy basket packaging transforms ordinary occasions into magical celebrations, blending sweetness, creativity, and a touch of cuddly charm to create memories that last forever.` },
  

  

];

products.forEach((product, index) => {
  product.id = index;
});


const productsPerPage = [16, 16, 16, 16, 6]; // Manual definition


function loadProducts(page = 1) {
  const container = document.getElementById('product-grid');
  container.innerHTML = '';

  let start = 0;
  for (let i = 0; i < page - 1; i++) {
    start += productsPerPage[i];
  }
  const end = start + productsPerPage[page - 1];

  const paginated = products.slice(start, end);

container.innerHTML = paginated.map((p, i) =>
  `<div style="background: #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
    <img src="${p.image}" alt="${p.name}" style="width: 246px; height: 181px; object-fit: cover; display: block; margin: 0 auto;">
    <div style="padding: 0.75rem;">
      <div style="font-weight: 600;">${p.name}</div>
      <div style="color: gray; font-size: 0.9rem;">${p.weight}</div>
      <a href="product_detail.html?id=${start + i}" 
         style="background: #f9c8dc; color: #b52a5d; margin-top: 0.5rem; display: inline-block; border: none; padding: 0.4rem 1rem; border-radius: 5px; text-decoration: none;">
         View
      </a>
    </div>
  </div>`
).join('');


  setupPagination();
}

function setupPagination() {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  pagination.innerHTML = '';
  pagination.style.display = 'flex';
  pagination.style.alignItems = 'center';
  pagination.style.justifyContent = 'center';
  pagination.style.gap = '12px';
  pagination.style.marginTop = '24px';

  const totalPages = productsPerPage.length;

  // ← Previous Button
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '← Previous';
  styleNavButton(prevBtn, currentpage === 1);
  prevBtn.disabled = currentpage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentpage > 1) {
      currentpage--;
      loadProducts(currentpage);
    }
  });
  pagination.appendChild(prevBtn);

  // Numbered page buttons
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.style.padding = '8px 16px';
    btn.style.borderRadius = '10px';
    btn.style.border = 'none';
    btn.style.fontSize = '14px';
    btn.style.fontWeight = '500';
    btn.style.cursor = 'pointer';
    btn.style.background = i === currentpage ? '#f9c8dc' : '#f3f3f3';
    btn.style.color = i === currentpage ? '#b52a5d' : '#1a1a1a';

    btn.addEventListener('click', () => {
      currentpage = i;
      loadProducts(currentpage);
    });

    pagination.appendChild(btn);
  }

  // → Next Button
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next →';
  styleNavButton(nextBtn, currentpage === totalPages);
  nextBtn.disabled = currentpage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentpage < totalPages) {
      currentpage++;
      loadProducts(currentpage);
    }
  });
  pagination.appendChild(nextBtn);
}

function styleNavButton(button, disabled) {
  button.style.padding = '8px 12px';
  button.style.border = 'none';
  button.style.borderRadius = '6px';
  button.style.fontSize = '14px';
  button.style.fontWeight = '500';
  button.style.background = 'transparent';
  button.style.color = '#1a1a1a';
  button.style.opacity = disabled ? '0.4' : '1';
  button.style.cursor = disabled ? 'default' : 'pointer';
}


window.onload = () => loadProducts(currentpage);


  

  