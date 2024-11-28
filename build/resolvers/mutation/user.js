"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_operations_1 = require("./../../constants/db-operations");
const resolverMutationUsers = {
    Mutation: {
        addUser(_, { user }, { connection }) {
            return new Promise((resolve, reject) => {
                connection.query(db_operations_1.ADD_USER, [user.name, user.instructor, user.twitter, user.web], function (error, results) {
                    if (error) {
                        reject(error);
                    }
                    resolve(`Añadido correctamente el usuario con el ID ${results.insertId}`);
                });
            });
        },
        updateUser(_, { user }, { connection }) {
            return new Promise((resolve, reject) => {
                connection.query(db_operations_1.UPDATE_USER, [user.name, user.instructor, user.twitter, user.web, user.id], function (error, results) {
                    if (error) {
                        reject(error);
                    }
                    resolve(`Modificado correctamente el usuario con el ID ${user.id}`);
                });
            });
        },
        deleteUser(_, { id }, { connection }) {
            return new Promise((resolve, reject) => {
                connection.query(db_operations_1.DELETE_USER_IN_USER_LANGUAGES, [id], function (error, results) {
                    if (error) {
                        reject(error);
                    }
                    connection.query(db_operations_1.DELETE_USER, [id], function (error, __) {
                        if (error) {
                            reject(error);
                        }
                        resolve(`Eliminado correctamente el usuario con el ID ${id}`);
                    });
                });
            });
        },
    },
};
exports.default = resolverMutationUsers;
