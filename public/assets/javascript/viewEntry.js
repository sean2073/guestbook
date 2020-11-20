const $displayArea = document.querySelector('#all-entries');



const printResults = resultArr => {
    const resultHTML = resultArr.map(({ title, body, published }) => {
        return `
    <div class="card text-white bg-info mb-3" style="max-width: 70rem;">
                        <div class="card-header">${title}  <span style="float: right;">${published} </span></div>
                        <div class="card-body">
                          
                          <p class="card-text">${body}</p>
                        </div>
                    </div>
                    <hr style="background-color: #3a3f44;">

                   
                    <br>

                    `;
    });

    $displayArea.innerHTML = resultHTML.join('');

}



function getEntries() {

    return $.ajax({
        url: "/new",

        method: "GET",
    }).done(function (res, textStatus, xhr) {
        console.log(res)
        console.log("Status Code: ", xhr.status);
        // window.location.replace("/");
        // alert("Thank you for adding an entry!")
        // If there's an error, log the error
    })
        .then(function (data) {
            console.log(data);
            printResults(data);
        })
        .catch(function (err) {
            console.log(err);

        });



};
getEntries();