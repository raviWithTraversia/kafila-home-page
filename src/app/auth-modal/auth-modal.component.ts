import { HttpClient } from '@angular/common/http'
import { Component, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent {
  @Output() closeEvent = new EventEmitter<void>()
  signInFormData: FormGroup = new FormGroup({})
  otpFormData: FormGroup = new FormGroup({})
  isTriggered = false
  showPassword = false
  stage = 1
  response: any
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.signInFormData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }
  triggerCloseEvent() {
    this.closeEvent.emit()
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword
  }
  handleSignIn(event: Event) {
    event.preventDefault()
    this.isTriggered = true
    console.log({ signInFormData: this.signInFormData })
    if (
      this.signInFormData.controls['email'].errors ||
      this.signInFormData.controls['password'].errors
    )
      return
    this.http
      .post<any>(
        'https://kafila.traversia.net/api/user/login',
        this.signInFormData.value,
      )
      .subscribe({
        next: (data) => {
          console.log({ data })
          this.response = data
          this.moveToNextStage()
        },
        error: (error) => {
          console.log({ error: error.error.Message })
        },
      })
  }
  preventClose(event: Event) {
    event.stopPropagation()
  }

  moveToNextStage() {
    this.stage++
    this.isTriggered = false
  }
}
