import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringTransformService {
  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
