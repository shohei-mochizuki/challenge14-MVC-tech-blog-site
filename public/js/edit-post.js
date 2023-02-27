// const post_id = window.location.toString().split('/')[
//  window.location.toString().split('/').length - 1];

// const updatePostHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#title').value.trim();
//   const content = document.querySelector('#content').value.trim();
  
//   if (title && content) {
//     const response = await fetch(`/api/post/${post_id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, content }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to update the post.');
//     }
//   }
// };

// const deletePostHandler = async (event) => {
//   event.preventDefault();
//   console.log("HERE!");
  // const response = await fetch(`/api/post/${post_id}`, {
  //   method: 'DELETE',
  //   // body: JSON.stringify({ username, email, password }),
  //   // headers: { 'Content-Type': 'application/json' },
  //   });
  //   if (response.ok) {
  //     document.location.replace('/dashboard');
  //   } else {
  //     alert('Failed to delete the post.');
  //   }
  // };

// document
//   .querySelector('#updateBtn')
//   .addEventListener('submit', updatePostHandler);

function deletePostHandler(event){
  event.preventDefault();
  console.log("HERE!");
};

document
  .querySelector('#deleteBtn')
  .addEventListener('submit', deletePostHandler);

  // Fetchの部分であらかじめpost_idは取得しておき、req.bodyに入れておく
// const id = window.location.toString().split('/')[
//  window.location.toString().split('/').length - 1];
// method: 'POST',
// body: JSON.stringify({
//  content,
//  creation_date,
//  post_id,