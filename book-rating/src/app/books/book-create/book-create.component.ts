import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {
  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern(/^[0-9]*$/)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(80)
      ]
    }),
    description: new FormControl('', { nonNullable: true }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: Validators.min(0)
    }),
  });

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    if (!control) {
      return false;
    }

    return control.touched && control.invalid;

    // Alternativ:
    // return !!control && control.touched && control.invalid;
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    if (!control) {
      return false;
    }

    // return control.getError(errorCode) && control.touched;
    return control.hasError(errorCode) && control.touched;
    // return control.errors[errorCode] && control.touched;
  }
}

/*
TODO
- Fehler anzeigen
  - allgemein ("ISBN ist ungültig")
  - konkret ("ISBN ist zu kurz")
- Submit-Button
- abschicken
- HTTP
- bei Erfolg:
  - navigieren (Dashboard oder Detailseite)
  - Meldung anzeigen
  - zurücksetzen

*/
