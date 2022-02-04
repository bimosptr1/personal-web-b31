let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let startdate = document.getElementById("startdate").value;
  let stopdate = document.getElementById("stopdate").value;
  let content = document.getElementById("input-blog-content").value;
  let nodejs = document.getElementById("ns").value;
  let reactjs = document.getElementById("rs").value;
  let javascripts = document.getElementById("js").value;
  let typescript = document.getElementById("ts").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]);

  let blog = {
    author: `bims`,
    title,
    startdate,
    stopdate,
    content,
    nodejs,
    reactjs,
    javascripts,
    typescript,
    image,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  lengthData = blogs.length;

  let blogContainer = document.getElementById("contents");
  blogContainer.innerHTML = firstBlogContent();

  // looping
  let i = 0;
  for (i; i < lengthData; i++) {
    blogContainer.innerHTML += `
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <h4>
            <a href="blog-detail.html" target="_blank">"${blogs[i].title}"</a>
          </h4>
          <div class="detail-blog-content">
            Durasi : 3 Bulan
          </div>
          <p>"${blogs[i].content}"</p>
          <div class="logo">
            <div class="nodejs">
              <img src="assets/node-js.png" alt="ns" id="nss">
            </div>
            <div class="reactjs">
              <img src="assets/reactjs.png" alt="rs" id="rss">
            </div>
            <div class="javascript">
              <img src="assets/js.png" alt="js" id="jss">
            </div>
            <div class="typescript">
              <img src="assets/typescript.png" alt="ts" id="tss">
            </div>
          </div>

          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
        </div>
      </div>
        `;
  }
}

function firstBlogContent() {
  return `<div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <h4>
        <a href="blog-detail.html" target="_blank">Fullstack Development</a>
      </h4>
      <div class="detail-blog-content">
        Durasi : 3 Bulan
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam minima in culpa itaque deleniti unde
        quae aperiam ex architecto, blanditiis eveniet.
      </p>

      <div class="logo">
        <div class="nodejs">
          <img src="assets/node-js.png" alt="ns" id="nss">
        </div>
        <div class="reactjs">
          <img src="assets/reactjs.png" alt="rs" id="rss">
        </div>
        <div class="javascript">
          <img src="assets/js.png" alt="js" id="jss">
        </div>
        <div class="typescript">
          <img src="assets/typescript.png" alt="ts" id="tss">
        </div>
      </div>
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
    </div>
  </div>`;
}
