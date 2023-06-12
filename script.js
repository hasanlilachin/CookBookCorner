const searchInput = document.querySelector('#search-input');
const recipeCards = document.querySelectorAll('.recipe-card');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();

  recipeCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
const images = document.querySelectorAll('.recipe-image');

images.forEach(image => {
  image.addEventListener('click', function () {
    const imageUrl = this.getAttribute('src');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = `<img src="${imageUrl}" alt="Enlarged Image">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function () {
      document.body.removeChild(overlay);
    });
  });
});
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
const recipeForm = document.querySelector('#recipe-form');
const messageDiv = document.querySelector('#message');

recipeForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form field values
  const recipeName = document.querySelector('#recipe-name').value;
  const recipeDescription = document.querySelector('#recipe-description').value;
  const recipeIngredients = document.querySelector('#recipe-ingredients').value;
  const recipeInstructions = document.querySelector('#recipe-instructions').value;

  // Create an object to store the recipe data
  const recipeData = {
    name: recipeName,
    description: recipeDescription,
    ingredients: recipeIngredients,
    instructions: recipeInstructions
  };

  // Save the recipe data to localStorage
  localStorage.setItem('recipe', JSON.stringify(recipeData));

  // Display a success message
  messageDiv.textContent = 'Recipe submitted successfully!';
  messageDiv.style.color = 'green';

  // Clear the form inputs
  recipeForm.reset();
});


const likeButtons = document.querySelectorAll('.like-button');
const commentButtons = document.querySelectorAll('.comment-button');
const saveButtons = document.querySelectorAll('.save-button');

// Attach event listeners to like buttons
likeButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Perform actions when like button is clicked
    console.log('Like button clicked');
  });
});

// Attach event listeners to comment buttons
commentButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Perform actions when comment button is clicked
    const card = this.closest('.recipe-card');
    const commentForm = card.querySelector('.comment-form');
    commentForm.classList.toggle('show');
  });
});

// Attach event listeners to save buttons
saveButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Perform actions when save button is clicked
    console.log('Save button clicked');
  });
});
