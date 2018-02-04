export class Version {

  private url: string;
  private _content: string;

  constructor( content: string) {
    this.content = content;
  }


  set content(value: string) {
    this._content = value;
  }

  public getContent(): string {
    return this.content;
  }


  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }
}
