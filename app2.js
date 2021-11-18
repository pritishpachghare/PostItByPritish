

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
    img.innerHTML = '<img src.=\'' + url + '.png\'>';




    const fetchData = async () => {
        const response = await axios.get('https://parseapi.back4app.com/classes/post/objectid', {
            headers: {
                "X-Parse-Application-Id": "0bt1TmdJKWWwHl4NA0MrILRLBGLQes0dxjtA4zJe",
                "X-Parse-REST-API-Key": "Carw2tDYITtqMIpf35RFo8fPoik9guCYHBJTX9UV",
                "Content-Type": "application/json",
            },
        })

        console.log(response.data)

    };
    fetchData();
});
