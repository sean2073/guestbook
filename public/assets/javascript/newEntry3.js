const $entryForm = document.querySelector('#entry-form');
console.log($entryForm);
// const $animalForm = document.querySelector('#animal-form');


var published = moment().format('llll');

// const name = $animalForm.querySelector('[name="animal-name"]').value;



function addEntry() {
    const title = $entryForm.querySelector('[name="title"]').value;
    const body = $entryForm.querySelector('[name="bodyTextarea"]').value;
    const entryObject = { title, body, published };
    console.log(entryObject);
    console.log("title: ", title);
    console.log("body: ", body);
   
    return $.ajax({
        url: "/new",
        data: entryObject,
        method: "POST",
      }).done(function(res, textStatus, xhr) {
          console.log(res)
          console.log("Status Code: " , xhr.status);
        window.location.replace("/");
        alert("Thank you for adding an entry!")
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });

    

};

subForm.onclick = addEntry; 
