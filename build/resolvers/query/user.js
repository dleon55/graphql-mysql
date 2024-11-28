"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_operations_1 = require("./../../constants/db-operations");
const resolverQueryUsers = {
    Query: {
        users(_, __, { connection }) {
            const users = new Array(0);
            var sql = db_operations_1.USERS_LIST;
            return new Promise((resolve, reject) => {
                connection.query(sql, function (error, results) {
                    if (error) {
                        reject('');
                    }
                    results.forEach((element) => {
                        users.push({
                            id: element.id,
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
        user(_, { id }, { connection }) {
            var sql = db_operations_1.USERS_SELECT_DETAILS;
            return new Promise((resolve, reject) => {
                connection.query(sql, [id], function (error, results) {
                    if (error) {
                        reject(null);
                    }
                    const element = results[0];
                    let user;
                    if (element === undefined || element === null) {
                        user = null;
                    }
                    else {
                        user = {
                            id: element.id,
                            name: element.name,
                            instructor: element.instructor,
                            twitter: element.twitter,
                            web: element.web,
                        };
                    }
                    resolve(user);
                });
            });
        },
    },
};
exports.default = resolverQueryUsers;
