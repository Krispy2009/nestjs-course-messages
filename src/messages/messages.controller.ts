import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

@Get()
listMessages() {
    return 'Return all messages'
}

@Post()

createMessage(@Body() body: any) {
    console.log(body)
    return `Will save ${body.content} to DB`
}

@Get('/:id')

getMessage(@Param('id') id: string) {
    return `Return one message with id ${id}`
}

}
