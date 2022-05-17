export interface ImageDataInterface {
  name: string;
  content: string;
}

// Need to to rename this since there is a class named ImageData
export class ImageData implements ImageDataInterface {
  public name!: string;
  public content!: string;
  
  constructor(_name: string, _content: string) {
    this.name = _name;
    this.content = _content;
  }
}