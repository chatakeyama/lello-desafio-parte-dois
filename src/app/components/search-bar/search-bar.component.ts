import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  @Output() emitValueSearch = new EventEmitter();
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {

    this.debounce.pipe(
      debounceTime(500)
    ).subscribe(this.search);

  }

  search = (event: any) => {
    this.emitValueSearch.emit(event.target.value);
  }
}
