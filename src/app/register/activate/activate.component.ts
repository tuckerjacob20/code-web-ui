import { AlertService } from './../../services/alert/alert.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../../services/user/user.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit, OnDestroy {

  activationCode: string;
  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
     this.routeSubscription = this.route.params.subscribe(params => {
      this.activationCode = params['guid'] || '';
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  activate() {
    this.userService.activateUser(this.activationCode).subscribe(
      res => {
        this.alertService.info('Account activated!');
        this.router.navigate(['/login']);
    }, error => {
      this.alertService.error('Unable to activate your account.');
    });
  }

}