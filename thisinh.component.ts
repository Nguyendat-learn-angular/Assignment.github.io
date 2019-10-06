import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thisinh',
  templateUrl: './thisinh.component.html',
  styleUrls: ['./thisinh.component.css']
})
export class ThisinhComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  danhsach=[
    {
        "username": "teonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Tèo",
        "email": "teonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1995-12-21",
        "schoolfee": "1500000",
        "marks": "0"
    },
    {
        "username": "pheonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Chí Phèo",
        "email": "pheonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1985-10-11",
        "schoolfee": "2500000",
        "marks": "0"
    },
    {
        "username": "nopt",
        "password": "iloveyou",
        "fullname": "Phạm Thị Nở",
        "email": "nopt@fpt.edu.vn",
        "gender": "false",
        "birthday": "1993-05-15",
        "schoolfee": "2000000",
        "marks": "0"
    }
]
}
