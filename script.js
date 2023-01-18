var input = document.getElementById('input')
var container = document.getElementById('container_img')
input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {


        //oppg 1 //
// rows.forEach(element => {
//     console.log(element[1]);

//     });


//         // oppg 2 //
// rows.forEach(element => {
//     img = document.createElement('img')
//     container.appendChild(img)
//     img.src=element[6]
// });

            // oppg 3 //

    // img = document.createElement('img')  
    // container.appendChild(img)      
    // rows.forEach(element => {
    //     if (element[1] == "Abed Al Rahman")
    //     img.src = element[6]
    // });

            // oppg 4 //
     
    // rows.forEach(element => {
    //     if (element[7] == "Asker") {
    //     img = document.createElement('img')  
    //     container.appendChild(img) 
    //     img.src = element[6]
    //     }
    // });
            

            // oppg 5 //

        rows.forEach(element => {
        if (element[3] == "15") {
        img = document.createElement('img')  
        container.appendChild(img) 
        img.src = element[6]
        document.write(element[1])
        }
        });
  })
})