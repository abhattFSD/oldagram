const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./images/avatar-vangogh.jpg",
        post: "./images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./images/avatar-courbet.jpg",
        post: "./images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./images/avatar-ducreux.jpg",
        post: "./images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function renderPost() {
    
    for(let i= 0; i< posts.length; i++){

        const newSection = document.createElement("section");
        newSection.className = "bg-color";
        newSection.innerHTML = `<div class="container">
                        <div class="usr-section">
                            <img class="profile" src="${posts[i].avatar}">
                            <div>
                                <p class="username bold-text">${posts[i].name}</p>
                                <p class="location">${posts[i].location}</p>
                            </div>
                        </div>
                        <img src="${posts[i].post}" class="post-img">
                        <div>
                            <div>
                                <img class="icon" src="images/icon-heart.png">
                                <img class="icon" src="images/icon-comment.png">
                                <img class="icon" src="images/icon-dm.png">
                            </div>
                            <p class="bold-text">21,492 likes</p>
                            <p><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                        </div>
                    </div>`;
        document.body.appendChild(newSection);
    }
    
}


renderPost();

            
            


