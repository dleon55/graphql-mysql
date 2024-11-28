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
        certificadoPorFolio: (_, { folio }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return {
                remesa: 271161,
                idPlantel: 3997,
                rvoe: "19/1328",
                estatus: "Registrado en el SIGED",
                folio: "CBG23533656",
                literal: "CBG",
                tipoCertificado: "Certificado de terminación de estudios",
                nombre: "ALEXANDER FABIAN PEREZ LOPEZ",
                numeroMatricula: "15594",
                institucionEmisora: "Direccion General del Bachillerato",
                plantel: "ESCUELA PREPARATORIA PARTICULAR INCORPORADA",
                claveCentroTrabajo: "15PBH3997H",
                planEstudios: "Bachillerato General",
                promedio: 7.4,
                promedioLiteral: "Siete punto Cuatro",
                creditosObtenidos: "332 de un total de 332",
                periodoEstudios: {
                    fechaInicio: "20/07/2020",
                    fechaFin: "19/07/2023",
                },
                tipoDocumento: "Certificado de terminación de estudios",
                fechaTimbrado: "21/07/2023 17:18:21",
                correo: "controlescolar_dgb@nube.sep.gob.mx",
                telefono: "55-3601-1000 Ext. 63329",
            };
        }),
    },
};
exports.default = resolverQueryCertificado;
