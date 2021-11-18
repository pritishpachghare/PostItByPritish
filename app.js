
var form = document.querySelector('.form')

form.addEventListener('submit', function (e) {

    e.preventDefault();

    var title = document.querySelector(".title").value;
    var text = document.querySelector(".text").value;
    var url = document.querySelector(".url").value;
    var categary = document.querySelector(".categary").value;

    var h2 = document.querySelector(".h2");
    h2.innerHTML = title;

    var para = document.querySelector(".para");
    para.innerHTML = text;

    var btn1 = document.querySelector(".btn1");
    btn1.innerHTML = categary;

    var img = document.querySelector(".img");
    img.innerHTML = '<img src.=\'' + url + '.png\'>'



    fetch("https://parseapi.back4app.com/classes/post", {
        method: "post",
        body: JSON.stringify({
            title: title,
            text: text,
            url: url,
            categary: categary
        }),
        headers: {
            "X-Parse-Application-Id": "0bt1TmdJKWWwHl4NA0MrILRLBGLQes0dxjtA4zJe",
            "X-Parse-REST-API-Key": "Carw2tDYITtqMIpf35RFo8fPoik9guCYHBJTX9UV",
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
            return response.json()
        })

        .then(function (data) {
            console.log(data)
        })


})

//     async function postData(url = "https://parseapi.back4app.com/classes/post", data = {}) {

//         const response = await ("https://parseapi.back4app.com/classes/post", {
//             method: "Post",
//             body: JSON.stringify(),
//             parameters: {
//                 title: title,
//                 text: text,
//                 url: url,
//                 categary: categary
//             },
//             headers: {
//                 "X-Parse-Application-Id": "0bt1TmdJKWWwHl4NA0MrILRLBGLQes0dxjtA4zJe",
//                 "X-Parse-REST-API-Key": "Carw2tDYITtqMIpf35RFo8fPoik9guCYHBJTX9UV",
//                 "Content-Type": "application/json",
//             }


// })
// return response.JSON()
// }


