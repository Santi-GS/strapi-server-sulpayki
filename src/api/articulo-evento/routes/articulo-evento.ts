/**
 * articulo-evento router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::articulo-evento.articulo-evento',{
    config: {
        find: {
            middlewares: ['global::global-articles-populate']
        }
    }    
});