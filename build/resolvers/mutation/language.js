"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_operations_1 = require("./../../constants/db-operations");
const resolverMutationLanguages = {
    Mutation: {
        addLanguage(_, { name }, { connection }) {
            return new Promise((resolve, reject) => {
                connection.query(db_operations_1.ADD_LANGUAGE, [name], function (error, results) {
                    if (error) {
                        reject(error);
                    }
                    resolve(`Añadido correctamente el lenguaje de programación con el ID ${results.insertId}`);
                });
            });
        },
        updateLanguage(_, { id, name }, { connection }) {
            return new Promise((resolve, reject) => {
                connection.query(db_operations_1.UPDATE_LANGUAGE, [name, id], function (error, __) {
                    if (error) {
                        reject(error);
                    }
                    resolve(`Modificado correctamente el lenguaje de programación con el ID ${id}`);
                });
            });
        },
        deleteLanguage(_, { id }, { connection }) {
            return new Promise((resolve, reject) => {
                connection.query(db_operations_1.DELETE_LANGUAGE_IN_USER_LANGUAGES, [id], function (error, results) {
                    if (error) {
                        reject(error);
                    }
                    connection.query(db_operations_1.DELETE_LANGUAGE, [id], function (error, __) {
                        if (error) {
                            reject(error);
                        }
                        resolve(`Eliminado correctamente el lenguaje de programación con el ID ${id}`);
                    });
                });
            });
        },
    },
};
exports.default = resolverMutationLanguages;
