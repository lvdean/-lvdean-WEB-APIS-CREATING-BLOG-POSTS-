
//when form is submitted the data is stored into local storage
//submitted form redirects to the posts pageWHEN I enter try to submit a form without a username, title, or content,
// THEN I am presented with a message that prompts me to complete the form. DONE
// WHEN I view the posts page,
// THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
// WHEN I click the light mode/dark mode toggle,
// THEN the page content's styles update to reflect the selection.
// WHEN I click the "Back" button,
// THEN I am redirected back to the landing page where I can input more blog entries.
// WHEN I view the main content,
// THEN I am presented with a list of blog posts that are pulled from localStorage.
// WHEN I view localStorage,
// THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
// WHEN I take a closer look at a single blog entry in the list,
// THEN I can see the title, the content, and the author of the post.
// WHEN I view the footer,
// THEN I am presented with a link to the developer's portfolio.

const userNameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const blogInput =document.getElementById('blog-content');
const submitButton = document.getElementById('submit');

function loadBlogPosts() {
  const storedBlogs = localStorage.getItem('blogComplete');
  return storedBlogs ? JSON.parse(storedBlogs) : [];
}



submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  
 // collecting form values
//   const usernameEntered = userNameInput.value;
//  const titleEntered = titleInput.value;
//  const blogEntered = blogInput.value;

// const formComplete = {
//   usernameEntered: usernameEntered,
//   titleEntered: titleEntered,
//   blogEntered: blogEntered,
// };
const usernameEntered = userNameInput.value.trim();
const titleEntered = titleInput.value.trim();
const blogEntered = blogInput.value.trim();




//push into the array
// blogComplete.push(formComplete);
// userNameInput.value = '';
// titleInput.value = '';
// blogInput.value = '';



   


//change to string and saving to local storage
// localStorage.setItem('blogComplete', JSON.stringify(blogComplete));


//Ensuring form is complete
if (!usernameEntered || !titleEntered|| !blogEntered) {
  alert("Hey There! Please complete all fields to submit your blog.")
  return
}


const formComplete = {
  usernameEntered: usernameEntered,
  titleEntered: titleEntered,
  blogEntered: blogEntered,
};
// Load existing blog posts from local storage
  const blogComplete = loadBlogPosts();

  // Adding the new blog post to the list of array
  blogComplete.push(formComplete);

  // Save the updated list of blog posts to local storage
  localStorage.setItem('blogComplete', JSON.stringify(blogComplete));

// else {function goToBlog() {
  location.href= "blog.html"})
// }
// goToBlog()



// }})