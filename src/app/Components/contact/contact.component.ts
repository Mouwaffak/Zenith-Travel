import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ActivatedRoute} from "@angular/router";
import { error } from 'console';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() nom: string = '';
  @Input() mail: string = '';
  @Input() phone: string = '';
  @Input() country: string = '';
  @Input() subject: string = '';
  @Input() message: string = '';
  contactForm! :FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      nom: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit(){
    if (this.contactForm.valid) {
      console.log('Message delivered successfully!');
      // Navigate or handle form submission here
      // For example: this.router.navigate(['/thank-you']);
    } else {
      console.error('Error: Form is invalid.');
    }
  }
}
