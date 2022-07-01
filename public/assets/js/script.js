const boneForm = document.querySelector('#bone-form');
const antag = document.querySelector('#antagonist');
const bone = document.querySelector('#bone');
const boneSubmit = document.querySelector('#bone-submit');
const boneList = document.querySelector('#all-bones-list');


function collectBone(event) {
    event.preventDefault();
    
    console.log('new bone: ')
    let bones = JSON.parse(localStorage.getItem('bones')) || [];

    let newBone = {
        antagonist: antag.value,
        bone: bone.value
    }

    console.log('new bone: ', newBone)

    bones.push(newBone);

    localStorage.setItem('bones', JSON.stringify(bones))

    displayBones();

    antag.value = "";
    bone.value = "";
}

function displayBones() {
    let bones = JSON.parse(localStorage.getItem('bones'));

    if(bones) {
        boneList.innerHTML = "";
        for(let i = 0; i < bones.length; i++) {
            let card = document.createElement('div');
            let cardHead = document.createElement('h3');
            // let cardBody = document.createElement('div');

            card.setAttribute('class', 'bone-card');
            // cardBody.setAttribute('class', 'bone-card-body');

            cardHead.innerHTML = `I have a bone to pick with <span class="bone-card-antag">${bones[i].antagonist}</span> ${bones[i].bone}`;
            // cardBody.textContent = bones[i].bone;

            card.append(cardHead);
            boneList.append(card);
        }

    }
}

displayBones();


boneForm.addEventListener('submit', collectBone);