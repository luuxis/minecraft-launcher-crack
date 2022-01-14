const fetch = require('node-fetch');
const minenecraft_version_url = 'https://launchermeta.mojang.com/mc/game/version_manifest_v2.json';

let sel = document.querySelector('.minecraft-version');
let play = document.querySelector('.play');


async function get_minencraft_version(type = 'release') {
    let minenecraft_version = await fetch(minenecraft_version_url).then(res => res.json());
    return minenecraft_version.versions.filter(version => version.type === type)
}


async function get_version_list() {
    let minenecraft_version = await get_minencraft_version();
    minenecraft_version.forEach(version => {
        var opt = document.createElement("option");
        opt.value = version.id;
        opt.text = version.id;
        sel.add(opt, null);
    });
}

get_version_list();

play.addEventListener('click', async () => {
    let version = sel.value;
    console.log(await get_minencraft_version());
});