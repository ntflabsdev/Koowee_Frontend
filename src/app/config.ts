// var MAIN_URL = 'http://3.101.20.58';
var MAIN_URL = 'http://3.14.86.221';
// var MAIN_URL = 'http://192.168.1.37';

//var MAIN_URL = 'http://localhost';
var MAIN_URL_PORT = '3001';
var SOCKET_URL_PORT = '3002';

export const config = {
  API_URL: MAIN_URL + ':' + MAIN_URL_PORT,
  ENC_SALT: 'gd58_N9!ysS',
  //  BASE_URL: MAIN_URL,
  BASE_URL: MAIN_URL + '/koowee/',
  SOCKET_URL: MAIN_URL + ':' + SOCKET_URL_PORT,
  //IMAGES_URL: MAIN_URL+'/surejob/images',
  IMAGES_URL_All: 'images/',
  IMAGES_URL: '/server/images/profile',
  Staff_URL: MAIN_URL + ':' + MAIN_URL_PORT + '/koowee/images/staff',
  Chat_IMAGES_URL: MAIN_URL + ':' + MAIN_URL_PORT + '/koowee/images/chat',
  Pro_IMAGES_URL: MAIN_URL + ':' + MAIN_URL_PORT + '/koowee/images/project',
  //IMAGES_URL: MAIN_URL+':'+MAIN_URL_PORT+'/koowee/images',
  //IMAGE_EXTENSIONS: ['image/png','image/jpg','image/jpeg','image/gif'],
  VIDEO_EXTENSIONS: ['video/mp4'],
  PDF_EXTENSIONS: ['application/pdf'],
  IMAGE_EXTENSIONS: [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/bmp',
    'image/webp',
  ],
  Message_EXTENSIONS: [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'application/pdf',
    'application/zip',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/excel',
    'application/vnd.ms-excel',
    'application/x-excel',
    'application/x-msexcel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  IS_MOBILE_APP: 'true',
};

export const socket_config = {
  SOCKET_URL: MAIN_URL + ':' + SOCKET_URL_PORT,
};

/*var MAIN_URL = 'http://3.21.114.226';
var MAIN_URL_PORT = '3006'; 
var SOCKET_URL_PORT = '3002'; 

export const config = {
    API_URL : MAIN_URL+':'+MAIN_URL_PORT,
    ENC_SALT: 'gd58_N9!ysS',
    BASE_URL: MAIN_URL+'/',
    IMAGES_URL: MAIN_URL+':'+MAIN_URL_PORT+'/surejob/images',
    IMAGE_EXTENSIONS: ['image/png','image/jpg','image/jpeg','image/gif','image/bmp','image/webp'],
    IS_MOBILE_APP: 'true' 
};

export const social_config = {
    FACEBOOK_ID: '440387989955093',
    GOOLGLE_CLIENT_ID: '608339143855-msuu5n847treif8htdsju9kia98nr4ms.apps.googleusercontent.com'
};

export const socket_config = {
    SOCKET_URL: MAIN_URL+':'+SOCKET_URL_PORT,
};*/
