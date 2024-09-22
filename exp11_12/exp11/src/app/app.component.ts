// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //Pipelines
  dob = new Date() // Date Pipeline
  name = "Rohit" // Uppercase Pipeline
  occupation = "Data Scientist" // Uppercase Pipeline
  salary = 100000 // Currency Pipeline
  num = 0.98 // Percent Pipeline

  address = { // JSON Pipeline
    'city': 'Eluru',
    'state': 'Andhra Pradesh',
    'country': 'India'
  }

  person = { // Custom Pipeline
    'name': 'Rohit',
    'gender': 'M',
  }
}