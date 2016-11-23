import {Component} from '@angular/core';

@Component({
    selector: 'http-test',
    template: `
        <button>Test GET Request</button><br>
        <p>Output: {{getDate}}</p>
        <button>Test POST</button><br>
        <p>Output: {{postData}}</p>
    `
})

export class HTTPTestComponent{

    getData: string;
    postData: string;
}