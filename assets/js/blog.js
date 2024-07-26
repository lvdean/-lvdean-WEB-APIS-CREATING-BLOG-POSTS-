//redirecting to landing page
const redirectButton = document.getElementById('back-button')

redirectButton.addEventListener('click', function (event) {
    event.preventDefault();
        location.href= "index.html"
    })

let allBlogs = document.getElementById('blog-table')


const retrieveBlog = localStorage.getItem('blogComplete');
const storeBlogInfo = JSON.parse(retrieveBlog);
   console.log(retrieveBlog);

// allBlogs.innerHTML += "";
// allBlogs.innerHTML += storeBlogInfo [0].usernameEntered;
// allBlogs.innerHTML += storeBlogInfo [0].titleEntered;
// allBlogs.innerHTML += storeBlogInfo [0].blogEntered;

// for (singleBlogPost of storeBlogInfo) {
// allBlogs.innerHTML += singleBlogPost.usernameEntered;
// allBlogs.innerHTML += singleBlogPost.titleEntered;
// allBlogs.innerHTML += singleBlogPost.blogEntered;
// }
for (singleBlogPost of storeBlogInfo) {
allBlogs.innerHTML += `<p> ${singleBlogPost.usernameEntered} </p>`;
allBlogs.innerHTML += `<p>${singleBlogPost.titleEntered}</p>`;
allBlogs.innerHTML += `<p>${singleBlogPost.blogEntered}</p>`;
}


