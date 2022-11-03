import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../../assets/docs.json';

export interface SettingsAdditional {
  id: string,
  visible: boolean
}

export interface Docs {
  settingName: string[],
  settingType: string[],
  settingDesc: string[]
}

@Component({
  selector: 'app-resource-consumption',
  templateUrl: './resource-consumption.component.html',
  styleUrls: ['./resource-consumption.component.scss']
})
export class ResourceConsumptionComponent implements OnInit {

  data: any = jsonData;

  groups: string[][] = [
    [
      'autovacuum_work_mem',
      'dynamic_shared_memory_type',
      'hash_mem_multiplier',
      'huge_page_size',
      'huge_pages',
      'logical_decoding_work_mem',
      'maintenance_work_mem',
      'max_prepared_transactions',
      'max_stack_depth',
      'min_dynamic_shared_memory',
      'shared_buffers',
      'shared_memory_type',
      'temp_buffers',
      'work_mem'
    ],
    [
      'backend_flush_after',
      'effective_io_concurrency',
      'maintenance_io_concurrency',
      'max_parallel_maintenance_workers',
      'max_parallel_workers',
      'max_parallel_workers_per_gather',
      'max_worker_processes',
      'old_snapshot_threshold',
      'parallel_leader_participation',
    ],
    [
      'bgwriter_delay',
      'bgwriter_flush_after',
      'bgwriter_lru_maxpages',
      'bgwriter_lru_multiplier'
    ]
  ]

  additionals: SettingsAdditional[] = []

  constructor() { }

  ngOnInit(): void {
    for(let g of this.groups) {
      for(let elem of g) {
        this.additionals.push({id: elem, visible: false})
      }
    }
  }

  onInputChange(e: any) {
  }

  onSettingClick(e: any) {
    // this.clearFlags();

    let name = e.target.innerText;
    for(let elem of this.additionals) {
      if(name === elem.id) {
        elem.visible = !elem.visible;
      }
    }


    Object.values(this.data).forEach(val => {
      let settingName = (val as Docs).settingName;
      let settingDesc = (val as Docs).settingDesc;
      if(settingName != undefined && settingName.length == 1) {
        if(settingName[0] === name) {
          console.log(settingDesc);
        }
      }
    })

  }

  clearFlags() {
    for(let elem of this.additionals) {
      elem.visible = false;
    }
  }

  showDoc(refid: string) {

    for(let elem of this.additionals) {
      if(elem.id === refid) {
        return elem.visible;
      }
    }
    return false;
  }

}
