export default () => {
    const content = document.createElement('div');
    const card = document.createElement('div');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');

    card.className = 'card';
    heading.textContent = 'About Tab';
    paragraph.textContent = "Can't be bothered writing.";
    
    content.appendChild(card);
    card.appendChild(heading);
    card.appendChild(paragraph);

    return content;
};