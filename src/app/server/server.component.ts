import { Component, OnInit } from '@angular/core';

const ONLINE: string = 'online';
const OFFLINE: string = 'offline';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white
        }
    `]
})
export class ServerComponent implements OnInit {
    serverId: number = 10;
    serverStatus: string = OFFLINE;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? ONLINE : OFFLINE;
    }

    ngOnInit() {

    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === ONLINE ? 'green' : 'red';
    }

    isServerOnline() {
        return this.serverStatus === ONLINE;
    }
}