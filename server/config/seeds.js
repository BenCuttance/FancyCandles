const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Candle' },
    { name: 'Diffusers' },
    { name: 'Oils' },
    { name: 'Gifts' },
    { name: 'Homewares' },
    
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([

    //___________ SEED CANDLES ______________
    {
      name: 'Bedroom Candle',
      description:
        'Transform your bedroom into a cozy oasis with our enchanting Bedroom Candle. Crafted with a soothing blend of lavender and vanilla, this hand-poured soy candle creates an ambiance of relaxation and tranquility. Whether you are winding down after a long day or setting the mood for a peaceful evening, the gentle flicker of this candle will add a touch of warmth to your space. Elevate your bedroom experience with the calming fragrance and gentle glow of our Bedroom Candle.',
      image: 'Candle-bedroom.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Bianco Bergamot Candle',
      description:
        'Elevate your senses with the luxurious Bianco Bergamot Candle. Infused with the invigorating essence of bergamot oranges, this exquisite soy candle fills your space with a refreshing and uplifting aroma. The sleek and elegant design complements any decor, making it a perfect addition to your home. Light up the Bianco Bergamot Candle to create an inviting atmosphere that revitalizes your surroundings and leaves a lasting impression.',
      image: 'Candle-bianco-bergamot.png',
      category: categories[0]._id,
      price: 11.99,
      quantity: 500
    },
    {
      name: 'Boho Candle',
      description:
        'Embrace the free-spirited vibes of our Boho Candle and add a touch of wanderlust to your space. With a unique blend of earthy patchouli, zesty citrus, and warm vanilla, this hand-poured soy candle captures the essence of bohemian living. The artistic jar design adds a boho-chic flair to your décor, making it a statement piece in any room. Ignite the Boho Candle to transport yourself to a realm of relaxation and creativity, where the flickering flame dances to its own rhythm.',
      image: 'Candle-boho.jpg',
      category: categories[0]._id,
      price: 18.99,
      quantity: 500
    },
    {
      name: 'Bubble Candle',
      description:
        'Introducing our captivating Bubble Candle – a true modern masterpiece for your living space. Crafted with meticulous attention to detail, this unscented paraffin wax candle features a unique bubbled texture that exudes contemporary elegance. Whether displayed as a standalone art piece or a striking centerpiece, the Bubble Candle effortlessly combines form and function. Illuminate your surroundings with its warm glow, casting enchanting shadows that playfully dance along the textured surface, creating a captivating ambiance.',
      image: 'Candle-bubble.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 500
    },
    {
      name: 'Capri Blue Candle',
      description:
        'Indulge in the alluring scents of the Capri Blue Candle collection. Each hand-poured soy wax candle is meticulously crafted to transport you to exotic destinations. From the vibrant energy of tropical fruits to the soothing tranquility of coastal breezes, every fragrance captures a distinct essence. The elegant jar design adds a touch of sophistication to your decor, making these candles as visually pleasing as they are aromatic. Elevate your space with the enchanting fragrances of Capri Blue Candles and create an atmosphere that is both inviting and unforgettable.',
      image: 'Candle-capri-blue.jpg',
      category: categories[0]._id,
      price: 24.99,
      quantity: 500
    },
    {
      name: 'Glassed Boho Candle',
      description:
        'Experience the enchanting fusion of style and scent with our Glassed Boho Candle. Encased in a beautifully textured glass jar, this hand-poured soy candle brings bohemian vibes and inviting warmth to any room. The delicate aroma, inspired by earthy sandalwood and blossoming florals, takes you on a sensory journey that soothes the soul. As the flame dances within the unique glass container, intricate patterns playfully dance across your space, adding a touch of artistry to your decor. Elevate your surroundings with the captivating allure of the Glassed Boho Candle.',
      image: 'Candle-glassed-boho.jpg',
      category: categories[0]._id,
      price: 18.99,
      quantity: 500
    },
    {
      name: 'Glassed Pearls Candle',
      description:
        'Introducing the exquisite Glassed Pearls Candle – a luminous gem for your living space. Encased in a delicately designed glass jar reminiscent of glistening pearls, this soy wax candle adds a touch of elegance to any room. The soft, sophisticated fragrance profile of delicate florals and subtle musk evokes a sense of serenity and luxury. Illuminate your space with the warm, flickering glow and let the Glassed Pearls Candle be the centerpiece that elevates your ambiance to a realm of refined beauty and tranquility.',
      image: 'Candle-glassed-pearls.jpg',
      category: categories[0]._id,
      price: 28.99,
      quantity: 500
    },
    {
      name: 'Halem Candle',
      description:
        'Unveil the mysteries of enchanting scents with our Halem Candle. Inspired by the beauty of twilight, this handcrafted soy wax candle captures the essence of a serene evening with its blend of rich amber, warm vanilla, and subtle notes of spice. Encased in a sleek, minimalist container, the Halem Candle complements any decor while emanating a soothing glow. Ignite this candle to experience the magical allure of dusk in the comfort of your own space, creating an atmosphere that is as inviting as it is captivating.',
      image: 'Candle-halem.png',
      category: categories[0]._id,
      price: 18.99,
      quantity: 500
    },
    {
      name: 'Shell Candle',
      description:
        'Bring the oceans serene beauty into your home with our Shell Candle. Crafted to resemble a delicate seashell, this unique soy wax candle is a work of art and a soothing addition to your decor. As the flame flickers within the intricately designed shell, it casts mesmerizing patterns, creating an ambiance reminiscent of beachside tranquility. The subtle fragrance of sea breeze and soft florals completes the sensory experience, transporting you to coastal shores. Illuminate your space with the Shell Candle and infuse your surroundings with the calming spirit of the sea.',
      image: 'Candle-shell.jpg',
      category: categories[0]._id,
      price: 8.99,
      quantity: 500
    },
    {
      name: 'Turin Leather Candle',
      description:
        'Experience the allure of sophistication with our Turin Leather Candle. Inspired by the opulence of fine leather, this hand-poured soy candle encapsulates the essence of luxury and refinement. The rich aroma of genuine leather is carefully blended with hints of smoky woods, creating an ambiance that is both warm and distinguished. Encased in an elegantly designed container, the Turin Leather Candle adds a touch of class to any space. Ignite the flame to envelop your surroundings in a distinctive fragrance that evokes the timeless charm of leather-bound books and luxurious interiors.',
      image: 'Candle-turin-leather.png',
      category: categories[0]._id,
      price: 22.99,
      quantity: 500
    },
    {
      name: 'Verone Leather Candle',
      description:
        'Introducing the Verone Leather Candle – a symphony of elegance and allure. Crafted with meticulous attention to detail, this soy wax candle captures the essence of opulent leather and refined craftsmanship. The rich aroma, reminiscent of aged leather and hints of spice, infuses your space with an air of sophistication. Encased in a minimalist container, the Verone Leather Candle is a statement piece that complements any decor. Illuminate your surroundings with its warm, flickering glow and let the luxurious scent transport you to a world of timeless refinement and style.',
      image: 'Candle-verona-leather.png',
      category: categories[0]._id,
      price: 23.99,
      quantity: 500
    },


//_____________ SEED DIFFUSER __________________

    {
      name: 'Botanical Diffuser',
      category: categories[1]._id,
      description:
        'Elevate your space with the natural elegance of our Botanical Diffuser. Designed to infuse your surroundings with gentle and lasting fragrance, this diffuser features a blend of botanical oils that create a serene and refreshing ambiance. The minimalist design seamlessly integrates with your decor, while the reed sticks disperse the aroma effortlessly. Enjoy the tranquility that comes with the subtle scents of nature as they waft through your home, providing a sense of calm and rejuvenation. Indulge in the art of aromatherapy with our Botanical Diffuser and embrace the serenity of the natural world.',
      image: 'Diffuser-botanical.jpg',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Campanula Blossom Diffuser',
      category: categories[1]._id,
      description:
        'Experience the delicate beauty of nature with our Campanula Blossom Diffuser. Immerse yourself in the enchanting fragrance of blooming campanula flowers, carefully captured in this elegant diffuser. The artistic design seamlessly blends into your decor, while the reed sticks gently disperse the floral aroma, creating a soothing and inviting atmosphere. Transform your space into a serene sanctuary where the essence of blossoming gardens lingers in the air. Let the Campanula Blossom Diffuser redefine your sensory experience and bring the tranquility of nature indoors.',
      image: 'Diffuser-campanula-blossom.jpeg',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Craft Flower Diffuser',
      category: categories[1]._id,
      description:
        'Introducing the Craft Flower Diffuser – an artistic blend of aesthetics and fragrance. Crafted with a keen eye for design, this diffuser features a handcrafted flower topper that elegantly absorbs and releases delicate scents into your space. Choose from an array of captivating floral-inspired aromas to create a personalized ambiance that resonates with your senses. The sleek container seamlessly integrates into your decor, making it a functional work of art. Immerse yourself in the beauty of craftsmanship and fragrance as the Craft Flower Diffuser transforms your environment into a fragrant oasis.',
      image: 'Diffuser-craft-flower.jpg',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Crystal Light Diffuser',
      category: categories[1]._id,
      description:
        'Discover the harmonious blend of aesthetics and aromatherapy with our Crystal Light Diffuser. Designed to radiate tranquility, this diffuser features a mesmerizing crystal-inspired light that adds a touch of elegance to your space. Choose from a variety of soothing essential oil blends to infuse your surroundings with calming scents. The subtle, color-changing light creates a serene ambiance while dispersing the fragrance, creating a multi-sensory experience that promotes relaxation and rejuvenation. Elevate your environment with the Crystal Light Diffuser and immerse yourself in the calming embrace of soft light and soothing aromas.',
      image: 'Diffuser-crystal-light.jpeg',
      price: 23.99,
      quantity: 20
    },
    {
      name: 'Dry Flowers Diffuser',
      category: categories[1]._id,
      description:
        'Bring the timeless beauty of dried flowers into your home with our Dry Flowers Diffuser. Capturing the essence of natures charm, this diffuser combines the visual appeal of dried flower arrangements with the soothing power of aromatherapy. The minimalist design seamlessly blends into any decor, making it a tasteful addition to your space. As the reed sticks delicately disperse the fragrant oils, you will experience the gentle scents of nature filling the air. Immerse yourself in the calming and rejuvenating ambiance created by the Dry Flowers Diffuser, and let the beauty of dried flowers inspire your senses.',
      image: 'Diffuser-dry-flowers.jpg',
      price: 23.99,
      quantity: 20
    },
    {
      name: 'Flame Diffuser',
      category: categories[1]._id,
      description:
        'Experience the captivating allure of our Flame Diffuser – a modern reinterpretation of warmth and fragrance. This innovative diffuser features a gentle, flickering LED flame that mimics the comforting glow of a real candle. Choose from an array of luxurious scents to elevate your surroundings, as the gentle diffusion technology disperses the fragrance throughout your space. The sleek and contemporary design complements any decor, adding a touch of elegance. Create a soothing atmosphere that combines the ambiance of a candlelit room with the power of aromatherapy using our Flame Diffuser, and let the gentle glow and inviting scents envelop you.',
      image: 'Diffuser-flame.jpeg',
      price: 29.99,
      quantity: 20
    },
    {
      name: 'Pines Diffuser',
      category: categories[1]._id,
      description:
        'Capture the essence of a tranquil forest with our Pines Diffuser. Immerse yourself in the invigorating scent of pine trees, carefully distilled to evoke the serenity of natures green havens. The minimalist design effortlessly integrates with your decor, while the reed sticks gently disperse the crisp, refreshing aroma. Transport your senses to a peaceful woodland retreat as the Pines Diffuser infuses your space with the clean and revitalizing fragrance of pine needles. Embrace the tranquility of the great outdoors in the comfort of your home with this enchanting diffuser.',
      image: 'Diffuser-pines.jpeg',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Sakura Flower Diffuser',
      category: categories[1]._id,
      description:
        'Embrace the fleeting beauty of cherry blossoms with our Sakura Flower Diffuser. Delicately capturing the enchanting scent of sakura flowers in full bloom, this diffuser brings a touch of elegance and serenity to your space. The artistic design of the flower topper and the sleek container seamlessly integrate into any decor, creating a harmonious visual and aromatic experience. Let the reed sticks disperse the gentle fragrance, transforming your surroundings into a haven of tranquility and beauty. Elevate your ambiance with the Sakura Flower Diffuser and immerse yourself in the evocative aroma of cherry blossoms.',
      image: 'Diffuser-sakura-flower.jpeg',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Wood Light Diffuser',
      category: categories[1]._id,
      description:
        'Experience the fusion of natural aesthetics and soothing aromatherapy with our Wood Light Diffuser. Crafted to embody the warmth of wood, this diffuser features an ambient light that adds a touch of tranquility to your space. Choose from a variety of calming essential oil blends to create an atmosphere that resonates with your senses. The minimalist design effortlessly complements your decor, making it a functional and decorative piece. Immerse yourself in the soothing glow and fragrant embrace as the Wood Light Diffuser transforms your environment into a haven of relaxation and well-being.',
      image: 'Diffuser-wood-light.jpeg',
      price: 27.99,
      quantity: 20
    },
    {
      name: 'Craft Flower Diffuser',
      category: categories[1]._id,
      description:
        'Elevate your space with the timeless charm of our Craft Flower Diffuser. Meticulously designed, this diffuser features a delicate, handcrafted flower topper that not only captivates the eye but also releases enchanting aromas into your surroundings. The sleek container seamlessly blends with your decor, making it a tasteful addition to any room. Choose from a selection of alluring scents to personalize your ambiance. Allow the Craft Flower Diffuser to infuse your space with its artistic elegance and delightful fragrances, creating a serene and welcoming atmosphere that rejuvenates your senses.',
      image: 'Diffuser-craft-flower.jpg',
      price: 7.99,
      quantity: 20
    },
    
    //_______________ SEED OILS ___________________
    {
      name: 'Bergamot Oil',
      category: categories[2]._id,
      description:
        'Discover the uplifting and refreshing aroma of Bergamot Oil. Extracted from the peel of the citrus fruit, bergamot offers a unique blend of citrusy brightness with subtle floral undertones. Known for its mood-boosting properties, this essential oil brings a sense of positivity and energy to your space. Whether diffused to create an invigorating atmosphere or added to your skincare routine for its purifying benefits, Bergamot Oil is a versatile addition to your wellness regimen. Embrace the vibrant and zesty notes of bergamot to uplift your mood and infuse your environment with its delightful fragrance.',
      image: 'Oil-bergamot.jpg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Cinnamon Oil',
      category: categories[2]._id,
      description:
        'Experience the cozy and comforting aroma of Cinnamon Oil. Derived from the bark of the cinnamon tree, this essential oil brings the warm and spicy scent of cinnamon into your space. With its inviting fragrance, Cinnamon Oil is often used to create a cozy ambiance during colder months or to evoke feelings of comfort and nostalgia. Whether added to your diffuser for a festive atmosphere or incorporated into DIY projects like candles or potpourri, Cinnamon Oil adds a touch of warmth and charm to your surroundings. Embrace the delightful and familiar aroma of cinnamon and create an inviting atmosphere that soothes the senses.',
      image: 'Oil-cinnamon.jpg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Grapefruit Oil',
      category: categories[2]._id,
      description:
        'Awaken your senses with the vibrant and uplifting aroma of Grapefruit Oil. Extracted from the peel of ripe grapefruits, this essential oil offers a refreshing burst of citrus that invigorates your space and mood. Known for its energizing and clarifying properties, Grapefruit Oil is often used to promote feelings of positivity and focus. Diffuse it to create a revitalizing atmosphere or add a few drops to your skincare routine for its purifying benefits. Let the zesty and invigorating notes of Grapefruit Oil brighten your day and infuse your environment with a burst of natural vitality.',
      image: 'Oil-grapefruit.jpeg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Lavander Oil',
      category: categories[2]._id,
      description:
        'Experience the soothing and timeless fragrance of Lavender Oil. Distilled from the lavender plants flowers, this essential oil brings a sense of tranquility and relaxation to your space. With its calming and balancing properties, Lavender Oil is a popular choice for promoting restful sleep and reducing stress. Diffuse it to create a serene and peaceful ambiance or add a few drops to your bath for a luxurious and calming soak. Let the gentle and floral aroma of Lavender Oil envelop your surroundings, offering a moment of tranquility and a touch of natural serenity.',
      image: 'Oil-lavander.jpeg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Lime Oil',
      category: categories[2]._id,
      description:
        'Infuse your space with the lively and invigorating scent of Lime Oil. Extracted from the peel of fresh limes, this essential oil offers a zesty and citrusy aroma that uplifts the senses. With its energizing and refreshing properties, Lime Oil is a great choice for creating an atmosphere of positivity and vitality. Whether diffused to awaken your space or added to natural cleaning products for its purifying qualities, Lime Oil brings a vibrant and rejuvenating touch to your environment. Embrace the lively and cheerful notes of Lime Oil and let its aroma brighten up your surroundings with a burst of natural freshness.',
      image: 'Oil-lime.jpeg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Orange Oil',
      category: categories[2]._id,
      description:
        'Experience the joyful and invigorating aroma of Orange Oil. Extracted from the peels of sweet oranges, this essential oil offers a bright and uplifting fragrance that brings a sense of happiness to your space. Known for its energizing and refreshing properties, Orange Oil is often used to create an atmosphere of positivity and cheerfulness. Diffuse it to evoke feelings of warmth and comfort or add a few drops to your homemade cleaning solutions for a naturally fresh scent. Let the vibrant and citrusy notes of Orange Oil infuse your environment with a burst of natural vitality and positivity.',
      image: 'Oil-orange.jpg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Patchouli Oil',
      category: categories[2]._id,
      description:
        'Discover the earthy and grounding scent of Patchouli Oil. Derived from the leaves of the patchouli plant, this essential oil offers a rich and woody aroma that promotes a sense of balance and calm. With its calming and centering properties, Patchouli Oil is often used in aromatherapy to create a serene and relaxing atmosphere. Diffuse it to create a peaceful ambiance or add a few drops to your skincare routine for its skin-loving benefits. Embrace the deep and comforting notes of Patchouli Oil and let its warm and woody aroma envelop your surroundings with a touch of natural tranquility.',
      image: 'Oil-patchouli.jpeg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Peppermint Oil',
      category: categories[2]._id,
      description:
        'Invigorate your senses with the refreshing and energizing aroma of Peppermint Oil. Extracted from the leaves of peppermint plants, this essential oil offers a cool and minty scent that revitalizes your space and mind. With its invigorating and stimulating properties, Peppermint Oil is a popular choice for promoting focus and clarity. Diffuse it to create a revitalizing atmosphere or add a few drops to your DIY products for a refreshing twist. Let the crisp and invigorating notes of Peppermint Oil awaken your environment, offering a burst of natural energy and a breath of fresh air.',
      image: 'Oil-peppermint.jpg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Rosemary Oil',
      category: categories[2]._id,
      description:
        'Immerse yourself in the invigorating and aromatic world of Rosemary Oil. Derived from the leaves of the rosemary plant, this essential oil offers a herbaceous and rejuvenating fragrance that stimulates the senses. With its clarifying and refreshing properties, Rosemary Oil is often used to promote mental clarity and focus. Diffuse it to create an atmosphere of alertness or add a few drops to your massage oil for a soothing and revitalizing experience. Embrace the fragrant and invigorating notes of Rosemary Oil, and let its herbal aroma uplift your surroundings with a touch of natural vitality.',
      image: 'Oil-rosemary.jpeg',
      price: 17.99,
      quantity: 30
    },
    {
      name: 'Tea tree Oil',
      category: categories[2]._id,
      description:
        'Experience the purifying and invigorating scent of Tea Tree Oil. Extracted from the leaves of the tea tree, this essential oil offers a fresh and herbal aroma that promotes a sense of cleanliness and renewal. Known for its purifying and cleansing properties, Tea Tree Oil is often used to support a healthy environment. Diffuse it to create an atmosphere of freshness or add a few drops to your skincare routine for its skin-loving benefits. Let the crisp and rejuvenating notes of Tea Tree Oil infuse your space with a burst of natural vitality and a feeling of purity.',
      image: 'Oil-tea-tree.jpeg',
      price: 17.99,
      quantity: 30
    },


    //_______________ SEED HOMEWARES ________________
    {
      name: 'Boho Candle Holder',
      category: categories[4]._id,
      description: 'Elevate your decor with our Boho Candle Holder, a captivating fusion of art and functionality. Crafted with intricate patterns and earthy textures, this candle holder adds a touch of bohemian charm to any space. Designed to hold your favorite candles, it creates a mesmerizing play of light and shadows as the flame dances within. Whether as a centerpiece or an accent piece, the Boho Candle Holder brings a sense of warmth and artistic flair to your surroundings. Embrace the bohemian spirit and let this holder be a unique expression of your style and creativity.',
      image: 'Homeware-boho-candle-holder.png',
      price: 41.99,
      quantity: 10
    },
    {
      name: 'Boho Candle Lantern Kit',
      category: categories[4]._id,
      description:
        'Unleash your creativity with our Boho Candle Lantern Kit – a complete package to craft your own unique masterpiece. This DIY kit includes a beautifully designed lantern, a variety of candles, and an array of bohemian-inspired embellishments. Let your imagination run wild as you create a personalized lantern that reflects your style. Whether as a decorative piece or a functional light source, the Boho Candle Lantern Kit adds an enchanting touch to any space. Embrace the joy of crafting and bring a touch of bohemian magic to your surroundings with this all-inclusive kit.',
      image: 'Homeware-boho-candle-lantern-kit.png',
      price: 52.99,
      quantity: 10
    },
    {
      name: 'Candle Holder',
      category: categories[4]._id,
      description:
        'Elevate your candle display with our exquisite Candle Holder. Carefully crafted with attention to detail, this holder adds an elegant touch to your space while keeping your candles secure. Its versatile design seamlessly blends with various decor styles, making it a perfect accent piece for any room. Whether you are creating a cozy ambiance or adding a decorative element, the Candle Holder is a stylish and functional addition to your home. Illuminate your space with flickering candlelight, enhanced by the timeless elegance of our Candle Holder.',
      image: 'Homeware-candle-holder.jpg',
      price: 32.99,
      quantity: 10
    },
    {
      name: 'Couch Cover',
      category: categories[4]._id,
      description:
        'Transform your living space with our premium Couch Cover. Crafted for both style and protection, this cover seamlessly drapes over your couch, revitalizing its appearance while safeguarding it from spills, stains, and everyday wear. With a wide range of colors and patterns to choose from, you can effortlessly match your decor and express your personal style. The durable fabric and snug fit ensure that your couch remains comfortable and inviting. Elevate the longevity and aesthetic of your furniture with our Couch Cover, giving your home a fresh, updated look with ease.',
      image: 'Homeware-couch-cover.jpeg',
      price: 27.99,
      quantity: 10
    },
    {
      name: 'Cushions',
      category: categories[4]._id,
      description:
        'Add comfort and style to your living space with our luxurious Cushions. Carefully curated for a perfect blend of aesthetics and coziness, these cushions bring a touch of elegance to your decor. Choose from a variety of colors, patterns, and textures to suit your personal taste and interior design. Whether placed on your couch, bed, or chairs, our cushions effortlessly elevate the comfort and visual appeal of your space. Indulge in relaxation and elevate the ambiance of your home with our collection of exquisitely crafted cushions.',
      image: 'Homeware-cushions.jpg',
      price: 17.99,
      quantity: 10
    },
    {
      name: 'Diffuser Vase',
      category: categories[4]._id,
      description:
        'Elevate your aromatherapy experience with our stunning Diffuser Vase. Designed to seamlessly integrate beauty and functionality, this vase doubles as an essential oil diffuser. Simply add water and a few drops of your favorite essential oil to create a calming and fragrant atmosphere. The elegant design complements any decor, making it a stylish addition to your living space. Enjoy the benefits of both visual and aromatic delight as the Diffuser Vase transforms your home into a haven of relaxation and wellness.',
      image: 'Homeware-diffuser-vase.jpg',
      price: 27.99,
      quantity: 10
    },
    {
      name: 'Wall Macrame',
      category: categories[4]._id,
      description:
        'Enhance your interior with the intricate artistry of our Wall Macrame. Handcrafted with meticulous attention to detail, this exquisite piece adds texture and bohemian charm to any room. Suspended from your wall, the macrames intricate knots and patterns create a captivating focal point that complements a variety of decor styles. Whether you are seeking to infuse your space with a touch of nature-inspired elegance or looking to express your artistic flair, our Wall Macrame brings a unique and enchanting aesthetic to your surroundings.',
      image: 'Homeware-macrame.jpeg',
      price: 57.99,
      quantity: 5
    },
    {
      name: 'Pendant Lamp',
      category: categories[4]._id,
      description:
        'Illuminate your space with the captivating charm of our Pendant Lamp. Designed to be both functional and stylish, this lamp adds a touch of elegance to any room. Suspended from the ceiling, the pendant lamps sleek design and adjustable length make it a versatile lighting solution that complements various decor styles. Whether you are creating a cozy reading nook or adding a statement piece to your dining area, our Pendant Lamp provides warm and inviting illumination, enhancing the ambiance of your space with its unique blend of form and function.',
      image: 'Homeware-pendant-lamp.jpeg',
      price: 47.99,
      quantity: 20
    },
    {
      name: 'Rattan Shelf',
      category: categories[4]._id,
      description:
        'Elevate your storage solutions with our Rattan Shelf – a perfect blend of functionality and natural aesthetics. Crafted from durable rattan, this shelf adds a touch of rustic elegance to your decor while providing a practical place to organize and display your belongings. Whether in your living room, bedroom, or bathroom, the Rattan Shelf offers versatile storage for books, plants, or decorative items. Embrace the charm of nature-inspired design and enhance your space with the inviting warmth and texture of our Rattan Shelf.',
      image: 'Homeware-rattan-shelf.jpg',
      price: 27.99,
      quantity: 10
    },
    {
      name: 'Table Lamp',
      category: categories[4]._id,
      description:
        'Illuminate your surroundings with our elegant Table Lamp, a perfect fusion of style and functionality. Designed to complement your decor, this lamp adds a soft and inviting glow to any space. Whether placed on a bedside table, desk, or sideboard, the Table Lamp provides focused lighting for tasks and creates a cozy ambiance. Choose from various designs and materials to match your aesthetic, and let the Table Lamp be a stylish addition that enhances both your decor and the comfort of your environment.',
      image: 'Homeware-table-lamp.jpg',
      price: 27.99,
      quantity: 10
    },
       //_____________ SEED GIFTS __________________
       {
        name: 'Boho Pack',
        category: categories[3]._id,
        description:
          'Elevate your ambiance with our boho candle pack, which includes two exquisitely designed candles and a pair of intricately detailed candle holders, all inspired by the bohemian aesthetic.',
        image: 'bubble-Candle-Gift.jpg',
        price: 39.99,
        quantity: 10
      },
      {
        name: 'Diffuser Gift Pack',
        category: categories[3]._id,
        description:
          'Immerse yourself in the ultimate aromatic experience with our luxurious diffuser gift pack. This exquisite set features our elegant wood light diffuser accompanied by a curated selection of five distinct oils, including refreshing peppermint, warming cinnamon, soothing lavender, and the uplifting scents of orange and bergamot. With this collection, you\'ll have a myriad of wonderful options to explore and create your perfect ambience',
        image: 'Homeware-table-lamp.jpg',
        price: 44.99,
        quantity: 10
      },
      {
        name: 'Gift Pack for Her',
        category: categories[3]._id,
        description:
          'Indulge her senses in pure delight with a thoughtful gift set that includes two enchanting bedroom candles, a mesmerizing crystal diffuser, and a trio of special oils. Elevate the mood with the captivating aromas of tea tree, patchouli, and cinnamon, creating an ambiance that\'s as unique as it is enchanting.',
        image: 'Homeware-table-lamp.jpg',
        price: 49.99,
        quantity: 10
      },
      {
        name: 'Gift Pack for Him',
        category: categories[3]._id,
        description:
          'Unveil a world of sophistication with our distinguished gift pack designed for him. Featuring the rich allure of the Verone leather candle and complemented by a sleek flame diffuser, this set comes complete with three invigorating oils: bergamot, lime, and grapefruit. Elevate his surroundings with a blend of refined scents that mirror his distinctive style and taste',
        image: 'Homeware-table-lamp.jpg',
        price: 49.99,
        quantity: 10
      },
      {
        name: 'Homewares Collection Pack',
        category: categories[3]._id,
        description:
          'Transform your living space into a haven of comfort and charm with our homeware collection pack. Enveloping you in coziness, this set includes two plush cushions, a stylish couch cover, and an elegant pendant lamp. Elevate any room to an enchanting realm where comfort meets style, creating a truly magical ambiance that\'s perfect for relaxation and rejuvenation.',
        image: 'Homeware-table-lamp.jpg',
        price: 49.99,
        quantity: 5
      },
      {
        name: 'The Centre Piece Pack',
        category: categories[3]._id,
        description:
          'Elevate your interior decor with our captivating centerpiece pack, featuring the exquisite Rattan shelf, two charming shell candles, and the boho candle kit. Designed to captivate, this ensemble effortlessly draws eyes and admiration, infusing your space with an air of natural elegance and artistic charm that\'s sure to leave a lasting impression.',
        image: 'Homeware-table-lamp.jpg',
        price: 54.99,
        quantity: 5
      },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
