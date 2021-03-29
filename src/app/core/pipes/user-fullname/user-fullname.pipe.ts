import { Pipe, PipeTransform } from '@angular/core';
import { IUSerData } from '../../models/user.interface';

@Pipe({
    name: 'userFullname',
})
export class UserFullnamePipe implements PipeTransform {
    transform(value: IUSerData, ...args: unknown[]): unknown {
        return `${value.last_name}, ${value.first_name}`;
    }
}
