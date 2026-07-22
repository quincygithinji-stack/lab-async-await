async function getPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const posts = await response.json();

        const postList = document.querySelector("#post-list");

        posts.slice(0, 10).forEach((post) => {
            const li = document.createElement("li");

            const title = document.createElement("h1");
            title.textContent = post.title;

            const body = document.createElement("p");
            body.textContent = post.body;

            li.appendChild(title);
            li.appendChild(body);

            postList.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
}

getPosts();
