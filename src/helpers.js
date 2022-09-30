const choice = (items) => {
    const randNum = Math.floor(Math.random() * items.length); 
    return items[randNum]; 
}


const remove = (items, item) => {
    const idx = items.indexOf(item); 

    if(idx === -1) return undefined; 

    const deletedItem = items.splice(idx, 1); 

    return deletedItem[0]; 
}

export {choice, remove}; 