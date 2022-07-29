// Dummmy Data
// const posts = [{
//         title: "This is Title 1",
//         Description: "This is descrption 1"
//     },
//     {
//         title: "This is Title 2",
//         Description: "This is descrption 2"
//     },
//     {
//         title: "This is Title 3",
//         Description: "This is descrption 3"
//     },
//     {
//         title: "This is Title 4",
//         Description: "This is descrption 4"
//     },
//     {
//         title: "This is Title 5",
//         Description: "This is descrption 5"
//     },
//     {
//         title: "This is Title 6",
//         Description: "This is descrption 6"
//     },
//     {
//         title: "This is Title 7",
//         Description: "This is descrption 7"
//     },
//     {
//         title: "This is Title 8",
//         Description: "This is descrption 8"
//     },
// ];

// Fetch Data

const fetchData = async(config) => {
    try {
        const res = await axios(config)
        return res.data;
    } catch (err) {
        throw Error("Data is not found");
    }

}



//<div class="post">

//</div>

// Select 
const postsElement = document.querySelector(".posts")

const loadAllData = async() => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post_title">${post.title}</h4>
        <p class="post_desc">${post.Description}</p>
        `;
        postsElement.appendChild(postElement);

    });
}
loadAllData();