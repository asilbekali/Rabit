import { IsOptional, IsString } from 'class-validator';

export class UpdateTavarDto {
  @IsOptional()
  @IsString()
  name?: string;
}
