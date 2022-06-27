const boneForm = document.querySelector('#bone-form');
const antag = document.querySelector('#antagonist');
const bone = document.querySelector('#bone');
const boneSubmit = document.querySelector('#bone-submit');


function collectBone(event) {
    event.preventDefault;

    let bones = JSON.parse(localStorage.getItem('bones')) || [];

    let newBone = {
        antagonist: antag.value,
        bone: bone.value
    }

    bones.push(newBone);

    localStorage.setItem('bones', JSON.stringify(bones))

    displayBones();
}

function displayBones() {
    let bones = JSON.parse(localStorage.getItem('bones'));

    if(bones) {
        
    }
}









boneForm.addEventListener('submit', collectBone);