import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from 'class-validator';

export class AstrologicalDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  localTime: string;

  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;
}

export class AstrologicalRequestDto {
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AstrologicalDto)
  data: AstrologicalDto[];
}
