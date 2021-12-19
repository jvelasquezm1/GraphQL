const sessions = require('../data/sessions.json')
const { DataSource } = require('apollo-datasource');
const { filter } = require('lodash');

class SessionAPI extends DataSource {
    constructor(){
        super();
    }

    initialize(config) {

    }

    getSessions() {
        return sessions;
    }

    getSessionById(id) {
        const session = filter(sessions, { id: parseInt(id) })
        return sessions[0]
    }
}

module.exports = SessionAPI;