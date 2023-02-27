const post_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1];

const newcommentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#content-newcomment').value.trim();

  if (content) {
    const response = await fetch(`/api/comment/${post_id}`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to submit a comment.');
    }
  }
};

document
  .querySelector('.newcomment-form')
  .addEventListener('submit', newcommentFormHandler);
