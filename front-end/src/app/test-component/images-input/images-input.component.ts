import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  templateUrl: './images-input.component.html',
  styleUrls: [
    './images-input.component.scss'
  ]
}) export class ImagesInputComponent {
  @Input() readonly: boolean = false;
  @Output() valueChange = new EventEmitter<Array<Image>>();

  images = new Array<Image>();

  addImage(event: Event): void {
    const fileList: FileList = (event.target as any).files;
    for(let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          const src = reader.result;
          this.images.push(new Image(src as string, file?.name!));
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }
}

class Image {
  constructor(public content: string, public name: string) { }
}