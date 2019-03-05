import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap'; 

import Swal from 'sweetalert2';
import {NguoiDung} from '../models/nguoidung';
import '../css/chitiet.css';
//import tu 1 modul tap trung
import nguuuuu from '../models/nguoidung'
nguuuuu.ht

function getParamsFromURL(){
    var params = window.location.search.substr(1,).split('=');
    console.log(params)
    var courseId = params[1];
}
getParamsFromURL();

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool'
  })