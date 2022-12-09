// $(document).ready(function(){
// $('#button_card').on('click',function(){
//     $("firstN").text('').append($('#input1').val())
// })

//  })
// var x = document.getElementById("firstN").innerText
    
// console.log(x)

// console.log($('#input6').val())
// console.log($('#PhoneN').text())

$(document).ready(function(){



    console.log($('#Upload_Logo').val())
    var kais=$('#Upload_Logo')
    $('#button_card').on('click', function(){
        $('.busniss_cardd').empty()
        $('#compagny2').empty()
        var collectorT =[]
        var subjectT={}
        var lastname = $('#input1').val()
        var firstname = $('#input2').val()
        var compagny = $('#input3').val()
        var proffession = $('#input4').val()
        var address = $('#input5').val()
        var phonNumber = $('#input6').val()
        var mail=$('#input7').val()
        var website = $('#input8').val()
         
        if(lastname===""&&firstname===""&&compagny===""&&proffession===""&&address===""&&phonNumber===""&&mail===""&&website===""){
            document.getElementById('check').style.display='block'
            document.getElementById('button_card2').style.display='none'
            alert("you should fill all the INPUT")
        }
        
    // console.log(lastname,firstname,compagny,proffession,address,phonNumber,mail,website)   
               else { $('.busniss_cardd').append(`<p id="firstN">${firstname} <b id="LastN">${lastname}</b></p> 
                    <p id="PhoneN">${phonNumber}</p>
                    <p id="Email">${mail}</p>
                    <p id="Website">${website}</p>
                    <p id="adresse">${address}<br>
                    street, zip code 2045</p>
                    <p id="Proffession">${proffession}</p>
                    <p id="compagny">${compagny}</p>`)
                    $('#compagny2').append(`<p id="compagny2">${compagny}</p>`)
                    
                

                    document.getElementById('check').style.display='none'
                    document.getElementById('button_card2').style.display='block'
                } 
     

})
$('#button_card2').on('click', function(){
    alert('Please plug in your printer')
})




//     function generatePDF (){
//         var printDiv = document.getElementById('print_pdf')
//         html2pdf(printDiv)
// }

// $('#button_card2')on.('click',function (){
//     function generatePDF (){
//         var printDiv = document.getElementById('print_pdf')
//         html2pdf(printDiv)

// }})

})







