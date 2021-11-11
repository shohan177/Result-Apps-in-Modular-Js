import LoaclStorage from '../app/LoaclStorage.js';
import Validation from '../app/Validation.js'

let name = document.querySelector('.input_name');
let roll = document.querySelector('.input_roll');
let bn = document.querySelector('.input_bn');
let en = document.querySelector('.input_en');
let mat = document.querySelector('.input_mat');
let rel = document.querySelector('.input_rel');
let ict = document.querySelector('.input_ict');
let phy = document.querySelector('.input_phy');
let warning = document.querySelector('.warning_text');
let all_input = document.querySelectorAll('.form-input-fild');
let form = document.querySelector('#marks_fild');
let marks_list = document.querySelector('.marks_list');
let single_show_container = document.querySelector('.single_list_container')
// let single_show = document.querySelector('.single_show')



form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (Validation.fildReq(all_input)) {
        warning.innerHTML = `All filds required !`
    } else {
        let data = {
            name: name.value,
            roll: roll.value,
            bn: bn.value,
            en: en.value,
            mat: mat.value,
            rel: rel.value,
            ict: ict.value,
            phy: phy.value
        }

        let marks_store = LoaclStorage.get()
        marks_store.push(data);
        LoaclStorage.set(marks_store);
        allMarks();
        clearInput()
    }
            
});



/**
 * all result list
 */
allMarks();
function allMarks() {
    let marks_data = LoaclStorage.get();
    let marks_list_render = ""
    marks_data.map((val, index) => {
        
        let result = Validation.cgpa(val.bn, val.en, val.mat, val.rel, val.ict, val.phy);
        
        marks_list_render +=`<div class=" mt-5 flex flex-row gap-32 bg-green-200  pr-20 pl-20 pt-5 pb-5 shadow-sm rounded-lg hover:shadow-lg hover:cursor-pointer" onclick='showSingleView(); return false'>
        <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
              </svg>
        </div>
        <div class="">${val.name}</div>
        <div class=""><span class="font-bold">${result.gpa}</span>(${result.cgpa})</div>
        </div>`
    });

    marks_list.innerHTML = marks_list_render;
};
/**
 * show single view
 */
function showSingleView() {
    alert();
}

/**
 * input fild clear 
 */
function clearInput(){
    name.value = ""
    roll.value = ""
    bn.value = ""
    en.value = ""
    mat.value = ""
    rel.value = ""
    ict.value = ""
    phy.value = ""
}