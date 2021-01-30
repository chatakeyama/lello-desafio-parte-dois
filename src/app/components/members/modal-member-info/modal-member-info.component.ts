import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './modal-member-info.component.html'
})
export class ModalMemberInfoComponent {

  @Input() memberFullInfo: any;

  constructor(public activeModal: NgbActiveModal) { }

}
