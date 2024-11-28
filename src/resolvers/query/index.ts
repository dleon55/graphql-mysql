import GMR from 'graphql-merge-resolvers';
import resolverQueryUsers from './user';
import resolverQueryLanguages from './language';
import resolverQueryCertificado from './certificado';

const resolversQueries = GMR.merge([
  resolverQueryUsers,
  resolverQueryLanguages,
  resolverQueryCertificado
]);

export default resolversQueries;
