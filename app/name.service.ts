import {Name} from './name';
import {NAMES} from './mock-names';
import {Injectable} from '@angular/core';

@Injectable()
export class DataService{

    data():Name[] {
        return NAMES; 
    }
}