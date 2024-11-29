
import { IResolvers } from 'graphql-tools';


const resolverQueryCertificado: IResolvers = {
    Query: {
        certificadoPorFolio: async (_, { folio }, { connection }) => {
            return new Promise((resolve, reject) => {
                const sql = 'SELECT * FROM certificados WHERE folio = ?';
                connection.query(sql, [folio], (error: any | null, results: any[]) => {
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
