import restaurantImage from "./images/wanmin-restaurant.png";

export default () => {
    const content = document.createElement('div');
    const card = document.createElement('div');
    const heading = document.createElement('h1');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');

    card.className = 'card';
    heading.textContent = 'Wanmin Restaurant';
    image.src = restaurantImage;
    paragraph.textContent = "\
        Welcome to Wanmin Restaurant, the heart of Liyue Harbor's culinary scene. \
        Whether you are a local regular or a traveler lured in by the aroma \
        wafting through Chihu Rock, we believe that no one should settle for less \
        when they can feast like an Adeptus.";
    
    content.appendChild(card);
    card.appendChild(heading);
    card.appendChild(image);
    card.appendChild(paragraph);

    return content;
};
