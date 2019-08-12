const mongoose = require('mongoose');
const config = require('./libs/mongoConfig');
const fs = require('fs');

const db = null;

module.exports = app => {
    if (!db) {
        return initialize();
    }
    return db;
}
function initialize() {
    var mongodb = mongoose.connect(config.url);
    db = {
        mongoose,
        mongodb,
        model: {}
    }
    return addModels(db)
}
function addModels(db) {
    const dir = path.join(__dirname, 'models');

    fs.readdirSync(dir).forEach(filename => {

        console.log("---------------->Adding model: ", filename);
        const modelDir = path.join(dir, filename);
        const model = sequelize.import(modelDir);
        db.models[model.name] = model;

    });

    console.log("All Models charged:", db.models);

    Object.keys(db.models).forEach(key => {
        console.log("****************assosiating: ", db.models[key].name);
        db.models[key].associate(db.models);
    });
    return db;
}