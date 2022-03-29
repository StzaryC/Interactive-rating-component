let rating = document.querySelector('.rating');
let grade = document.querySelectorAll('.grade');
let send = document.querySelector('.send');
let modal_thanks = document.querySelector('.modal_thanks');

modal_thanks.style.display = 'none';

send.addEventListener('click', function submitValue(){

    let modal_card_rate= document.querySelector('.modal_card_rate');
    modal_card_rate.style.display = "none";

    let value = document.querySelector('.active').innerHTML;
    console.log(value);

    let spanrate = document.querySelector('.spanrate');
    spanrate.innerHTML = value;

    modal_thanks.style.display = 'flex';

    setTimeout(function(){
        modal_thanks.style.display = 'none';
        modal_card_rate.style.display = "block";
    }, 5000);

});

grade.forEach((el) => {
    el.addEventListener('click', function() {
        grade.forEach((el) => {
            el.classList.remove('active');
        })
        el.classList.add('active');
    })
    
})

