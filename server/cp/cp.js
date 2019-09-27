const fs = require('fs');

let list = [];

const loadData = () => {
    try{
        list = require('../data/data.json');
    } catch {
        list = [];
    }    
}

module.exports.list = (cp) => {
    loadData();
    //return list.filter(res => res.cp === cp);
    return list.filter(res => res.codigo === cp);
}
