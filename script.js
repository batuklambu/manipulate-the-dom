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

  const li = document.createElement('li');
  li.textContent = 'Mexico';
  document.querySelector('#past-races').appendChild(li);

  // let ul = document.getElementById('past-races');
  // let li = document.createElement('li');
  // // li.appendChild(document.createTextNode('Mexico'));
  // li.textContent = 'Mexico';
  // ul.appendChild(li);

  // Part 7

  const blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');
  blogPost.classList.add('purple');
  const heading = document.createElement('h1');
  heading.textContent = 'Mexico';
  const pEl = document.createElement('p');
  pEl.textContent = 'My hometown  is Mexico';
  document.querySelector('.main').appendChild(blogPost);
  blogPost.appendChild(heading);
  blogPost.appendChild(pEl);

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
