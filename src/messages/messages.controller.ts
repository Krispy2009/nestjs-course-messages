import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService) {}


@Get()
listMessages() {
    return this.messagesService.findAll()
}

@Post()
createMessage(@Body() body: CreateMessageDTO) {
    console.log(body)
    console.log(`Will save ${body.content} to DB`)
    return this.messagesService.create(body.content)
}

@Get('/:id')
async getMessage(@Param('id') id: string) {
    const message =  await this.messagesService.findOne(id)

    if(!message) {
        throw new NotFoundException('message not found')
    }
    return message
    
}

}
