import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { SecuritySchemeObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";



export function SwaggerConfig(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Djkalpa API')
    .setDescription('backend of Djkalpa website')
    .setVersion('1.0')
    .addTag('nestjs')
    .addBearerAuth(swaggerAuthConfig(),'Authorization')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}

function swaggerAuthConfig():SecuritySchemeObject{
    return{
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
    }
}