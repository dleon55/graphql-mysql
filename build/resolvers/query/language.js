"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_operations_1 = require("./../../constants/db-operations");
const resolverQueryLanguages = {
    Query: {
        languages(_, __, { connection }) {
            const languages = new Array(0);
            var sql = db_operations_1.LANGUAGES_LIST;
            return new Promise((resolve, reject) => {
                connection.query(sql, function (error, results) {
                    if (error) {
                        reject('');
                    }
                    results.forEach((element) => {
                        languages.push({
                            id: element.id,
                            name: element.name,
                        });
                    });
                    resolve(languages);
                });
            });
        },
        language(_, { id }, { connection }) {
            var sql = db_operations_1.LANGUAGES_SELECT_DETAILS;
            return new Promise((resolve, reject) => {
                connection.query(sql, [id], function (error, results) {
                    if (error) {
                        reject(null);
                    }
                    const element = results[0];
                    let language;
                    if (element === undefined || element === null) {
                        language = null;
                    }
                    else {
                        language = {
                            id: element.id,
                            name: element.name,
                        };
                    }
                    resolve(language);
                });
            });
        },
    },
};
exports.default = resolverQueryLanguages;
