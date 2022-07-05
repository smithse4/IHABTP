const boneForm = document.querySelector('#bone-form');
const antag = document.querySelector('#antagonist');
const bone = document.querySelector('#bone');
const boneSubmit = document.querySelector('#bone-submit');
const boneList = document.querySelector('#all-bones-list');


const collectBone = async function(event) {
    event.preventDefault();
    
    let newBone = {
        antagonist: antag.value,
        text: bone.value
    }

    await fetch(`/api/bones`, {
        method: 'POST',
        body: JSON.stringify(newBone),
        headers: { 'Content-Type': 'application/json' },
    });

    displayBones();

    antag.value = "";
    bone.value = "";
}

const getBones = () => 
    fetch('/api/bones', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })

async function displayBones(data) {
    let bones = await data.json();
    if(bones) {
        boneList.innerHTML = "";
        for(let i = 0; i < bones.length; i++) {
            let card = document.createElement('div');
            let cardHead = document.createElement('h3');

            card.setAttribute('class', 'bone-card');

            cardHead.innerHTML = `I have a bone to pick with <span class="bone-card-antag">${bones[i].antagonist}</span> ${bones[i].text}`;

            card.append(cardHead);
            boneList.append(card);
        }

    }
}

const getAndRenderBones = () => getBones().then(displayBones);

getAndRenderBones();

boneForm.addEventListener('submit', collectBone);