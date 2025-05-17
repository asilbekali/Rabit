import { PartialType } from '@nestjs/mapped-types';
import { CreateTavarDto } from './create-tavar.dto';

export class UpdateTavarDto extends PartialType(CreateTavarDto) {
  id: number;
}
