import { Component, signal, computed, Input, input, output, Output, EventEmitter } from '@angular/core';
import { type user } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type user = {
//   id:string,
//   avatar: string,
//   name: string,
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  // // signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]) ;
  // get imagePath() {
  //   return 'assets/' + this.selectedUser.avatar;
  // } check for the signal. If only signal recieves new value angular will recomupted. will recompute, If one the single used in it
  // imagePath = computed(()=> 'assets/' + this.selectedUser().avatar)
  // onSelectedUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    
  //   // this.selectedUser = DUMMY_USERS[randomIndex] instead use signal, then call as function.
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
   
  // // @input()
  // @Input({required:true}) id!:string;
  // @Input({required: true}) avatar!: string; // explicitly use type or else cause error.
  // @Input({required: true}) name!: string; // required - gets error when forget to value for 1 prop in par comp
  // object
  // @Input({required: true}) user!: {
  //   id:string,
  //   avatar:string,
  //   name:string,
  // } or 
  @Input({required: true}) user!: user // type alias
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // emit custom values
  // using signal input
  // avatar = input.required<string>(); // if required is uesd need to notify ang which datatype need to be used
  // name = input.required<string>(); //  cannot change value , bcuz inputs are registered.
   
  // select = output<string>();// event emitter is not signal. datatype is imp. or else cause error. Typescript dosent know the type.
  get imagePath() {
    return 'assets/' + this.user.avatar;
  } 
  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
