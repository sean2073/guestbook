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
   
    return $.ajax({
        url: "/new",
        data: entryObject,
        method: "POST",
      }).then(function(res) {
          console.log(res)
        // window.location.replace("/members");
        alert("Thank you for adding an entry!")
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });

    

};

subForm.onclick = addEntry; 
