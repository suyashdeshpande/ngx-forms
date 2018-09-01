import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import Cropper from 'cropperjs';
import {NgxUploadService} from '../ngx-upload.service';


@Component({
  selector: 'ngx-crop',
  templateUrl: 'ngx-crop.component.html',
  styleUrls: ['ngx-crop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NgxCropComponent implements OnInit, OnDestroy {
  @Input() config: any = {};
  @Input() imgSrc: any;
  @Output() onCrop: EventEmitter<any> = new EventEmitter();
  @Output() onReset: EventEmitter<any> = new EventEmitter();
  _text = {
    reset: 'Remove'
  };

  _config: any = {
    crop: [
      {
        ratio: null,
        viewMode: 0
      },
    ]
  };
  timer: any = [];
  cropper: any = [];
  imgData: any = [];

  constructor(private _service: NgxUploadService) {
  }

  ngOnInit() {
    this._config = Object.assign(this._config, this.config);
    this.cropper = [];
    this.imgData = [];
    this.initializeCrop();
  }

  initializeCrop() {
    setTimeout(() => {
      this._config.crop.forEach((opt: any, i: number) => {
        const el: any = document.getElementById('ngx-crop-img-' + i);
        const options: any = {};
        if (opt.width) {
          options.width = opt.width;
        }
        if (opt.height) {
          options.height = opt.height;
        }
        if (opt.minWidth) {
          options.minWidth = opt.minWidth;
        }
        if (opt.minHeight) {
          options.minHeight = opt.minHeight;
        }
        if (opt.maxWidth) {
          options.maxWidth = opt.maxWidth;
        }
        if (opt.maxHeight) {
          options.maxHeight = opt.maxHeight;
        }
        this.cropper[i] = new Cropper(el, {
          aspectRatio: opt.ratio,
          viewMode: opt.viewMode || 0,
          crop: () => {
            if (this.timer[i]) {
              clearTimeout(this.timer[i]);
            }
            this.timer[i] = setTimeout(() => {
              this.onCropEvent(i, this.cropper[i].getCroppedCanvas(options).toDataURL('image/png'));
            }, 500);
          }
        });
      });
    }, 100);
  }

  onCropEvent(i: number, data: any) {
// console.log('On crop event', i, data);

    this._service.compress(data, this._config).then((res: any) => {
      this.imgData[i] = res;
      const img = this.imgData.length === 1 ? this.imgData[i] : this.imgData;
      this.onCrop.emit(img);
      // console.log('on crop event ngx-crop component', img);
    })
      .catch(() => {
        this.imgData[i] = data;
        const img = this.imgData.length === 1 ? this.imgData[i] : this.imgData;
        this.onCrop.emit(img);
      });
  }

  reset() {
    this.cropper.forEach((el: any) => {
      if (el) {
        el.destroy();
      }
    });
    this.cropper = [];
    this.imgData = [];
    this.imgSrc = '';
    this.onReset.emit();
  }

  ngOnDestroy() {
    this.reset();
  }
}
