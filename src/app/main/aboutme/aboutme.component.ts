import { Component, OnInit } from "@angular/core";
import { NgwWowService } from "ngx-wow";

@Component({
  selector: "app-aboutme",
  templateUrl: "./aboutme.component.html",
  styleUrls: ["./aboutme.component.scss"]
})
export class AboutmeComponent implements OnInit {
  ngOnInit(): void {
    this.wowService.init();
  }
  constructor(private wowService: NgwWowService) {}
}
