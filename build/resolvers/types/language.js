"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_operations_1 = require("./../../constants/db-operations");
const resolverTypesLanguages = {
    Language: {
        users(parent, __, { connection }) {
            const users = new Array(0);
            var sql = db_operations_1.LANGUAGES_USERS_LIST;
            return new Promise((resolve, reject) => {
                connection.query(sql, [parent.id], function (error, results) {
                    if (error) {
                        reject(users);
                    }
                    results.forEach((element) => {
                        users.push({
                            id: element.user,
                            name: element.name,
                            instructor: element.instructor,
                            twitter: element.twitter,
                            web: element.web,
                        });
                    });
                    resolve(users);
                });
            });
        },
    },
};
exports.default = resolverTypesLanguages;
