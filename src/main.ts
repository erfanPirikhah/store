import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerConfig } from './config/swagger.config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfig(app)
  await app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
    console.log('Api Doc ====> http://localhost:3000/swagger')

  });
}
bootstrap();
