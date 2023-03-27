const db = {
    'user': [
        { id: '1', name: 'Daniel' },
    ],
    'auth': []
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    if(!tabla){
        db[tabla] = []
    }

    db[tabla].push(data);
    console.log(db);
}

async function remove(tabla, id) {
    return true;
}

async function query(tabla, q){
    let col = await list(tabla);
    let keys = Object.keys(q) // ? simulando la query a la bd
    let key = keys[0]

    return col.filter(item => item[key[0]] === q[key[0]])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};
