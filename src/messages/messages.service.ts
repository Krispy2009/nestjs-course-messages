import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor(repo: MessagesRepository) {
        this.messagesRepo = repo;
    }

    findOne(id: string){
        return this.messagesRepo.findOne(id)
    }

    findAll(){
        return this.messagesRepo.findAll()
        
    }
    
    create(content: string){
        return this.messagesRepo.create(content)

    }
}