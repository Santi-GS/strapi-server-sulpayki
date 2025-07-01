/**
 * `pagina-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "block.encabezado-de-seccion": true,
      "block.contenido-con-imagen": {
        populate: {
          link: true,
          imagen: {
            fields: ["alternativeText", "url"]
          }
        }
      },
      "block.markdown": true,
      "block.preguntas-frecuentes": {
        populate: {
          pyr: {
            populate:{
              respuesta: true,
            }
          }
        }
      },
      "block.destinos-destacados":{
        populate:{
          articulo_destinos:{
            populate: {
            coverImagen:{
              fields: ["alternativeText", "url"]
            },
            tags: true,
            },            
          },
        }
      },
    }
  }
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In pagina-populate middleware.');

    ctx.query.populate = populate;
    await next();
  };
};
