import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div, index) => {
      // First column: image or icon
      if (index === 0) {
        // Check if it has a picture (image)
        if (div.querySelector('picture')) {
          div.className = 'cards-card-image';
        } 
        // Check if it's just text/emoji (icon) - no nested elements or just text content
        else if (div.children.length === 0 || (div.children.length === 1 && div.textContent.trim() && !div.querySelector('p, h1, h2, h3, h4, h5, h6'))) {
          div.className = 'cards-card-image';
        } 
        // Otherwise treat as body content
        else {
          div.className = 'cards-card-body';
        }
      } 
      // Subsequent columns: body content
      else {
        div.className = 'cards-card-body';
      }
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.replaceChildren(ul);
}
