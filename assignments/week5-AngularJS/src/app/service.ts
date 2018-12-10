import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
    getData():any{
    return [{"name":"TRS"},
    {"name":"Congress"},
    {"name":"BJP"},
    {"name":"TDP"}
  ];
}
}