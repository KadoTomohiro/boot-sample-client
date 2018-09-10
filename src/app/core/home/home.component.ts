import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { timeout } from 'q';


interface TestResult {
  hoge: string;
}

@Component({
  selector: 'bsc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: TestResult;
  error: Error;

  url = `${environment.apiHost}/api/test`;

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.client.get<TestResult>(this.url)
      .subscribe(
        result => this.result = result,
        error => this.error = error
        );
  }
}
