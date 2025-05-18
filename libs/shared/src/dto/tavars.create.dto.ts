import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTavarsDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
