"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_operations_1 = require("../../constants/db-operations");
const resolverTypesUsers = {
    User: {
        twitter: (parent) => `https://twitter.com/${parent.twitter}`,
        languages(parent, __, { connection }) {
            const languages = new Array(0);
            var sql = db_operations_1.USERS_LANGUAGES_LIST;
            return new Promise((resolve, reject) => {
                connection.query(sql, [parent.id], function (error, results) {
                    if (error) {
                        reject(languages);
                    }
                    results.forEach((element) => {
                        languages.push({
                            id: element.language,
                            name: element.name,
                        });
                    });
                    resolve(languages);
                });
            });
        },
    },
};
exports.default = resolverTypesUsers;
