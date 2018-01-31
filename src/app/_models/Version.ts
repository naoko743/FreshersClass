export class Version {

  private url: string;
  private content: string;

  constructor( url: string) {
    this.url = url;
  }


  public getContent(): string {
    return this.content;
  }

  public setContent(value: string) {
    this.content = value;
  }
  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }
}
