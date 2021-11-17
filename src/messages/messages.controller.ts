import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

@Get()
listMessages() {
    return 'Return all messages'
}

@Post()
createMessage(message: string) {
    return `Will save ${message} to DB`
}

@Get('/:id')
getMessage(id: number) {
    return `Return one message with id ${id}`
}

}
