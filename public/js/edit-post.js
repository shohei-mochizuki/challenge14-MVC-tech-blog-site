const updatePostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch('/api/post/', {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update the post.');
    }
  }
};

const deletePostHandler = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/post', {
    method: 'DELETE',
    // body: JSON.stringify({ username, email, password }),
    // headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete the post.');
    }
  };

document
  .querySelector('#updateBtn')
  .addEventListener('submit', updatePostHandler);

document
  .querySelector('#deleteBtn')
  .addEventListener('submit', deletePostHandler);
