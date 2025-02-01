import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../dto/product.dto';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
//   constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiConsumes("application/x-www-from-urlencoded")
  create(@Body() createProductDto: CreateProductDto) {
  }

//   @Get()
//   findAll() {
//     return this.productService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.productService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
//     return this.productService.update(+id, updateProductDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.productService.remove(+id);
//   }
}
