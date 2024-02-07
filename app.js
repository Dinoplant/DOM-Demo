// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById(`name`).addEventListener(`change`, function (eventData){
      let nameOutput = document.getElementById(`nameOutput`);
      // console.log(eventData);
      nameOutput.innerText = eventData.target.value;
    })

    document.getElementById(`type`).addEventListener(`change`, function (eventData){
      let nameOutput = document.getElementById(`nameOutput`);
      let info = document.getElementById(`input`)
      info.innerText = formData.name
    })


    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault(); 
      
        var formData = new FormData(form);
        console.log(eventdata.target)
        var formData = new FormData(e.target);
        formData = Object.fromEntries(eventdata.target);



        //Update certifctae 
        let nameOutput = document.getElementById(`nameOutput`);
        let info = document.getElementById(`input`);
        nameOutput.inner = formData.name;
        info.innerText = formData.type;





        
      });
    // Log readiness to console
    console.log("Ready");

    // use visible to to and make it none to hide things
});



function processForm(form){

}