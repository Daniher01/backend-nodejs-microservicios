const auth = require('../../../auth')
const TABLA = 'auth'

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    // ? inicias sesion
    async function login(username, password){
        const data = await store.query(TABLA, {username: username});
        if(data.password === password){
            // generar token
            return auth.sign(data)
        }else{
            throw new Error('Informacion invalida')
        }

    }

    // ? crear la session
    function upsert(data) {
        const authData = {
            id: data.id,
        }

        if(data.username){
            authData.username = data.username
        }

        if(data.password){
            authData.password = data.password
        }

        return store.upsert(TABLA, authData)
    }

    return {
        upsert,
        login,
    }


};    