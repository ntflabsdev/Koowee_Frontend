import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';


import { Contact } from '@capacitor-community/contacts';

import { Plugins } from "@capacitor/core";
const  { Contacts } = Plugins;
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
loginForm: FormGroup;
bkparray:any = [];
mycontactdetails:any = [];
checkarray:any=[];
emergancy_contacts:any=[];
newArrays:any = [];
  constructor(public userService: UserService, 
	private router : Router, 
	private fb: FormBuilder) { }

  ngOnInit() {
    this.initLoginForm();
  }

  ionViewDidEnter()
  {
        this.initLoginForm();
      this.bkparray = this.newArrays;
    this.getemergancycontatcs();
  }

  initLoginForm()
  {
      this.loginForm = this.fb.group({
     displayName:['', Validators.compose([ Validators.required])],
      phone: ['', Validators.compose([
        Validators.required,
       // Validators.minLength(13),
        Validators.pattern('^[+]+[0-9]+$')
      ])
      ],
    });
  }

  getemergancycontatcs()
  {
        this.userService.presentLoading();
        this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_emergancy_contacts').subscribe((result) => {
        this.userService.stopLoading();
        if(result.status == 1)
        {

            this.emergancy_contacts = result.data;
            var clientnames = this.emergancy_contacts;
            for (let i = 0; i < clientnames.length; i++) {
               if($.inArray(clientnames[i].contact_array,this.checkarray) == -1)
               {
                this.checkarray.push(clientnames[i].contact_array);
               }
            }
        }else
        {
           this.userService.presentToast('Failed to send request. Please try again','danger');
        }    
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }

  async getcontacts()
  {
       if(isPlatform('android'))
       {
        let permission = await Contacts.getPermissions();
        if(!permission.granted)
        {
        return;
        }
       }
		Contacts.getContacts().then(result => {
		console.log(result);

		var newArray = [];
		var clientname = result.contacts;
		for (let i = 0; i < clientname.length; i++) {
		if (clientname[i].phoneNumbers.length > 0) {
          for (let j = 0; j < clientname[i].phoneNumbers.length; j++) {
           if($.inArray(clientname[i].phoneNumbers[j].number,this.checkarray) == -1)
           {
		    var data = {
               contactId: clientname[i].contactId,
               displayName: clientname[i].displayName,
               phoneNumbers: clientname[i].phoneNumbers[j],
		     }
		    /* if(clientname[i].photoThumbnail !== "" &&  clientname[i].photoThumbnail !== null && clientname[i].photoThumbnail != undefined)
		     {
		        data['photoThumbnail'] = clientname[i].photoThumbnail;
		     }*/
		    newArray.push(data);
		    }
           }
		}
		}
		console.log(newArray);
		this.newArrays = newArray;
		this.bkparray = newArray;

		/*for (const contact of result.contacts) {
		console.log(contact);
		} */
		});

  }

  searchcontacts(bl){
     if(bl != '' && bl && bl.trim() != '')
     {
		this.newArrays =  this.bkparray;
		this.newArrays = this.newArrays.filter((item) => {
		return (item.displayName.toLowerCase().indexOf(bl.toLowerCase()) > -1 || item.phoneNumbers.number.indexOf(bl.toLowerCase()) > -1);
		});
	  }else{
	     this.newArrays =  this.bkparray;
	  }	
  
  }

  addphonenumbers(contactdetail)
  {
     
     this.checkarray.push(contactdetail.phoneNumbers.number);
     this.mycontactdetails.push(contactdetail);

		var dict = {
           _id: localStorage.getItem('user_auth_id'),
           contact_array: contactdetail.phoneNumbers.number,
           displayName: contactdetail.displayName,
           phoneNumbers: contactdetail.phoneNumbers
		};
		this.userService.presentLoading();
        this.userService.postData(dict,config.API_URL+'/add_emergancy_contacts').subscribe((result) => {
        this.userService.stopLoading();
        if(result.status == 1)
        {
			var newArray = [];
			var clientname = this.newArrays;
			for (let i = 0; i < clientname.length; i++) {
			   if($.inArray(clientname[i].phoneNumbers.number,this.checkarray) == -1)
			   {
			    newArray.push(clientname[i]);
			   }
			}
			console.log(newArray);
			this.newArrays = newArray;
			this.bkparray = newArray;
              this.userService.presentToast('Contact has been added to your emergancy contacts successfully!.','success');
        }else if(result.status == 2)
        {
           this.userService.presentToast('Phone number already exists','danger');
        }else
        {
           this.userService.presentToast('Failed to send request. Please try again','danger');
        }    
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });

       
  }


  submit()
  {


    const controls = this.loginForm.controls;
    /** check form */
    if (this.loginForm.invalid) {
    Object.keys(controls).forEach(controlName =>
    controls[controlName].markAsTouched()
    );
    return;
    }
        this.checkarray.push(controls['phone'].value);
    
        var dict = {
           _id: localStorage.getItem('user_auth_id'),
           contact_array: controls['phone'].value,
           displayName: controls['displayName'].value,
           phoneNumbers: {
            label: "mobile",
            number: controls['phone'].value
          }
        };
        this.userService.presentLoading();
        this.userService.postData(dict,config.API_URL+'/add_emergancy_contacts').subscribe((result) => {
        this.userService.stopLoading();
        if(result.status == 1)
        {
            this.loginForm.reset();
            this.getemergancycontatcs();
              this.userService.presentToast('Contact has been added to your emergancy contacts successfully!.','success');
               
        }else if(result.status == 2)
        {
           this.userService.presentToast('Phone number already exists','danger');
        }else
        {
           this.userService.presentToast('Failed to send request. Please try again','danger');
        }    
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }


  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
}

}
