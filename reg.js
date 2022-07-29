let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
   
   //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        gender: document.getElementById("gender").value,
        university: document.getElementById("university").value
    };
    console.log(data);
    //this part is for card template

    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
    <div class="NameContainer">${data.name}</div>
    <div class="EmailContainer">${data.email}</a></div><br>
    <div class="NumberContainer">${data.number}</div>
    <div class="GenderContainer">${data.gender}</div>
    <div class="UniversityContainer">${data.university}</div>
    `
    console.log(newlist);
    // to add one card after the other
    output.appendChild(newlist);
   
    //to clear the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})