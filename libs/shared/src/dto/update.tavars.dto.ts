import { PartialType } from '@nestjs/mapped-types';
import { CreateTavarsDto } from './tavars.create.dto';

export class UpdateTavarDto extends PartialType(CreateTavarsDto) {
  id: number;
}
