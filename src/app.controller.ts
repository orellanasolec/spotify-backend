import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Persona } from './persona';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/persona')
  getHello(): string {
    return ("hola hola hola ");
  }

  @Get("/")
   wena(): string {
  return "hola";
}
}


