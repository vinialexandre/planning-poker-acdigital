import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway(/**Port */)
export class HistoriaGateway implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()

    handleDisconnect(client: any) {
        console.log(client.id + ' desconectado...');
        client.broadcast.emit('users', {
            user: client.id,
            action: 'disconnected'
        });
    }

    handleConnection(client: any, ...args: any[]) {
        console.log(client.id + ' conectado...');
        //client.emit('connection', 'Successfully connected to server');
        client.broadcast.emit('users', {
            user: client.id,
            action: 'connected'
        });
    }

    @SubscribeMessage('chat')
    chat(client: any, data: any){
        console.log(data);
        client.broadcast.emit('chat', data);
        return data;
    }

    @SubscribeMessage('users')
    users(client: any, data: any){
            // client.broadcast.emit('users', data);
            return data;
    }

}