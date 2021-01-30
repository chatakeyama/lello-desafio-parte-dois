import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/models/member.model';
import { MemberInfoService } from 'src/app/services/member-info.service';
import { MemberListService } from 'src/app/services/member-list.service';
import { ModalMemberInfoComponent } from '../modal-member-info/modal-member-info.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(private memberListService: MemberListService,
    private modalService: NgbModal, private memberInfo: MemberInfoService) { }

  membersList: Member[];
  filteredList: Member[];

  ngOnInit(): void {

    this.memberListService.listMembers().subscribe(
      members => {
        this.membersList = members;
        this.filteredList = members;
      }
    );

  }

  groupColumnsByRow = (members: any[]) => {
    const newRows = [];

    for (let index = 0; index < members.length; index += 3) {
      newRows.push(members.slice(index, index + 3));
    }
    return newRows;
  }

  filterMembers = (searchTerm: string) => {
    searchTerm = searchTerm.trim().toLowerCase();
    if (searchTerm) {
      this.filteredList = this.membersList.filter(member => member.login.toLowerCase().includes(searchTerm));
    } else {
      this.filteredList = this.membersList;
    }
  }

  open(member: Member) {
    this.memberInfo.getMemberFullInfo(member.login).subscribe(
      fullInfo => {
        const modalRef = this.modalService.open(ModalMemberInfoComponent, { centered: true });
        modalRef.componentInstance.memberFullInfo = fullInfo
      }
    );
  }

}
