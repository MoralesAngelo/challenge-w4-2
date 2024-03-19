import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  template: ` <form id="accessDataForm">
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" name="username" required /><br />

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required /><br />

    <label for="repeatPassword">Repetir contraseña:</label>
    <input
      type="password"
      id="repeatPassword"
      name="repeatPassword"
      required
    /><br />

    <label for="accountType">Tipo de cuenta:</label>
    <select id="accountType" name="accountType" required>
      <option value="personal">Personal</option>
      <option value="pro">Pro</option>
      <option value="business">Business</option></select
    ><br />

    <button type="submit">Siguiente</button>
  </form>`,
  styles: ``,
})
export class UserFormComponent {}
