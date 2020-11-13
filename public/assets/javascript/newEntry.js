
var title = document.getElementById("title");
var body = document.getElementById("bodyTextarea");

entryObject = {title: title, body: body};
function addEntry(){
    console.log("title: ", title.value);
    console.log("body: ", body.value);
// entries.push({
//     title: title,
//     body: body
// });

fetch("http://localhost:3002/new", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": JSON.stringify(entryObject)
})
.then(response => {
  console.log(response);
//   fs.writeFileSync(
//     path.join(__dirname, './lib/entries.json'),
//     JSON.stringify({ entries: entries }, null, 2)
//   );
  response.redirect('/');
})
.catch(err => {
  console.error(err);
  response.send(err);
});
};

subForm.onclick = addEntry; 
