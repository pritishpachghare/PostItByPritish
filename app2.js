const postContainer = document.querySelector('#post-container');

const fetchPost = async () => {
    try {
        const response = await axios.get('https://parseapi.back4app.com/classes/post', {
            headers: {
                "X-Parse-Application-Id": "0bt1TmdJKWWwHl4NA0MrILRLBGLQes0dxjtA4zJe",
                "X-Parse-REST-API-Key": "Carw2tDYITtqMIpf35RFo8fPoik9guCYHBJTX9UV",
                "Content-Type": "application/json",
            }
        });
        const posts = await response.data.results;

        for (let post of posts) {
            const span = document.createElement('span');
            span.innerHTML = `<div class="img">
            <img src="${post.url}" alt="" width="400" height="220">
        </div>
        <h2 class="h2">${post.title}</h2>
        <div class="para">
        <p>
        ${post.text}
        </p>
        </div>
        <button class="btn1" value="button">${post.categary}</button>
    </div>`
            postContainer.prepend(span)
        }
    } catch (error) {
        console.log(error);
    }
}
fetchPost();

form = document.querySelector(".form");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.querySelector('.title');
    const text = document.querySelector('.text');
    const url = document.querySelector('.url');
    const categary = document.querySelector('.categary');

    const data = {
        title: title.value,
        text: text.value,
        url: url.value,
        categary: categary.value
    };


    const response = await axios.post('https://parseapi.back4app.com/classes/post', data, {
        headers: {
            "X-Parse-Application-Id": "0bt1TmdJKWWwHl4NA0MrILRLBGLQes0dxjtA4zJe",
            "X-Parse-REST-API-Key": "Carw2tDYITtqMIpf35RFo8fPoik9guCYHBJTX9UV",
            "Content-Type": "application/json",
        }
    });

    getPost(response.data.objectId)
})

getPost = async (postId) => {
    const response = await axios.get(`https://parseapi.back4app.com/classes/post/${postId}`, {
        headers: {
            "X-Parse-Application-Id": "0bt1TmdJKWWwHl4NA0MrILRLBGLQes0dxjtA4zJe",
            "X-Parse-REST-API-Key": "Carw2tDYITtqMIpf35RFo8fPoik9guCYHBJTX9UV",
            "Content-Type": "application/json",
        }
    });
    console.log(response.data)
}