function handleClick() {
  const button = document.getElementById('btn');
  const heading = document.querySelector('h1');

  heading.style.color = 'red';
  button.textContent = 'clicked';
}
function renderContent() {
  const button = document.getElementById('btn');

  // create h2
  const heading = document.createElement('h2');
  heading.textContent = 'This is rendered heading';

  // create image
  const image = document.createElement('img');
  image.src = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/a3/97/predator-ride-in-the.jpg?w=900&h=500&s=1';
  image.alt = 'Sample Image';
  image.style.display = 'block';
  image.style.marginTop = '10px';

  // insert below button
  button.insertAdjacentElement('afterend', heading);
  heading.insertAdjacentElement('afterend', image);

}