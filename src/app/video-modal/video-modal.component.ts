import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent {
@Output() videoModalEvent = new EventEmitter();

triggerVideoEvent(){
  this.videoModalEvent.emit();
}

preventClose(event:Event){
  event.stopPropagation();
}
}
