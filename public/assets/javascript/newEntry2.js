const $entryForm = document.querySelector('#entry-form');
console.log($entryForm);
// const $animalForm = document.querySelector('#animal-form');

var title = document.getElementById("title").value;
var body = document.getElementById("bodyTextarea").value;

// const name = $animalForm.querySelector('[name="animal-name"]').value;



function addEntry() {
    const title = $entryForm.querySelector('[name="title"]').value;
    const body = $entryForm.querySelector('[name="bodyTextarea"]').value;
    const entryObject = { title, body };
    console.log(entryObject);
    console.log("title: ", title);
    console.log("body: ", body);
    // entries.push({
    //     title: title,
    //     body: body
    // });

    fetch('/new', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                // return response.text();
               return 
            }
            alert('Error: ' + response.statusText);

            //   response.redirect('/');
        })
        .then(postResponse => {
            console.log(postResponse);
            alert("Thanks for adding an entry!");
        });

};

subForm.onclick = addEntry; 
