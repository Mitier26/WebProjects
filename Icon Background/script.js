const group = document.querySelector('.group');

for(let i = 0; i < 20; i++)
{
    const containerId = `iconContainer${i}`;
    const container = document.createElement("div");
    container.className = 'iconContainer';
    container.id = containerId;
    group.appendChild(container);
    addIcons(containerId);
}

function addIcons(containerId){
    const iconContainer = document.getElementById(containerId);
    const Unicode = [
        '\uf001',
        '\uf002',
        '\uf003',
        '\uf004',
        '\uf005',
        '\uf006',
        '\uf007',
        '\uf008',
        '\uf009',
        '\uf010',
        '\uf011',
        '\uf012',
        '\uf013',
        '\uf014',
        '\uf015',
        '\uf016',
        '\uf017',
        '\uf018',
        '\uf019',
        '\uf020',
    ];

    for(let i = 0; i < 50; i++){
        const icon = document.createElement('i');
        icon.className = 'icon fas';
        icon.innerHTML = randomIcon(Unicode);
        iconContainer.appendChild(icon);
    }
}

function randomIcon(values){
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}