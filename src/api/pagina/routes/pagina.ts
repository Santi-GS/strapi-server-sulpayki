/**
 * pagina router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::pagina.pagina',{
    config: {
        find: {
            middlewares: ['api::pagina.pagina-populate']
        }
    }    
});
