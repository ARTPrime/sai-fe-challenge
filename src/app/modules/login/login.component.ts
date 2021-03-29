import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
    selector: 'sai-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public form = new FormGroup({});
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private snackbar: MatSnackBar
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    public onLoginClick() {
        this.authService.loginUser(this.form.value).subscribe(
            () => this.router.navigate(['main']),
            () =>
                this.snackbar.open('Athentication error', 'Close', {
                    duration: 2000,
                })
        );
    }
}
