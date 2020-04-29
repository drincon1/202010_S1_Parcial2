export class Serie {
  constructor(private ID: number, private name: string, private channel: string, private seasons: number){}

  get id(): number { return this.ID}
  get nombre(): string { return this.name }
  get canal(): string { return this.channel }
  get temporadas(): number { return this.seasons }

}
