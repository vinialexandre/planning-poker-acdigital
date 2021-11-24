import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from "@nestjs/websockets";
import { from, map, Observable } from "rxjs";

@WebSocketGateway(/**Port */)
export class SalaGateway implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    
    handleDisconnect(client: any) {
        console.log("Method not implemented.", client);
    }

    handleConnection(client: any, ...args: any[]) {
        console.log("Method not implemented.", client);
    }

    @SubscribeMessage('events')
    onEvent(@MessageBody() data: unknown): Observable<WsResponse<number>> {
        const event = 'events';
        const response = [1, 2, 3];

        return from(response).pipe(
            map(data => ({ event, data })),
        );
    }

}