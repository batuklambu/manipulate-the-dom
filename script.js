quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // document.addEventListener('DOMContentLoaded', function (event) {
  //   // Random quote of the day generator
  //   const randomQuote = function () {
  //     document.querySelector('#quote-of-the-day').textContent = `"${
  //       quotes[Math.floor(Math.random() * quotes.length)]
  //     }"`;
  //   };
  //   randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let title = document.getElementById('main-title');
  title.textContent = 'Fast And Furious';

  // Part 2
  document.body.style.backgroundColor = 'grey';

  // // Part 3

  let favoriteThings = document.getElementById('favorite-things');
  let favoriteThingsList = favoriteThings.getElementsByTagName('li');
  let last = favoriteThingsList[favoriteThingsList.length - 1];
  favoriteThings.removeChild(last);
  // let lastItem = document.querySelector('li:nth-child(6)');
  // lastItem.parentElement.removeChild(lastItem);

  // Part 4

  let specialTitlesElements = document.getElementsByClassName('special-title');
  for (let i of specialTitlesElements) {
    i.style.fontSize = '2rem';
  }

  // Part 5

  let removeChicago = document.querySelector('li:nth-child(4)');
  removeChicago.parentElement.removeChild(removeChicago);

  // Part 6

  let ul = document.getElementById('past-races');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode('Mexico'));
  ul.appendChild(li);

  // Part 7

  let div1 = document.createElement('div');
  div1.classList.add('blog-post', 'purple');
  let h2 = document.createElement('h2');
  h2.textContent = 'Mexico';
  div1.appendChild(h2);
  let p = document.createElement('p');
  p.textContent = 'I BURSTED ARTURO BRAGA CARTEL';
  div1.appendChild(p);
  let mainEl = document.querySelector('div.main');
  mainEl.appendChild(div1);
  h2.style.color = '#fff';

  //Part 8
  let quoteTitle = document.getElementById('quote-title');
  quoteTitle.addEventListener('click', function (evt) {
    randomQuote();
  });

  // Part 9

  const blogPosts = document.querySelectorAll('.blog-post');

  blogPosts.forEach((item) => {
    item.addEventListener('mouseout', function (evt) {
      evt.currentTarget.classList.toggle('purple');
    });

    item.addEventListener('mouseenter', function (evt) {
      evt.currentTarget.classList.toggle('red');
    });
  });
});
