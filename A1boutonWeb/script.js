function maFonction() {
    var phrase="J'appuis sur un bouton !"
    alert(phrase)
   }
   
//Q10
   function maFonction_red() {
    document.querySelector("#param").style.color="red";
   }   
   function maFonction_green() {
    document.querySelector("#param").style.color="green";
   }   

   //alert("La NSI c’est la vie !")
//Q11 ET 12
    function anglais() {
        document.querySelector("#param").innerHTML = "it is a web page that does not do much"
        }
    function anglais_title() {
        document.querySelector("#title").innerHTML = "The trio: HTML, CSS and JavaScript"
        }
//Q13
    function fctIn(){
        document.querySelector("#souris").classList.remove("blanc");
        document.querySelector("#souris").classList.add("rouge");
        }
        function fctOut() {
        document.querySelector("#souris").classList.remove("rouge");
        document.querySelector("#souris").classList.add("blanc");
        }

        function reussite() {
        var phrase="J'ai tout compris!"
        alert(phrase);}