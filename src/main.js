import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }

  clearGallery();
  loader.classList.add('visible');

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.warning({ title: 'No Results', message: 'No images found. Try a different query.' });
      return;
    }
    renderImages(data.hits);
    new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    loader.classList.remove('visible');
  }
});
