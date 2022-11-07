import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimingService } from 'src/app/services/timing.service';
import { Subscription } from 'rxjs';
import { Timing } from '../../models/timing.model';

@Component({
  selector: 'app-timing-table',
  templateUrl: './timing-table.component.html',
  styleUrls: ['./timing-table.component.sass']
})
export class TimingTableComponent implements OnInit {

  public timings: Timing[] | null

  public subscription: Subscription;

  @Output() create = new EventEmitter<any>();
  @Output() edit = new EventEmitter<Timing>();
  @Output() delete = new EventEmitter<any>();

  constructor(public taskService: TimingService) { }
  

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.subscription = this.taskService.list()
      .subscribe({
        next: (res: Timing[])=> {                    
          this.timings = res; // For the moment we have not pagination
        }
      });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe(); 
    }    
  }

  onCreate() {
    this.create.emit();
  }
  onEdit(timing: Timing) {
    this.edit.emit(timing);
  }
  onDelete(id: number) {
    this.delete.emit(id);
  }

}
