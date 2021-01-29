import { Component, OnInit } from '@angular/core';
import { MemberListService } from 'src/app/services/member-list.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(private memberListService: MemberListService) { }

  membersList: any[];
  membersByRow: any[] = [];

  ngOnInit(): void {

    this.memberListService.listMembers().subscribe(
      members => {
        this.membersList = members;
        this.membersByRow = this.groupColumnsByRow(this.membersList);
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

}
