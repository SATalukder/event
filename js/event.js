console.log('This is separate js file');

//option -2: add onclick function

function makeYellow() {

    // console.log(11);
    document.body.style.backgroundColor = 'yellow';

}

//option -3: add onclick function
const makeBlueButton = document.getElementById('make-blue');

makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//option 3: another way

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

//option 4:
const pinkButton = document.getElementById('make-pink');
// console.log('make Pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//option 4: Final
document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})




