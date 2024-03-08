const form =document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody =document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");
// UI OBJESİNİ BAŞLAT 
const ui = new UI();
// storage objesi oluşturma 
const storage=new Storage();
//EVENTLİST YÜKLEME 
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
    let films =storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
    
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("clear",clearAllFilms);
}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

   if(title === ""|| director === ""|| url ===""){
    //hata 
    ui.displayMasage("tüm alanlanlari doldurun..","danger");
    ui.displayMasage("başaiyla dolu","success");
    
   }
   else { //yeni film 
    const newFilm =new Film(title,director,url);
    ui.addFilmToUI(newFilm); //ARAYÜZE FİLM EKLEME 
    storage.addFilmToStorage(newFilm);//storage film ekleme 
   }

    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}

function deleteFilm(e){
    if (e.target.id ==="delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.taget.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMasage("silme işlemi başaili","success");
        
    }
}

function clearAllFilms(){
    ui.clearAllFilmFromUI();
    storage.clearAllFilmsFromStorage();
}

