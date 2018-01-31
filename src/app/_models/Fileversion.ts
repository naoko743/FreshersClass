export class Fileversion {

  private datecreation: Date;
  private content: string;

  constructor( content: string) {
      this.content = content;
  }

  public getDatecreation(): Date {
    return this.datecreation;
  }

  public setDatecreation(value: Date) {
     this.datecreation = value;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(value: string) {
    this.content = value;
  }

}
