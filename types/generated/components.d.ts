import type { Schema, Struct } from '@strapi/strapi';

export interface BlockBentoInfo extends Struct.ComponentSchema {
  collectionName: 'components_block_bento_infos';
  info: {
    description: '';
    displayName: 'BentoInfo';
  };
  attributes: {
    bentoComponent: Schema.Attribute.Component<'shared.bento-component', true>;
  };
}

export interface BlockCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_block_card_grids';
  info: {
    description: '';
    displayName: 'Card Grid';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', false> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'shared.link-simple', false> &
      Schema.Attribute.Required;
  };
}

export interface BlockCarruselDeImagenes extends Struct.ComponentSchema {
  collectionName: 'components_block_carrusel_de_imagenes';
  info: {
    displayName: 'Carrusel de imagenes';
  };
  attributes: {
    imagen: Schema.Attribute.Component<'shared.imagen', true>;
  };
}

export interface BlockContenidoConImagen extends Struct.ComponentSchema {
  collectionName: 'components_block_contenido_con_imagens';
  info: {
    description: '';
    displayName: 'Contenido con Imagen';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images'>;
    invertido: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    texto: Schema.Attribute.RichText;
    titulo: Schema.Attribute.String;
  };
}

export interface BlockDestinosDestacados extends Struct.ComponentSchema {
  collectionName: 'components_block_destinos_destacados';
  info: {
    displayName: 'Destinos Destacados';
  };
  attributes: {
    articulo_destinos: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface BlockEncabezadoDeSeccion extends Struct.ComponentSchema {
  collectionName: 'components_block_encabezado_de_seccions';
  info: {
    displayName: 'Encabezado de Seccion';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
    encabezado: Schema.Attribute.String;
    subencabezado: Schema.Attribute.String;
  };
}

export interface BlockHero extends Struct.ComponentSchema {
  collectionName: 'components_block_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    carruselHero: Schema.Attribute.Component<'block.card-grid', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required;
  };
}

export interface BlockMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_block_markdowns';
  info: {
    description: '';
    displayName: 'Markdown';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlockPreguntasFrecuentes extends Struct.ComponentSchema {
  collectionName: 'components_block_preguntas_frecuentes';
  info: {
    description: '';
    displayName: 'Preguntas Frecuentes';
  };
  attributes: {
    pyr: Schema.Attribute.Component<'shared.py-r', true> &
      Schema.Attribute.Required;
  };
}

export interface BlockServiciosDestacados extends Struct.ComponentSchema {
  collectionName: 'components_block_servicios_destacados';
  info: {
    displayName: 'Servicios Destacados';
  };
  attributes: {
    servicio_de_turismos: Schema.Attribute.Relation<
      'oneToMany',
      'api::servicio-de-turismo.servicio-de-turismo'
    >;
  };
}

export interface SharedBentoComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_bento_components';
  info: {
    description: '';
    displayName: 'Bento Component';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link-simple', false>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImagen extends Struct.ComponentSchema {
  collectionName: 'components_shared_imagens';
  info: {
    displayName: 'Imagen';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']> &
      Schema.Attribute.Required;
  };
}

export interface SharedLinkSimple extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_simples';
  info: {
    description: '';
    displayName: 'Link Simple';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedPyR extends Struct.ComponentSchema {
  collectionName: 'components_shared_py_rs';
  info: {
    description: '';
    displayName: 'PyR';
  };
  attributes: {
    pregunta: Schema.Attribute.String & Schema.Attribute.Required;
    respuesta: Schema.Attribute.Component<'block.markdown', false> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.bento-info': BlockBentoInfo;
      'block.card-grid': BlockCardGrid;
      'block.carrusel-de-imagenes': BlockCarruselDeImagenes;
      'block.contenido-con-imagen': BlockContenidoConImagen;
      'block.destinos-destacados': BlockDestinosDestacados;
      'block.encabezado-de-seccion': BlockEncabezadoDeSeccion;
      'block.hero': BlockHero;
      'block.markdown': BlockMarkdown;
      'block.preguntas-frecuentes': BlockPreguntasFrecuentes;
      'block.servicios-destacados': BlockServiciosDestacados;
      'shared.bento-component': SharedBentoComponent;
      'shared.card': SharedCard;
      'shared.imagen': SharedImagen;
      'shared.link': SharedLink;
      'shared.link-simple': SharedLinkSimple;
      'shared.logo-link': SharedLogoLink;
      'shared.py-r': SharedPyR;
    }
  }
}
