import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  CreateDb() {
    const heroes = [
      { id: 11, name: 'Capitão America' },
      { id: 12, name: 'Homem de Ferro' },
      { id: 13, name: 'Capitã Marvel' },
      { id: 14, name: 'Gavião Arqueiro' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Pantera negra' },
      { id: 17, name: 'Viuva negra' },
      { id: 18, name: 'Hulk' },
      { id: 19, name: 'Visão' },
      { id: 20, name: 'Feiticeira Scarlat' }
    ];
    return {heroes};
   }
   //Substitui o metodo genld para garantir que um heroi sempre um ID.
   //Se a matriz de herois estiver vazia,
   //o metodo abaixo retorna o numero inicial (11).
   //Se a matriz de herois nao estiver vazia o metodo abaixo retornara o valor mais alto
   //ID do heroi +1.
   genId(heroes: Hero[]): number {
     return heroes.length > 0 ? Math.max(...heroes.map(hero =>  hero.id)) + 1 : 11;
   }
}
