const nanoid = require('nanoid');

const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id){
        return store.get(TABLA ,id);
    }

    function insert(text, user){
        post = {
            id: nanoid(),
            text: text,
            user: user,
        }

        return store.insert(TABLA, post);
    }

    function update(id, text){
        post = {
            id: id,
            text: text,
        }

        return store.upsert(TABLA, post);
    }

    return {
        list,
        insert,
        get,
        update
    };

}    