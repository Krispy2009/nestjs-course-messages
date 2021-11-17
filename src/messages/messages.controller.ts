import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

@Get()
listMessages() {
    return 'Return all messages'
}

@Post()
createMessage(@Body() body: CreateMessageDTO) {
    console.log(body)
    return `Will save ${body.content} to DB`
}

@Get('/:id')
getMessage(@Param('id') id: string) {
    return `Return one message with id ${id}`
}

}
