console.log("Ajax Tutorial");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetchBtn");

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('POST', 'https://dummyjson.com/posts/1', true);

    // Set Content-Type header
    xhr.setRequestHeader('Content-Type', 'application/json');

    // What to do an progress (Optional)
    xhr.onprogress = function () {
        console.log('On Progress');
    }

    // When request is successful
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText); // Logging the response
        } else {
            console.log("Some error occurred"); // Logging error message if status is not 200
        }
    }

    // When there's an error
    xhr.onerror = function () {
        console.log("Some error occurred"); // Logging error message
    }

    // Prepare JSON data
    const params = `{
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "userId": 9,
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": 2
    }`;

    // Send the request with JSON data
    xhr.send(params);

    console.log('Request sent');
}

let popBtn = document.getElementById('popBtn'); // Change to popBtn
popBtn.addEventListener('click', popHandler); // Change to popHandler

function popHandler() {
    console.log("You have clicked the pop handler");

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://dummyjson.com/posts', true);

    // When request is successful
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText); // Logging the response
        } else {
            console.log("Some error occurred"); // Logging error message if status is not 200
        }
    }

    // When there's an error
    xhr.onerror = function () {
        console.log("Some error occurred"); // Logging error message
    }

    // Send the request
    xhr.send();

    console.log('Request sent');
}
