import { ImageData } from './image-data.model';

export interface ImagesDialogDataInterface {
  images: Array<ImageData>;
  activeIndex: number;
}

export class ImagesDialogData implements ImagesDialogDataInterface {
  public images: ImageData[] = new Array<ImageData>();
  public activeIndex: number = 0;
}
