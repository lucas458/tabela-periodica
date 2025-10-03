const mainGrid = document.getElementById('mainGrid');
const secundaryGrid = document.getElementById('secundaryGrid');
const labelsGrid = document.getElementById('labelsGrid'); 


function generateSlotContent(number, letter, name, mass, group){
    return `
    <div class="slotWrapper">    
        <svg width="72" height="72" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="${colorByGroup[group]}"><path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/></svg>
        <div class="slotContent">
            <div class="slotContentNumber">${number}</div>
            <div class="slotContentLetter">${letter}</div>
            <div class="slotContentName">${name}</div>
            <div class="slotContentMass">${mass}</div>
        </div>
    </div>`;
}


function generateSlotContentByIndexElement( index = 1 ){
    const name = Object.keys(elementsList)[index - 1];
    const element = elementsList[name];
    return generateSlotContent(index, element.symbol, name, element.mass, element.group);
}


function getGroupByIndex( index = 1 ){
    const name = Object.keys(elementsList)[index - 1];
    const element = elementsList[name];
    return element.group;
}


function generateMainGrid(){
    mainGrid.innerHTML = '';
    let index = 0;

    // 1
    let slotGridRow = document.createElement('div');
    slotGridRow.classList.add('slotGridRow');
    for (let i = 0; i < 3; i++){
        const slot = document.createElement('div');
        slot.classList.add('slot');

        if ( i == 1 ){
            slot.classList.add('slotSpan');
            slot.style.gridColumn = 'auto / span 16';
        }else{
            slot.innerHTML = generateSlotContentByIndexElement(++index);
            slot.setAttribute('group', getGroupByIndex(index));
        }

        slotGridRow.append(slot);
    }

    mainGrid.appendChild(slotGridRow);


    // 2 & 3
    for (let x = 0; x < 2; x++){
        slotGridRow = document.createElement('div');
        slotGridRow.classList.add('slotGridRow');

        for (let i = 0; i < 9; i++){
            const slot = document.createElement('div');
            slot.classList.add('slot');

            if ( i == 2 ){
                slot.classList.add('slotSpan');
                slot.style.gridColumn = 'auto / span 10';
            }else{
                slot.innerHTML = generateSlotContentByIndexElement(++index);
                slot.setAttribute('group', getGroupByIndex(index));
            }

            slotGridRow.append(slot);
        }

        mainGrid.appendChild(slotGridRow);
    }
    

    // 4 to 7
    for (let x = 0; x < 4; x++){
        slotGridRow = document.createElement('div');
        slotGridRow.classList.add('slotGridRow');

        for (let i = 0; i < 18; i++){
            const slot = document.createElement('div');
            slot.classList.add('slot');

            if ( x == 2 && i == 2 ){
                slot.classList.add('slotDummy');
                slot.innerHTML = `
                <svg width="72" height="72" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="${colorByGroup['Lanthanide']}"><path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/></svg>
                <div class="slotContent slotContentDummy">57-71</div>`;
                slot.setAttribute('group', 'Lanthanide');
            }else if ( x == 3 && i == 2 ){
                slot.classList.add('slotDummy');
                slot.innerHTML = `
                <svg width="72" height="72" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="${colorByGroup['Actinide']}"><path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/></svg>
                <div class="slotContent slotContentDummy">89-103</div>`;
                slot.setAttribute('group', 'Actinide');
            }else{
                index++;
                if ( index == 57 ) index = 72;
                else if ( index == 89 ) index = 104;
                slot.innerHTML = generateSlotContentByIndexElement(index);
                slot.setAttribute('group', getGroupByIndex(index));
            }
            
            slotGridRow.append(slot);
        }

        mainGrid.appendChild(slotGridRow);
    }

}




function generateSecundaryGrid(){
    secundaryGrid.innerHTML = '';
    let index = 56;

    // 8 & 9
    for (let x = 0; x < 2; x++){
        slotGridRow = document.createElement('div');
        slotGridRow.classList.add('slotGridRow');

        for (let i = 0; i < 15; i++){
            if ( x == 1 && i == 0 ) index = 88;

            const slot = document.createElement('div');
            slot.classList.add('slot'); 
            slot.innerHTML = generateSlotContentByIndexElement(++index);
            slot.setAttribute('group', getGroupByIndex(index));
            slotGridRow.append(slot);
        }
        secundaryGrid.appendChild(slotGridRow);
    }

}




function generateLabelsGrid(){
    labelsGrid.innerHTML = '';
    slotGridRow = document.createElement('div');
    slotGridRow.classList.add('slotGridRow');
    const names = Object.keys(colorByGroup);

    for (let i = 0; i < names.length; i++){
        const slot = document.createElement('div');
        slot.classList.add('slot', 'slotDummy');

        slot.innerHTML = `
        <svg width="72" height="72" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="${colorByGroup[names[i]]}"><path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/></svg>
        <div class="slotContent slotContentDummy"> ${ names[i].replaceAll(' ', '<br>') } </div>`;

        slotGridRow.append(slot);
        slot.setAttribute('group', names[i]);
    }
    labelsGrid.appendChild(slotGridRow);
}


generateMainGrid(); 
generateSecundaryGrid();
generateLabelsGrid();

document.querySelectorAll('.slotGrid').forEach((e, i) => {
    e.querySelectorAll('.slotGridRow').forEach((el, idx) => {
        el.style.transform = `translate(${idx%2==0? 0 : 28}px, ${idx * -14}px)`;
    });
});