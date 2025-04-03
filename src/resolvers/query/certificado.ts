
import { IResolvers } from 'graphql-tools';


const resolverQueryCertificado: IResolvers = {
    Query: {
        certificadoPorFolio: async (_, { folio }, { connection }) => {
            return new Promise((resolve, reject) => {
                const sql =  `USE pace;

SELECT
  CONCAT(alumno_NOMBRE, ' ', alumno_PRIMERAPELLIDO, ' ', alumno_SEGUNDOAPELLIDO) AS nombre_y_apellidos,
  numero_control AS numero_matricula,
  nombre_iems AS institucion_educativa_emisora,
  CONCAT(TIPO_PLANTEL, ' ', NOMBRE_NUMERO_PLANTEL) AS PLANTEL_SERVICIO_EDUCATIVO,
  CCT,
  'Bachillerato general' AS PLAN_DE_ESTUDIOS,
  CONCAT(PROMEDIO_APROVECHAMIENTO, ' ', PROMEDIO_APROVECHAMIENTO_TEXTO) AS promedio,
  CONCAT(CREDITOS_OBTENIDOS, ' de un total de ', TOTAL_CREDITOS) AS CREDITOS_OBTENIDOS,
  CONCAT(PERIODO_INICIO, ' al ', PERIODO_TERMINO) AS periodo_en_que_se_cursaron_los_estudios,
  (CASE
    WHEN tipo_certificado = 1 THEN 'Certificado de termino de estudios'
    WHEN tipo_certificado = 2 THEN 'Certificado parcial de estudios'
    ELSE 'null'
  END) AS tipo_de_documento,
  'Registrado en el SIGED' AS estatus,
  FOLIO_CONTROL AS FOLIO,
  FECHA_SEP AS FECHA_Y_HORA_DE_TIMBRADO,
  'controlescolar_dgb@nube.sep.gob.mx' AS CORREO_ELECTRONICO,
  '55-36011000 ext.63329' AS telefono
FROM XML_DEC
WHERE FOLIO_CONTROL IN ('?');`;
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
