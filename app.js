const axios = require("axios");

// Function to fetch posts
async function getRandomPosts() {
    try {
        // Get all posts from the API
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const posts = response.data;

        // Shuffle the posts randomly
        posts.sort(() => Math.random() - 0.5);

        console.log("===== RANDOM POSTS =====\n");

        // Display each post
        posts
            .slice(0,10)
            .forEach((post) => {
                console.log(`Post ID: ${post.id}`);
                console.log(`Title: ${post.title}`);
                console.log(`Body: ${post.body}`);
                console.log("------------------------------------------");
            });

    } catch (error) {
        console.error("Error fecthing posts.");
        console.error(error.message);
        
    }
}

// Run the function
getRandomPosts();