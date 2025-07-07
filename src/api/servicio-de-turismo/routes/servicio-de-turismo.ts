/**
 * servicio-de-turismo router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::servicio-de-turismo.servicio-de-turismo',{
    config: {
        find: {
            middlewares: ['global::global-articles-populate']
        }
    }    
});