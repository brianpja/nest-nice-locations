import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(input: string): string {
    if (input === 'formal') return 'Greetings!';
    return 'Hello World!';
  }

  getMessage(): string {
    return 'New Message Updated';
  }
}
