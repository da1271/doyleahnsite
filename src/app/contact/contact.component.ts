import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name = (<HTMLInputElement>document.getElementById('inputName'));
    var email = (<HTMLInputElement>document.getElementById('inputEmail'));
    var message = (<HTMLInputElement>document.getElementById('inputMessage'));

    if (!name.value || !email.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/dwyleahn@gmail.com',
        data: $('#contact-form').serialize(),
        type: 'json'
      });
      e.preventDefault();
      name.value = name.defaultValue
      email.value = email.defaultValue
      message.value = message.defaultValue
      alertify.success("Message sent");
    }
  });
});
  }

}
