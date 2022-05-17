export interface ImageDataInterface {
  name: string;
  content: string;
}

export class ImageData implements ImageDataInterface {
  public name!: string;
  public content!: string;
  
  constructor(_name: string, _content: string) {
    this.name = _name;
    this.content = _content;
  }
}