"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolverQueryCertificado = {
    Query: {
        certificadoPorFolio: (_, { folio }, { connection }) => __awaiter(void 0, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const sql = 'SELECT * FROM certificados WHERE folio = ?';
                connection.query(sql, [folio], (error, results) => {
                    if (error) {
                        console.error('Error connecting: ' + error.stack);
                        reject(null);
                        return;
                    }
                    const element = results[0];
                    if (!element) {
                        resolve(null);
                        return;
                    }
                    const certificado = {
                        remesa: element.remesa,
                        idPlantel: element.id_plantel,
                        rvoe: element.rvoe,
                        estatus: element.estatus,
                        folio: element.folio,
                        literal: element.literal,
                        tipoCertificado: element.tipo_certificado,
                        nombre: element.nombre,
                        numeroMatricula: element.numero_matricula,
                        institucionEmisora: element.institucion_emisora,
                        plantel: element.plantel,
                        claveCentroTrabajo: element.clave_centro_trabajo,
                        planEstudios: element.plan_estudios,
                        promedio: element.promedio,
                        promedioLiteral: element.promedio_literal,
                        creditosObtenidos: element.creditos_obtenidos,
                        periodoEstudios: {
                            fechaInicio: element.fecha_inicio_estudios,
                            fechaFin: element.fecha_fin_estudios,
                        },
                        tipoDocumento: element.tipo_documento,
                        fechaTimbrado: element.fecha_timbrado,
                        correo: element.correo,
                        telefono: element.telefono,
                    };
                    resolve(certificado);
                });
            });
        }),
    },
};
exports.default = resolverQueryCertificado;
