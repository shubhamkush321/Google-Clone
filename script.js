// search by icon
function performSearch() {
  const searchInput = document.getElementById('search-box').value;
  if (searchInput.trim() !== '') {
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
    window.location.href = searchUrl;
  }
}

// cross icon hide when type or not
const clear = document.querySelector('.cross');
      const searchInput = document.getElementById('search-box');
      
      searchInput.addEventListener('input', () => {
        const search_text = searchInput.value.trim();
        if (search_text.length >= 1) {
          clear.style.display = 'block';
        } else {
          clear.style.display = 'none';
        }
      });
      function clearSearch() {
        searchInput.value = '';
        clear.style.display = 'none';
      }

      // search by below button
      function performGoogleSearch() {
        const query = searchInput.value;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
      }