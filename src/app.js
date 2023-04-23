import { elements } from './elements.js';

const rootElement = document.getElementById('cards');
let cardsHtml = "";
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    cardsHtml += `
    <div class="sticker card">
        <div>
            <a href ="${element.linkUrl}"><img src="${element.image}" alt="${element.imgAlt}" width="auto" height="150"></a>
        </div>
        <div class="info">
            <div class="details" id="1">
                <h3>${element.name}</h3>
                <p>${element.description}</p>
            </div>
            <a href="${element.linkUrl}" target="_self"class="button">order</a>
        </div>
    </div>
`
};
rootElement.innerHTML = cardsHtml;


