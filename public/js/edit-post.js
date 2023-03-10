// Get the post ID from the endpoint
const post_id = window.location.toString().split('/')[
 window.location.toString().split('/').length - 1];


// Update the post 
const updatepostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-updatepost').value.trim();
  const content = document.querySelector('#content-updatepost').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard'); // When successful, load the dashboard page
    } else {
      alert('Failed to update a post.'); // When unsuccessful, show alert
    }
  }
};


// Delete the post
const deletepostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard'); // When successful, load the dashboard page
  } else {
    alert('Failed to delete a post.'); // When unsuccessful, show alert
  }
};


// Event listeners
document
  .querySelector('.updatepost-form')
  .addEventListener('submit', updatepostFormHandler);

document
  .querySelector('.deletepost-form')
  .addEventListener('submit', deletepostFormHandler);
