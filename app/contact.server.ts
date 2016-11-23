import {Injectable} from '@angular/core';
import {contactdata} from './mock-contact';


@Injectable()

export class ContactService{

    getContact(){
        return Promise.resolve(contactdata);

    }
}