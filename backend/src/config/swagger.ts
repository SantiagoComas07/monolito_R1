import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Productos",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
    apis: ["../routes/*.ts"],
   components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-api-key'
        },
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }

}
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);



export default  {swaggerUi, swaggerSpec};