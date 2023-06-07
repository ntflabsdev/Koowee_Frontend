import { Component, OnInit, Directive, HostListener, AfterViewInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Observer, Subject } from 'rxjs';
import { AlertController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import domtoimage from 'dom-to-image';
import { ViewChild, ElementRef } from '@angular/core';

const { Camera } = Plugins;
// import domtoimage from 'dom-to-image';
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
// import { jsPDF } from 'jspdf';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-step-details',
  templateUrl: './step-details.page.html',
  styleUrls: ['./step-details.page.scss'],
})
export class StepDetailsPage implements OnInit {
  @ViewChild('elementId', { static: false }) element: ElementRef;
  IMAGES_URL: any = config.IMAGES_URL;
  IMAGES_URL_All: any = config.IMAGES_URL_All;
  errors: any = ['', null, undefined];
  id: any;
  trip_id: any;
  main_trip: any = [];
  images: any = [];
  review: any = '';
  review_error: boolean = false;
  review_data: any = [];
  add_button_show: any = 0;
  pdfObj = null;
  imageData: any;
  imageElement: any

  constructor(
    public userService: UserService,
    private router: Router,
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute,
    private platform: Platform,
    private fileOpener: FileOpener) {
    this.trip_id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.id = localStorage.getItem('user_auth_id');
  }

  ngAfterViewInit() {
    console.log("hello i am running");
    // Set the Canvas Element and its size  
    const div = document.getElementById('printable-area2');
    const styles = window.getComputedStyle(div);
    this.element.nativeElement.width = parseInt(styles.width);
    this.element.nativeElement.height = parseInt(styles.height);
  }


  ionViewDidEnter() {

    this.id = localStorage.getItem('user_auth_id');
    this.getdata();
    this.getreviews();
  }

  getdata() {
    this.userService.postData({ _id: this.id, trip_id: this.trip_id }, config.API_URL + '/get_trip_detail').subscribe((result) => {
      console.log("trip 2-->", result);
      if (result.data != undefined && result.data.length > 0) {
        this.main_trip = result.data[0].trip;
        this.images = result.data[0].trip.images;
        if (this.main_trip.userId == this.id) {
          this.add_button_show = 1;
        }
      }
    });
  }


  sendreview() {


    if (this.review == '' || this.review == undefined) {
      this.review_error = true;
    } else {
      this.review_error = false;
    }

    if (this.review != '' && this.review != undefined) {
      this.userService.presentLoading();
      this.userService.postData({ review: this.review, step_id: this.trip_id, user_id: this.id }, config.API_URL + '/send_review').subscribe((result) => {
        this.userService.stopLoading();
        if (result.status == 1) {
          this.review = '';
          this.userService.presentToast('Comment has been submited successfully!', 'success');
          this.getreviews();
        } else {
          this.userService.presentToast('Error to submit a comment please, try again later', 'danger');
        }

      },
        err => {
          this.userService.stopLoading();
          this.userService.presentToast('Unable to send to a request, try again later', 'danger');
        });
    }
  }

  writereview(vl) {
    this.review = vl;
  }

  getreviews() {
    this.userService.postData({ step_id: this.trip_id, user_id: this.id }, config.API_URL + '/get_review').subscribe((result) => {
      this.review_data = result;
      console.log('this.review_data = ', this.review_data);
    });
  }

  delete(step_id, trip_id) {
    console.log('step_id == ', step_id, 'trip_id == ', trip_id);
    this.userService.postData({ step_id: step_id, user_id: this.id }, config.API_URL + '/delete_step').subscribe((result) => {
      this.router.navigate(['/trip-details/' + trip_id]);
    });
  }

  async deletstep(step_id, trip_id) {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to delete this?',
      cssClass: 'alertfults',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',

          handler: () => {
            return false;
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.delete(step_id, trip_id);
          }
        }
      ]
    });
    await alert.present();
  }


  async shareit4() {
    // console.log("name-->", name)
    this.userService.presentLoading();
    const div = document.getElementById('printable-area2');
    console.log("div-->", div)
    const options = { background: 'white', height: 845, width: 595 };
    const styles = window.getComputedStyle(div);

    // Create a new canvas element and set its dimensions to match the element
    const canvas = document.createElement("canvas");
    console.log("styles-->", styles, "canvas-->", canvas)
    canvas.width = parseInt(styles.width);
    canvas.height = parseInt(styles.height);

    console.log("width-->", canvas.width, "canvas-->", canvas.height)

    // Create a new image element and set its source to the data URL of the element

    const img = new Image();
    console.log("IMAGE--->", img)
    img.src = "data:image/png;base64," + img;

    console.log("platform-->", this.platform.is("cordova"))
    console.log("img src=========>", img)

    // const loadImage = () => {
    //   console.log("LOad img=========>",)
    //   return new Promise<void>((resolve, reject) => {
    //     img.onload = () => {
    //       resolve(); 
    //       console.log("RESOLve--->")
    //     };
    //     img.onerror = () => {
    //       reject();
    //       this.userService.stopLoading()
    //       console.log("REJect--->")
    //     };
    //   });
    // };

    // loadImage().then(() => {
    //   console.log("LOADIMG()--->")
    //   const canvas = document.createElement("canvas");
    //   canvas.width = img.width;
    //   canvas.height = img.height;
    //   const context = canvas.getContext("2d");
    //   context.drawImage(img, 0, 0, canvas.width, canvas.height);

    //   // Get the data URL representing the canvas content as a PNG image
    //   const dataUrl = canvas.toDataURL("image/png");

    //   // Create the PDF document definition using the image
    //   const docDefinition = {
    //     content: [{
    //       image: dataUrl,
    //       width: 500,
    //     }]
    //   };
    // this.pdfObj = pdfMake.createPdf(docDefinition);
    // var blob = this.b64toBlob(, "application/pdf");

    // console.log("pdfobj-->", this.pdfObj)
    // console.log("platform-->", this.plt.is("cordova"))
    // if (this.plt.is('cordova')) {
    //   console.log("if--->")
    //   // this.pdfObj.getBase64(async (data) => {
    //     try {
    //       console.log("try--->")
    //       let path = `pdf/paymentdetail_${Date.now()}.pdf`;
    //       const result = await Filesystem.writeFile({
    //         path,
    //         data,
    //         directory: Directory.Documents,
    //         recursive: true
    //       });
    //       console.log('path === ', path, result.uri);
    //       this.userService.stopLoading();
    //       this.fileOpener.open(`${result.uri}`, 'application/pdf');
    //       return;

    //     }
    //     catch (e) {
    //       console.error('Unable to write file', e);
    //     }
    //   // })

    // }
    // else {
    //   console.log("else--->")
    //   this.userService.stopLoading()
    //   this.pdfObj.download("payment_Details.pdf");
    // }



    // })

    // Once the image has loaded, draw it onto the canvas
    //  img.onload = () => {
    //     const context = canvas.getContext("2d");
    //     context.drawImage(img, 0, 0, canvas.width, canvas.height);

    //     console.log("contextDRAwing-->",context)

    //     // Get the data URL representing the canvas content as a PNG image
    //     const dataUrl = canvas.toDataURL("image/png");
    //     console.log("dataurl-->",dataUrl)

    //     const docDefinition = {
    //       content: [{
    //         image: dataUrl,
    //         width: 500,
    //       }]
    //     };
    //     this.pdfObj = pdfMake.createPdf(docDefinition);
    //     console.log("pdfobj-->", this.pdfObj)
    //     console.log("platform-->", this.plt.is("cordova"))
    //     if (this.plt.is('cordova')) {
    //       console.log("if--->")
    //             this.pdfObj.getBase64(async (data) => {
    //               try {
    //                 console.log("try--->")
    //                 let path = `pdf/paymentdetail_${Date.now()}.pdf`;
    //                 const result = await Filesystem.writeFile({
    //                   path,
    //                   data,
    //                   directory: Directory.Documents,
    //                   recursive: true
    //                 });
    //                 console.log('path === ', path, result.uri);
    //                 this.userService.stopLoading();
    //                 this.fileOpener.open(`${result.uri}`, 'application/pdf');
    //                 return;

    //               }
    //                  catch (e) {
    //                 console.error('Unable to write file', e);
    //               }
    //             })

    //           }
    //           else {
    //             console.log("else--->")
    //             this.userService.stopLoading()
    //             this.pdfObj.download("payment_Details.pdf");
    //           }
    //   }

    //  domtoimage.toPng(div, options).then(
    //   (dataUrl) => {
    //     var img = new Image();
    //     console.log("hello 2");


    // var docDefinition = {
    //   content: [{
    //     image: dataUrl,
    //     width: 500,
    //   }]
    // };
    //     //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
    //     this.pdfObj = pdfMake.createPdf(docDefinition);


    //     if (this.plt.is('cordova')) {
    //       this.pdfObj.getBase64(async (data) => {
    //         try {
    //           let path = `pdf/paymentdetail_${Date.now()}.pdf`;
    //           const result = await Filesystem.writeFile({
    //             path,
    //             data,
    //             directory: Directory.Documents,
    //             recursive: true
    //           });
    //           console.log('path === ', path, result.uri);
    //           this.userService.stopLoading();
    //           this.fileOpener.open(`${result.uri}`, 'application/pdf');
    //           return;

    //         }
    //            catch (e) {
    //           console.error('Unable to write file', e);
    //         }
    //       });
    //     } else {
    //       //this.pdfObj.download("payment_Details.pdf");
    //     }

    //   },
    //   (err) => {
    //     this.userService.stopLoading()
    //     console.log("error", err);

    //   }
    //   ) 
  }


  convertBase64ToBlob(b64Data, contentType): Blob {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }




  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    let sliceSize = 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }


  base64ToPDF(base64String, filename) {
    // Remove data prefix from base64 string
    const base64Data = base64String.replace(/^data:application\/pdf;base64,/, "");

    // Convert base64 string to Uint8Array
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Create PDF blob
    const pdfBlob = new Blob([byteArray], { type: "application/pdf" });

    // Create URL for the PDF blob
    const pdfURL = URL.createObjectURL(pdfBlob);

    // Create download link and trigger click event
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfURL;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up URL object
    URL.revokeObjectURL(pdfURL);
  }

  demoDownlaod() {
    domtoimage.toPng(this.element.nativeElement)
      .then(function (dataUrl) {
        console.log("------>", dataUrl)
        // this.imageData = dataUrl.replace(/^data:image\/[a-z]+;base64,/, "");

        let sliceSize = 512;
        var byteArrays = [];
        const byteCharacters = atob(dataUrl.replace(/^data:image\/[a-z]+;base64,/, ""));
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);

          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          var byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
        }
        console.log("bytenumber===>", byteArray)
        var string = new TextEncoder().encode("Plain Text");
        console.log("String==>", string)
        const img = new Blob([string], { type: 'application/pdf' });
        console.log('img==>', img);
        let a = document.createElement("a");
        document.body.appendChild(a);
        var url = window.URL.createObjectURL(img);
        window.open(url)
        a.href = url;
        a.download = String("propsal.pdf");
        a.click();
        window.URL.revokeObjectURL(url);




        // if (this.plt.is('cordova')) {
        //   console.log("if--->")
        //   this.pdfObj.getBase64(async (data) => {
        //     try {
        //       console.log("try--->")
        //       let path = `pdf/paymentdetail_${Date.now()}.pdf`;
        //       const result = await Filesystem.writeFile({
        //         path,
        //         data,
        //         directory: Directory.Documents,
        //         recursive: true
        //       });
        //       console.log('path === ', path, result.uri);
        //       this.userService.stopLoading();
        //       this.fileOpener.open(`${result.uri}`, 'application/pdf');
        //       return;

        //     }
        //     catch (e) {
        //       console.error('Unable to write file', e);
        //     }
        //   })

        // }
        // else {
        //   const filename = Math.random() * 2000;
        //   const downloadLink = document.createElement('a');
        //   downloadLink.href = dataUrl;
        //   downloadLink.download = filename.toString();
        //   downloadLink.style.display = 'none';
        //   document.body.appendChild(downloadLink);
        //   downloadLink.click();
        //   document.body.removeChild(downloadLink);
        //   console.log("else--->")
        //   this.userService.stopLoading()
        //   this.pdfObj.download("payment_Details.pdf");
        // }
      });

  }


  async downlaod() {
    try {
      const dataUrl = await domtoimage.toPng(this.element.nativeElement)
      const docDefinition = {
        content: [{
          image: dataUrl,
          width: 500,
        }]
      };
      if (this.platform.is("cordova")) {
        console.log("hello");
        this.pdfObj = pdfMake.createPdf(docDefinition);
        this.pdfObj.getBase64(async (data) => {
          try {
            let path = `pdf/paymentdetail_${Date.now()}.pdf`;
            const result = await Filesystem.writeFile({
              path,
              data,
              directory: Directory.Documents,
              recursive: true
            });
            console.log('path === ', path, result.uri);
            this.userService.stopLoading();
            this.fileOpener.open(`${result.uri}`, 'application/pdf');
          }
          catch (e) {
            console.error('Unable to write file', e);
          }
        });
      } else {
        const a: any = document.createElement('a');
        a.href = dataUrl;
        a.download = "fndhfaf.png";
        document.body.appendChild(a);
        a.style = 'display: none';
        a.click();
        a.remove();
      }
    } catch (error) {
      console.log("error in catch ==>", error);

    }
  }
}


