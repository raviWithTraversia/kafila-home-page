import { Component, Input, Output, SimpleChanges } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-otp-form',
  templateUrl: './otp-form.component.html',
  styleUrls: ['./otp-form.component.css'],
})
export class OtpFormComponent {
  otpFormData: FormGroup = new FormGroup({})
  isTriggered = false
  otpSent = false
  method = 'Phone'
  @Input() response: any
  @Output() nextStageEvent = new EventEmitter<void>()
  @Output() closeModalEvent = new EventEmitter<void>()

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.otpFormData = new FormGroup({
      otp: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    })
  }

  handleMethodChange(value: string) {
    console.log({ value })
    this.otpSent = false
  }
  handleSentOTP(event: Event) {
    event.preventDefault()
    const companyId = this.response?.Result?.companyId
    const typeName =
      this.method === 'Phone'
        ? this.response?.Result?.phoneNumber
        : this.response?.Result?.email
    const url =
      this.method === 'Phone'
        ? 'https://kafila.traversia.net/api/otp/sentOtpPhone'
        : 'https://kafila.traversia.net/api/otp/sentOtpEmail'
    this.http
      .post(url, {
        companyId,
        type: this.method,
        typeName,
      })
      .subscribe({
        next: (response) => {
          console.log({ response })
          this.otpSent = true
        },
        error: (error) => {
          console.error({ error })
        },
      })
  }
  handleOTPSubmit(event: Event) {
    event.preventDefault()
    this.isTriggered = true
    if (this.otpFormData.controls['otp'].errors) {
      return
    }
    const typeName =
      this.method === 'Phone'
        ? this.response?.Result?.phoneNumber
        : this.response?.Result?.email
    this.http
      .post('https://kafila.traversia.net/api/otp/verify-otp', {
        otp: this.otpFormData.value.otp,
        type: this.method,
        typeName,
      })
      .subscribe({
        next: (response) => {
          console.log({ response })
        },
        error: (error) => {
          console.log({ error })
        },
      })
    this.closeModalEvent.emit()
  }
}
