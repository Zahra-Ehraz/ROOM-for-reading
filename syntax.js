/**
 * The Reading Room - Core Frontend Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initCartCounter();
  initHeroSlider();
  initCategoryFilters();
});

/**
 * 1. Shopping Cart Micro-interactions
 * Tracks added items and provides temporary visual feedback on the button
 */
function initCartCounter() {
  let cartItemCount = 0;
  const cartCountElement = document.getElementById('cartCount');
  const addToCartButtons = document.querySelectorAll('.btn-add-cart');

  if (!cartCountElement || addToCartButtons.length === 0) return;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Increment total item count
      cartItemCount++;
      cartCountElement.textContent = cartItemCount;

      // Create a scale bounce effect on the badge count
      cartCountElement.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
      }, 200);

      // Temporary visual button state toggle (Feedback Loop)
      const originalMarkup = button.innerHTML;
      button.style.backgroundColor = '#D2AE6D'; // Accent Gold color
      button.innerHTML = '<i class="fa-solid fa-check"></i> Added';
      button.disabled = true;

      // Revert back to ready state after short delay
      setTimeout(() => {
        button.style.backgroundColor = 'var(--bg-dark-green)';
        button.innerHTML = originalMarkup;
        button.disabled = false;
      }, 1200);
    });
  });
}

/**
 * 2. Hero Interactive Dots Selection
 * Manages active configurations across sliding navigation indicator points
 */
function initHeroSlider() {
  const dots = document.querySelectorAll('.dot');
  
  if (dots.length === 0) return;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Clear previously active dot flag states
      dots.forEach(d => d.classList.remove('active'));
      
      // Assign active presentation layout to target dot selection
      dot.classList.add('active');
      
      // Optional extension hook: Trigger sliding logic for your background views here
      // console.log(`Slide viewport changed to deck frame index: ${index}`);
    });
  });
}

/**
 * 3. Horizontal Category Grid Actions
 * Enhances response feedback when interacting with structural retail categories
 */
function initCategoryFilters() {
  const categoryCards = document.querySelectorAll('.category-card');

  if (categoryCards.length === 0) return;

  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.querySelector('span')?.textContent || 'Selected category';
      
      // Simple border pulse response simulation
      card.style.borderColor = 'var(--bg-dark-green)';
      setTimeout(() => {
        card.style.borderColor = '#EAE5DB';
      }, 400);

      // Optional extension hook: Filter visibility logic for your grids here
      // console.log(`Filtering product index lists targeting category profile: ${categoryName}`);
    });
  });
}