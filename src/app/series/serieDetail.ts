import { Serie } from './serie';

export class SerieDetail extends Serie{
  constructor(ID: number, name: string, channel:string, seasons: number, private poster: string, private description: string, private webpage: string){
    super(ID,name,channel,seasons);
  }
  get postere(): string { return this.poster}
  get descripcion(): string { return this.description}
  get paginaweb(): string { return this.webpage}
}
