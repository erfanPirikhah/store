import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { productType } from "../enum/type.enum";

export class CreateProductDto {
    @ApiProperty()
    title:string
    @ApiProperty()
    content:string
    @ApiProperty()
    slug:string
    @ApiProperty()
    code:string
    @ApiProperty({enum:productType})
    type:string
    @ApiPropertyOptional()
    price:number
    @ApiPropertyOptional()
    count:number
    @ApiPropertyOptional()
    discount:number
    @ApiPropertyOptional()
    active_discount:number
}


export class UpdateProductDto extends PartialType (CreateProductDto) {

}