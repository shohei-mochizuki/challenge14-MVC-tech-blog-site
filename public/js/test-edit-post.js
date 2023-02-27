const updatepostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-updatepost').value.trim();
  const content = document.querySelector('#content-updatepost').value.trim();

  if (title && content) {
    const response = await fetch('/api/post', {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update a post.');
    }
  }
};

document
  .querySelector('.updatepost-form')
  .addEventListener('submit', updatepostFormHandler);
