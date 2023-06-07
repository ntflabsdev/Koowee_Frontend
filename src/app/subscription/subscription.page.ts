import { Component, OnInit } from "@angular/core";
import {
  InAppPurchase2,
  IAPProduct,
} from "@awesome-cordova-plugins/in-app-purchase-2/ngx";
import { Platform } from "@ionic/angular";
import { SwipeService } from "../swipe.service";
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import * as moment from "moment";

const MONTHLYLVL_KEY = "pro_1011";

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.page.html",
  styleUrls: ["./subscription.page.scss"],
})
export class SubscriptionPage implements OnInit {
  price: any = 19.99;
  month: any = "month";
  monthly: any = true;
  yearly: any;
  quaterly: any;
  product: any;
  id: any = "pro_1011";
  userid: any;
  purchasedata: any;
  productIds = ["pro_1011", "pro_1012", "pro_1013"]; // <- Add your product Ids here
  products: any;
  detail: any;
  // products = [];

  constructor(
    public userService: UserService,
    private platform: Platform,
    private iap2: InAppPurchase2,
    public SwipeService: SwipeService
  ) {
    this.platform.ready().then(() => {
      console.log("PLATFORM IS READY==>");
      // this.setup()
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.setup()
    })
  }



  monthlyplan() {
    this.monthly = true;
    this.yearly = false;
    this.quaterly = false;
    this.price = 19.99;
    this.month = "month";
    this.id = "pro_1011";
  }
  quaterlyplan() {
    this.price = 14.99;
    this.month = "Half Yearly";
    this.quaterly = true;
    this.monthly = false;
    this.yearly = false;
    this.id = "pro_1012";
  }
  yearlyplan() {
    this.quaterly = false;
    this.monthly = false;
    this.yearly = true;
    this.price = 9.99;
    this.month = "Year";
    this.id = "pro_1013";
  }

  setup() {
    this.iap2.verbosity = this.iap2.DEBUG;
    this.iap2.register([
      {
        id: "pro_1011",
        type: this.iap2.PAID_SUBSCRIPTION,
        alias: "Monthly Plan",
      },
      {
        id: "pro_1012",
        type: this.iap2.PAID_SUBSCRIPTION,
        alias: "Half Yearly Plan",
      },
      {
        id: "pro_1013",
        type: this.iap2.PAID_SUBSCRIPTION,
        alias: "Annual Plan",
      },
    ]);

    // Register event handlers for the specific product
    this.iap2.when("Monthly Plan").registered((product: IAPProduct) => {
      console.log("Registered: " + JSON.stringify(product));
    });
    this.iap2.when("Half Yearly Plan").registered((product: IAPProduct) => {
      console.log("Registered: " + JSON.stringify(product));
    });
    this.iap2.when("Annual Plan").registered((product: IAPProduct) => {
      console.log("Registered: " + JSON.stringify(product));
    });

    // Updated
    this.iap2.when("Monthly Plan").updated((product: IAPProduct) => {
      console.log("Updated" + JSON.stringify(product));
    });
    this.iap2.when("Half Yearly Plan").updated((product: IAPProduct) => {
      console.log("Updated" + JSON.stringify(product));
    });
    this.iap2.when("Annual Plan").updated((product: IAPProduct) => {
      console.log("Updated" + JSON.stringify(product));
    });

    //APPROVED
    this.iap2.when("Monthly Plan").approved((e) => {
      if (e.state === "approved") {
        // Get the current date
        const currentDate = moment();
        // Get the date 30 days from now
        const futureDate = moment().add(30, 'days');;
        const transactionId = e.transaction.id;
        this.storePurchaseData(transactionId, currentDate, futureDate)
      }
    });

    this.iap2.when("Half Yearly Plan").approved((e) => {
      if (e.state === "approved") {
        // Get the current date
        const currentDate = moment();
        // Get the date 30 days from now
        const futureDate = moment().add(180, 'days');;
        const transactionId = e.transaction.id;
        this.storePurchaseData(transactionId, currentDate, futureDate)
      }

    });
    this.iap2.when("Annual Plan").approved((e) => {
      if (e.state === "approved") {
        // Get the current date
        const currentDate = moment();
        // Get the date 30 days from now
        const futureDate = moment().add(365, 'days');;
        const transactionId = e.transaction.id;
        this.storePurchaseData(transactionId, currentDate, futureDate)
      }
    });


    // User closed the native purchase dialog
    this.iap2.when("Monthly Plan").cancelled((product) => {
      console.error("Purchase was Cancelled");
    });
    this.iap2.when("Half Yearly Plan").cancelled((product) => {
      console.error("Purchase was Cancelled");
    });
    this.iap2.when("Annual Plan").cancelled((product) => {
      console.error("Purchase was Cancelled");
    });

    // Track all store errors
    this.iap2.error((err) => {
      console.error("Store Error " + JSON.stringify(err));
    });

    this.iap2.autoFinishTransactions = true
    // Refresh the status of in-app products
    this.iap2.refresh();
  }

  checkout(val) {
    if (val == "pro_1011") {
      this.iap2.order("pro_1011").then((data) => { 
          console.log("purchase successfull", data);
        })
        .catch((err) => {
          console.log("ERROR in ORDER--->", err);
        });
    }
    if (val == "pro_1012") {
      this.iap2.order("pro_1012").then((data) => {
          console.log("purchase successfull", data);
        })
        .catch((err) => {
          console.log("ERROR in ORDER--->", err);
        });
    }
    if (val == "pro_1013") {
      this.iap2.order("pro_1013").then((data) => {
          console.log("purchase successfull", data);
        })
        .catch((err) => {
          console.log("ERROR in ORDER--->", err);
        });
    }
  }

  storePurchaseData(transactionId,currentDate, futureDate ){
    this.userid = localStorage.getItem('user_id')
    this.detail = {
      "isSubscribe": true,
      "_id": this.userid,
      "transactionId": transactionId,
      "subcription_start_date": currentDate,
      "subcription_end_date": futureDate,
    };
    this.userService.postData(this.detail, config.API_URL + '/update_profile').subscribe((result) => {
      console.log("results =======>", result);
      
    })
  }

}
