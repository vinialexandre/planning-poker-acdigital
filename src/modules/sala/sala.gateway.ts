import { Logger } from "@nestjs/common";
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { Socket } from "socket.io";
@WebSocketGateway({ namespace: '/ws-sala'})
export class SalaGateway implements OnGatewayInit{
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('Sala Logger')

    afterInit(server: any) {
        this.logger.log('Initialized ...')
    }
    
    @SubscribeMessage('entrouNaSala')
    entrouNaSala(client: Socket, idSala: string){
         client.join(idSala);
         client.emit('salaAberta', idSala)
    }

    @SubscribeMessage('saiuDaSala')
    saiuDaSala(client: Socket, idSala: string){
         client.leave(idSala);
         client.emit('salaFechada', idSala)
    }

}