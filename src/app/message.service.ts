import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // tslint:disable-next-line:variable-name
  private _messages: string[] = [];
  public get messages(): string[] {
    return this._messages;
  }
  public set messages(value: string[]) {
    this._messages = value;
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

