
import { IResolvers } from 'graphql-tools';

const resolverQueryCertificado: IResolvers = {
    Query: {
        certificadoPorFolio: async (_, { folio }, { dataSources }) => {
            // Assuming dataSources.certificadoAPI.getCertificadoByFolio is a function to fetch data by folio
            // Returning a dummy object based on the data from the image
           
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

        },

    },
};

export default resolverQueryCertificado;

export interface Certificado {
    remesa: number;
    idPlantel: number;
    rvoe: string;
    estatus: string;
    folio: string;
    literal: string;
    tipoCertificado: string;
    nombre: string;
    numeroMatricula: string;
    institucionEmisora: string;
    plantel: string;
    claveCentroTrabajo: string;
    planEstudios: string;
    promedio: number;
    promedioLiteral: string;
    creditosObtenidos: string;
    periodoEstudios: PeriodoEstudios;
    tipoDocumento: string;
    fechaTimbrado: string;
    correo: string;
    telefono: string;
}

export interface PeriodoEstudios {
    fechaInicio: string;
    fechaFin: string;
}
