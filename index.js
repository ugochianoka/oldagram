const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainEl = document.getElementById("main")

for (let i=0; i < posts.length; i++) {
    mainEl.innerHTML += `<section class="sect-1 border">
                <img src="${posts[i].avatar}" class="avatar">
                <div>
                    <h2> ${posts[i].name}</h2>
                    <p>${posts[i].location} </p>
                </div>
            </section>
            <img src="${posts[i].post}" class="post">
            <section class="sect-3">
               <img src="images/icon-heart.png" class="icon">
               <img src="images/icon-comment.png" class="icon">
               <img src="images/icon-dm.png" class="icon">
               <p class="bold"> ${posts[i].likes} likes </p>
               <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
               <div class="space"></div>
            </section>`
}

