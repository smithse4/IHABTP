const express = require('express');
const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/api/bones', (req, res) => {
    let bones = JSON.parse(fs.readFileSync('./db/bones.json', 'utf8'));
    res.json(bones);
});

app.post('/api/bones', (req, res) => {
    let bones = JSON.parse(fs.readFileSync('./db/bones.json', 'utf8'));
    let newBone = req.body
    newBone.id = uuid();
    let allBones = [...bones, newBone];

    fs.writeFileSync('./db/bones.json', JSON.stringify(allBones))
    console.log(`Created note ${newBone.id}`);

    res.json(allBones);
});

app.delete('/api/bones/:id', (req, res) => {
    let deleteBone = req.params.id;
    let bones = JSON.parse(fs.readFileSync('./db/bones.json', 'utf8'));
    let updatedBones = bones.filter((bone) => bone.id != deleteBone);

    fs.writeFileSync('./db/bones.json', JSON.stringify(updatedBones));
    console.log(`Deleted note ${deleteBone}`);

    res.json(updatedbones);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));