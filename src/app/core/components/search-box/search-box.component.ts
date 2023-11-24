import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  private fb = inject(FormBuilder);
  searchForm = this.fb.group({
    searchText: this.fb.control(''),
  });

  handleSearch() {
    console.log('SEARCHING...');
  }
}
