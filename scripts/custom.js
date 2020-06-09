$(window).on('load',function(){
    $('.menu').css('display','block');
    $('#preloader').addClass('preloader-hide');
})

$(document).ready(function(){      
    'use strict'	
    
    var isPWA = true; //Enables PWA.js which loads manifest & service worker.
    var isAJAX = true; //Enables or disable AJAX page transitions and loading.
    var isDevelopment = false; // Enables development mode. Clean cache & Stops BG & Highlights from changing defaults.
    
	function init_template(){
                
        //ADD YOUR CUSTOM JAVASCRIPT CODES HERE! 
        //Do not put inside HTML files.
        //The init_template() function will be triggered when pages open.
        
        
        ///////////Utilities
        
		
	//Redirect if not on mobile	
	    $(window).on('load resize',function(){
        if($(window).width() > 600){
            window.location = "https://www.google.com"
        }
    });	
		
		
        //Generate seasonal product array selector
        
        const seasonProductSelector = Math.floor(Math.random() * 7); 
        
        //initialize SmoothScroll plugin for all anchor links
        var scroll = new SmoothScroll('a[href*="#"]');
        
        // return seasonal products array
        var dddd = new Date();
        var nnnn = dddd.getMonth();
        const getSeasonalProductsArray = (nnnn) => {
        let productArray = [];
      switch (nnnn) {
        case 0 : return productArray = ['beetroot','brussel sprouts','cauliflower','rutabaga','kale','leek','cabbage']


          break;
        case 1 : return productArray = ['broccoli','turnips','parsnip','cauliflower','rutabaga','kale','leek']


          break;
        case 2 : return productArray = ['artichokes','lettuce','radishes','turnips','cauliflower','broccoli','leek']


          break;
        case 3 : return productArray = ['mushrooms','asparagus','lettuce','cauliflower','artichokes','leeks','broccoli']


          break;
        case 4 : return productArray = ['zucchini','lettuce','asparagus','artichokes','chive','radishes','green beans']


          break;
        case 5 : return productArray = ['watermelon','zucchini','garlic','celery','tomato','cucumber','carrot']

          break;

        case 6 : return productArray = ['onion','aubergine','radish','courgette','lettuce','green beans','chicory']



          break;
        case 7 : return productArray = ['tomato','red pepper','peas','courgette flower','cucumber','chard','onion']



          break;
        case 8 : return productArray = ['white cabbage','tomatoes','aubergine','pumpkin','shallot','rocket','mushroom']



          break;
        case 9 : return productArray = ['chicory','radicchio','turnip','horseradish','celery','cauliflower','pumkin']



          break;
        case 10 : return productArray = ['savoy cabbage','horseradish','spinach','pumpkin','white cabbage','onion','leek']



          break;
        case 11 : return productArray = ['beetroot','leek','artichokes','carrot','sauerkraut','pumpkin','fennel']


          break;
        }
    }

        

        const getSeasonalProductsPicArray = (nnnn) => {
        let picArray = [];
      switch (nnnn) {
        case 0 : return picArray = ['https://image.freepik.com/free-photo/beetroot-isolated-white-background_42547-291.jpg','https://images.assetsdelivery.com/compings_v2/elenathewise/elenathewise1001/elenathewise100100055.jpg','https://image.freepik.com/free-photo/fresh-cauliflower-isolated-white-background_33736-2684.jpg','https://www.cuisinealafrancaise.com/img/thumbs/Navets-01929e6e790486ae20ac9ba47adb2ba1.jpg','https://www.biendecheznous.be/sites/default/files/ps_image/istock_savooikool.jpg','https://cdn.pratico-pratiques.com/app/uploads/sites/6/2018/09/05142626/poireaux.jpeg','https://images.heb.com/is/image/HEBGrocery/000374791']



          break;
        case 1 : return picArray = ['https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2457.jpg','https://www.cuisinealafrancaise.com/img/thumbs/Navets-01929e6e790486ae20ac9ba47adb2ba1.jpg','https://www.allmychefs.com/images/1515/370-274/ffffff/panais.jpg?poix=50&poiy=50','https://image.freepik.com/free-photo/fresh-cauliflower-isolated-white-background_33736-2684.jpg','https://www.cuisinealafrancaise.com/img/thumbs/Navets-01929e6e790486ae20ac9ba47adb2ba1.jpg','https://www.biendecheznous.be/sites/default/files/ps_image/istock_savooikool.jpg','https://cdn.pratico-pratiques.com/app/uploads/sites/6/2018/09/05142626/poireaux.jpeg']



          break;
        case 2 : return picArray = ['https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/1455-2.jpg?v-cache=1588155530','https://img-3.journaldesfemmes.fr/Hwbeol52Jz1DRBwgjBjrkmDF4Zg=/910x607/smart/e768c994317848edb31ced2ab6a2f35e/ccmcms-jdf/10661612.jpg','https://lh3.googleusercontent.com/proxy/kjaq923jj7HpBQlXdxxof_1PFplxK9zBpvtBGj1m5kRDTggmtCStspZUJNA8D4mkFHJT1exjJWSpe2UBPw3QVz7jAwnxYVUqt5lyRj3KS9M4KOu86-eJIqc','https://www.cuisinealafrancaise.com/img/thumbs/Navets-01929e6e790486ae20ac9ba47adb2ba1.jpg','https://image.freepik.com/free-photo/fresh-cauliflower-isolated-white-background_33736-2684.jpg','https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2457.jpg','https://cdn.pratico-pratiques.com/app/uploads/sites/6/2018/09/05142626/poireaux.jpeg']



          break;
        case 3 : return picArray = ['https://cleananddelicious.com/wp-content/uploads/2015/12/Mushroom640-1.jpg','https://pngriver.com/wp-content/uploads/2018/04/Download-Asparagus-Transparent-Background.png','https://img-3.journaldesfemmes.fr/Hwbeol52Jz1DRBwgjBjrkmDF4Zg=/910x607/smart/e768c994317848edb31ced2ab6a2f35e/ccmcms-jdf/10661612.jpg','https://image.freepik.com/free-photo/fresh-cauliflower-isolated-white-background_33736-2684.jpg','https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/1455-2.jpg?v-cache=1588155530','https://cdn.pratico-pratiques.com/app/uploads/sites/6/2018/09/05142626/poireaux.jpeg','https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2457.jpg']



          break;
        case 4 : return picArray = ['https://img-3.journaldesfemmes.fr/PVIbH_pGxMFhGPl8oEkWr3DbtaY=/910x607/smart/3d4af6fac7234c2283fd7d9cf34e6981/ccmcms-jdf/10659281.jpg','https://img-3.journaldesfemmes.fr/Hwbeol52Jz1DRBwgjBjrkmDF4Zg=/910x607/smart/e768c994317848edb31ced2ab6a2f35e/ccmcms-jdf/10661612.jpg','https://pngriver.com/wp-content/uploads/2018/04/Download-Asparagus-Transparent-Background.png','https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/1455-2.jpg?v-cache=1588155530','https://www.agrimaroc.net/wp-content/uploads/2018/05/ciboulette28.jpg','https://lh3.googleusercontent.com/proxy/kjaq923jj7HpBQlXdxxof_1PFplxK9zBpvtBGj1m5kRDTggmtCStspZUJNA8D4mkFHJT1exjJWSpe2UBPw3QVz7jAwnxYVUqt5lyRj3KS9M4KOu86-eJIqc','https://image.freepik.com/free-photo/green-beans-handful-isolated-white-background-cutout_1205-1714.jpg']



          break;
        case 5 : return picArray = ['https://www.cuisine-de-bebe.com/wp-content/uploads/gde-past%C3%A8que.jpg','https://img-3.journaldesfemmes.fr/PVIbH_pGxMFhGPl8oEkWr3DbtaY=/910x607/smart/3d4af6fac7234c2283fd7d9cf34e6981/ccmcms-jdf/10659281.jpg','https://www.bbcgoodfood.com/sites/default/files/glossary/garlic.jpg','https://image.freepik.com/free-photo/green-celery-white-background-healthy-eating_8454-443.jpg','https://img-3.journaldesfemmes.fr/XefjM-y39CEUxVYN84YvVrrPA-I=/910x607/smart/c56b0b2648d747c28d82300380c1a207/ccmcms-jdf/10523670.jpg','https://img-3.journaldesfemmes.fr/ov22esa_6QehxsFs7mi2QtdfFOE=/910x607/smart/46dbda9272fb4f74bb89fda8c58f61b1/ccmcms-jdf/10659242.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1lpRi0OYBJD24ITqKfp3Tig7yl_hn6LIxdB7h4ijhk-FyXuKd&usqp=CAU']


          break;

        case 6 : return picArray = ['https://www.ukscreenalliance.co.uk/wp-content/uploads/2019/06/Onion-AdobeStock_123486457-2048x1403.jpeg','https://lh3.googleusercontent.com/proxy/d1uCi_-m3nt4NtnknC4C8D4TQ6x8MjDJ_X9A2VcakRL05DOxdcZnPQGUtwxIOEkogAEUtNEbHrYIjv1fRcqbiIbs-J8qtZbCH9Td','https://lh3.googleusercontent.com/proxy/kjaq923jj7HpBQlXdxxof_1PFplxK9zBpvtBGj1m5kRDTggmtCStspZUJNA8D4mkFHJT1exjJWSpe2UBPw3QVz7jAwnxYVUqt5lyRj3KS9M4KOu86-eJIqc','https://img-3.journaldesfemmes.fr/PVIbH_pGxMFhGPl8oEkWr3DbtaY=/910x607/smart/3d4af6fac7234c2283fd7d9cf34e6981/ccmcms-jdf/10659281.jpg','https://img-3.journaldesfemmes.fr/Hwbeol52Jz1DRBwgjBjrkmDF4Zg=/910x607/smart/e768c994317848edb31ced2ab6a2f35e/ccmcms-jdf/10661612.jpg','https://image.freepik.com/free-photo/green-beans-handful-isolated-white-background-cutout_1205-1714.jpg','https://www.saisons-fruits-legumes.fr/www/img/fruitsandvegetables/endive.jpeg']




          break;
        case 7 : return picArray = ['https://img-3.journaldesfemmes.fr/XefjM-y39CEUxVYN84YvVrrPA-I=/910x607/smart/c56b0b2648d747c28d82300380c1a207/ccmcms-jdf/10523670.jpg','https://az836796.vo.msecnd.net/media/image/product/en/large/0000000004688.jpg','https://canyoumicrowaveit.com/wp-content/uploads/2018/03/Peas-300x234.jpg','https://www.naturespride.eu/uploads/images/producten/courgettebloem_2a.jpg','https://img-3.journaldesfemmes.fr/ov22esa_6QehxsFs7mi2QtdfFOE=/910x607/smart/46dbda9272fb4f74bb89fda8c58f61b1/ccmcms-jdf/10659242.jpg','https://thumbs.dreamstime.com/b/swiss-rainbow-chard-isolated-white-bunch-leafves-background-fresh-yellow-red-green-colors-top-view-flat-lay-164229057.jpg','https://www.ukscreenalliance.co.uk/wp-content/uploads/2019/06/Onion-AdobeStock_123486457-2048x1403.jpeg']




          break;
        case 8 : return picArray = ['https://cdn.shopify.com/s/files/1/0018/8327/5325/products/White_Cabbage.jpg?v=1587107652','https://img-3.journaldesfemmes.fr/XefjM-y39CEUxVYN84YvVrrPA-I=/910x607/smart/c56b0b2648d747c28d82300380c1a207/ccmcms-jdf/10523670.jpg','https://lh3.googleusercontent.com/proxy/d1uCi_-m3nt4NtnknC4C8D4TQ6x8MjDJ_X9A2VcakRL05DOxdcZnPQGUtwxIOEkogAEUtNEbHrYIjv1fRcqbiIbs-J8qtZbCH9Td','https://www.akesohealthsciences.com/wp-content/uploads/2018/12/AdobeStock_45465133-300x210.jpeg','https://produits.bienmanger.com/34669-0w470h470_Echalote_Fraiche_France_Bio.jpg','https://www.academiedugout.fr/images/16383/370-274/ffffff/fotolia_47160505_s-copy.jpg?poix=50&poiy=50','https://cleananddelicious.com/wp-content/uploads/2015/12/Mushroom640-1.jpg']



          break;
        case 9 : return picArray = ['https://www.saisons-fruits-legumes.fr/www/img/fruitsandvegetables/endive.jpeg','https://www.almagourmet.com/store/images/radicchio-tardivo.jpg','https://www.cuisinealafrancaise.com/img/thumbs/Navets-01929e6e790486ae20ac9ba47adb2ba1.jpg','https://www.lesjardinsdalbert.fr/wp-content/uploads/2015/10/Capture-d%E2%80%99%C3%A9cran-2015-10-14-%C3%A0-18.32.09.png','https://image.freepik.com/free-photo/green-celery-white-background-healthy-eating_8454-443.jpg','https://image.freepik.com/free-photo/fresh-cauliflower-isolated-white-background_33736-2684.jpg','https://www.akesohealthsciences.com/wp-content/uploads/2018/12/AdobeStock_45465133-300x210.jpeg']




          break;
        case 10 : return picArray = ['https://img.rasset.ie/000a6c0c-1600.jpg','https://www.lesjardinsdalbert.fr/wp-content/uploads/2015/10/Capture-d%E2%80%99%C3%A9cran-2015-10-14-%C3%A0-18.32.09.png','https://www.plaineduroussillon.com/wp-content/uploads/2017/06/Epinard.png','https://www.akesohealthsciences.com/wp-content/uploads/2018/12/AdobeStock_45465133-300x210.jpeg','https://cdn.shopify.com/s/files/1/0018/8327/5325/products/White_Cabbage.jpg?v=1587107652','https://www.ukscreenalliance.co.uk/wp-content/uploads/2019/06/Onion-AdobeStock_123486457-2048x1403.jpeg','https://cdn.pratico-pratiques.com/app/uploads/sites/6/2018/09/05142626/poireaux.jpeg']




          break;
        case 11 : return picArray = ['https://image.freepik.com/free-photo/beetroot-isolated-white-background_42547-291.jpg','https://cdn.pratico-pratiques.com/app/uploads/sites/6/2018/09/05142626/poireaux.jpeg','https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/1455-2.jpg?v-cache=1588155530','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1lpRi0OYBJD24ITqKfp3Tig7yl_hn6LIxdB7h4ijhk-FyXuKd&usqp=CAU','https://produits.bienmanger.com/35980-1w0h0_Organic_Raw_Sauerkraut_From_France.jpg','https://www.akesohealthsciences.com/wp-content/uploads/2018/12/AdobeStock_45465133-300x210.jpeg','https://assets.reluctantgourmet.com/wp-content/uploads/2010/03/02162849/1f927a512a9909833c7b57ab40062fc5.jpg']



          break;
        }
    }
        
        //force scroll to Top
        function scrollToTop() { 
            window.scrollTo(0, 0); 
        }
        scrollToTop();        
        
   
        //define reload page function
        const reloadPage = () => {
            window.location = "seazn-product.html"
        };


        
        ///////////End utilities

        
        
        //
        //
        // Seasonal product and recipe page
        
        
        //display ingredient title
       
       if (document.getElementById("seasonalText")) { 
        document.getElementById("seasonalText").innerHTML = 'It\'s a great time to eat <br><u>'+getSeasonalProductsArray(nnnn)[seasonProductSelector]+"</u> !";

        //display ingredient pic
        document.getElementById("ingrPic").src = getSeasonalProductsPicArray(nnnn)[seasonProductSelector]
        
        } 
        
        
        //declare recipeID (value comes from xhr request)
        
        var recipeID;

        //declare toggleDetermineRequestOrigin (a value will be assigned by request 2 launch, to determine which response handler should trigger)

       var toggleDetermineRequestOrigin = "";
        
       //declare a variable to store response object 
       var recipesResponse = {};   
             
        ////All AJAX requests    
        
        //create request and handle response for req1 & req2 & req3
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {

              
           if(toggleDetermineRequestOrigin === ""){
            //handler for req1 is launching
            console.log('about to enter recipe pic and title'); document.getElementById("recipeTitle").innerHTML = "How about making some<br><u>"+ xhr.response.results[0].title+"</u> ?";
            let picLink1 = xhr.response.baseUri+xhr.response.results[0].image;
            document.getElementById("recipePic").src = picLink1

            recipeID = xhr.response.results[0].id
            //now store the whole response object to be able to access it later to change recipe
            recipesResponse = xhr.response; 
               
           } else if(toggleDetermineRequestOrigin === "recipeIDSearch") {
               //display ingredient list
               console.log('about to enter ingredients');
               populateIngredients();
               
           } else if(toggleDetermineRequestOrigin === "instructionsSearch") {
               //display instructions list
               console.log('about to enter instructions');
               populateInstructions();
               
           }
              

          }
        };

        
            //define request1 launch function to auto pick recipe
            const myRequest = () => {
             
              let inputValue = getSeasonalProductsArray(nnnn)[seasonProductSelector];
              let url = 'https://api.spoonacular.com/recipes/search?apiKey=5e82b61e04a144f4a7cc689d18eba234&query='+inputValue+'&number=10&limitLicense=true&instructionsRequired=true';
              xhr.open('GET', url);
              xhr.send();  
            };

        
            //define request2 launch function to get recipe ingredients 
            const myRequest2 = () => {
 
              toggleDetermineRequestOrigin = "recipeIDSearch"      
              let url = 'https://api.spoonacular.com/recipes/'+recipeID+'/information?apiKey=5e82b61e04a144f4a7cc689d18eba234';
              xhr.open('GET', url);
              xhr.send();    
            };
        
             //define request3 launch function to get recipe instructions
            const myRequest3 = () => {
 
              toggleDetermineRequestOrigin = "instructionsSearch"      
              let url = 'https://api.spoonacular.com/recipes/'+recipeID+'/analyzedInstructions?apiKey=5e82b61e04a144f4a7cc689d18eba234';
              xhr.open('GET', url);
              xhr.send();    
            };

        
        
            //launch request 1 and activate listening to click for requests 2 and 3, and also activate listen for "change product" button
           
        
            var checkElement = document.getElementById("seazonProductPage");
        
            if(!checkElement){
            console.log('you are on index.html, no other code to run');
        }
            if(checkElement){
            console.log('you are on seazn product, about to launch request 1...');
            myRequest(); document.getElementById("collapseIngr").addEventListener("click", myRequest2); 
            document.getElementById("collapseInstr").addEventListener("click", myRequest3); 
            
            document.getElementById("changeProductBtn2").addEventListener("click", reloadPage); 
             document.getElementById("changeProductBtn1").addEventListener("click", reloadPage); 
        }

           
           
           


           
    
           

        
        //////End of AJAX section
        
        
            //change only recipe, same ingredient

                
            const changeRecipe = () => {
             console.log('changing recipe now...');
             let resultSelector = Math.floor(Math.random() * 10); console.log(resultSelector) 
            document.getElementById("recipeTitle").innerHTML = "How about making some<br>"+ recipesResponse.results[resultSelector].title+"?";
            let picLink1 = recipesResponse.baseUri+recipesResponse.results[resultSelector].image;
            document.getElementById("recipePic").src = picLink1
            recipeID = recipesResponse.results[resultSelector].id
            //now refresh ingredientlist
            myRequest2();
            document.getElementById("instructionsDisplay").innerHTML = "Please wait..."
            setTimeout(myRequest3, 1000);
                
            };
       
               
            if(checkElement){             document.getElementById("changeRecipeBtn").addEventListener("click", changeRecipe); 
            }

       
   
             
          
        //Populate ingredients and instructions
        
        
        const populateIngredients = () => {
            
            let ingredientList = document.getElementById("ingredientsDisplay");
            ingredientList.innerHTML = "Please wait...";
            ingredientList.innerHTML = "";
           
            for(let i=0; i<xhr.response.extendedIngredients.length; i++){
               ingredientList.innerHTML = ingredientList.innerHTML + '<li class="customfont">'
                
                      +
                      xhr.response.extendedIngredients[i].original;
                      +
                '</li>'
               
           }
            
        }
            
        const populateInstructions = () => {
            
            let instructionList = document.getElementById("instructionsDisplay");
            instructionList.innerHTML = '<dl class="pl-3">'
       
           
            for(let i=0; i<xhr.response[0].steps.length; i++){
               instructionList.innerHTML = instructionList.innerHTML 
                
                      + '<dd class="font-14">' + '<b>'+((i*1)+1)+'. </b>' +
                      xhr.response[0].steps[i].step;
                      + '</dd>' 
                     
           }
            instructionList.innerHTML = instructionList.innerHTML + '</dl>'
                      
        }
        
        

        
        ////////////// END CUSTOM CODE
        
        
        //Generating Dynamic Styles to decrease CSS size and execute faster loading times. 
        var colorsArray = [
            //colors must be in HEX format.
            // use the color scheme as bellow  this will automatically generate CSS for
            // bg-colorName-dark bg-colorName-light color-colorName-dark color-colorName-light
            //["colorName","light_hex","dark_hex","darker_hex_for_gradient"], 
            ["none","","",""], 
            ["plum","#6772A4","#6772A4","#3D3949"], 
            ["violet","#673c58","#673c58","#492D3D"], 
            ["magenta3","#413a65","#413a65","#2b2741"], 
            ["red3","#c62f50","#6F1025","#6F1025"], 
            ["green3","#6eb148","#2d7335","#2d7335"], 
            ["pumpkin","#E96A57","#C15140","#C15140"], 
            ["dark3","#535468","#535468","#343341"], 
            ["red1","#D8334A","#BF263C","#9d0f23"], 
            ["red2","#ED5565","#DA4453","#a71222"], 
            ["orange","#FC6E51","#E9573F","#ce3319"], 
            ["yellow1","#FFCE54","#F6BB42","#e6a00f"], 
            ["yellow2","#E8CE4D","#E0C341","#dbb50c"],
            ["yellow3","#CCA64F","#996A22","#996A22"], 
            ["green1","#A0D468","#8CC152","#5ba30b"], 
            ["green2","#2ECC71","#2ABA66","#0da24b"], 
            ["mint","#48CFAD","#37BC9B","#0fa781"], 
            ["teal","#A0CECB","#7DB1B1","#158383"], 
            ["aqua","#4FC1E9","#3BAFDA","#0a8ab9"], 
            ["sky","#188FB6","#0F5F79","#0F5F79"], 
            ["blue1","#4FC1E9","#3BAFDA","#0b769d"],
            ["blue2","#5D9CEC","#4A89DC","#1a64c6"], 
            ["magenta1","#AC92EC","#967ADC","#704dc9"], 
            ["magenta2","#8067B7","#6A50A7","#4e3190"], 
            ["pink1","#EC87C0","#D770AD","#c73c8e"], 
            ["pink2","#fa6a8e","#fb3365","#d30e3f"], 
            ["brown1","#BAA286","#AA8E69","#896b43"], 
            ["brown2","#8E8271","#7B7163","#584934"],
            ["gray1","#F5F7FA","#E6E9ED","#c2c5c9"],
            ["gray2","#CCD1D9","#AAB2BD","#88919d"],
            ["dark1","#656D78","#434A54","#242b34"],
            ["dark2","#3C3B3D","#323133","#1c191f"]
        ];
        var socialColorArray = [
            ["facebook","#3b5998"], 
            ["linkedin","#0077B5"],
            ["twitter","#4099ff"],
            ["google","#d34836"],
            ["whatsapp","#34AF23"],
            ["pinterest","#C92228"],
            ["sms","#27ae60"],
            ["mail","#3498db"],
            ["dribbble","#EA4C89"],
            ["phone","#27ae60"],
            ["skype","#12A5F4"],
            ["instagram","#e1306c"]
        ];
        
                    
        //Back Button Scroll Stop
        if ('scrollRestoration' in history) {history.scrollRestoration = 'manual';}

        //Disable Page Jump on Empty Links.
        $('a').on('click', function(){var attrs = $(this).attr('href'); if(attrs === '#'){return false;}});

        //Adding Background for Gradient
        if(!$('.menu-hider').length){$('#page').append('<div class="menu-hider"><div>');}

        /*Menu Extender Function*/
        $.fn.showMenu = function() {$(this).addClass('menu-active'); $('#footer-bar').addClass('footer-menu-hidden');setTimeout(function(){$('.menu-hider').addClass('menu-active');},250);}; 
        $.fn.hideMenu = function() {$(this).removeClass('menu-active'); $('#footer-bar').removeClass('footer-menu-hidden');$('.menu-hider').removeClass('menu-active');}; 
        
        //Add your programatically triggered menus here
        
        
        //Menu Required Variables
        var menu = $('.menu'),
            body = $('body'),
            menuFixed = $('.nav-fixed'),
            menuFooter = $('#footer-bar'),
            menuHider = $('body').find('.menu-hider'),
            menuClose = $('.close-menu'),
            header = $('.header'),
            pageAll = $('#page'),
            pageContent = $('.page-content'),
            headerAndContent = $('.header, .page-content, #footer-bar'),
            menuDeployer = $('a[data-menu]');

        //Menu System
        menu.each(function(){
            var menuHeight = $(this).data('menu-height');
            var menuWidth = $(this).data('menu-width');
            var menuActive = $(this).data('menu-active');
            if($(this).hasClass('menu-box-right')){$(this).css("width",menuWidth);}    
            if($(this).hasClass('menu-box-left')){$(this).css("width",menuWidth);}      
            if($(this).hasClass('menu-box-bottom')){$(this).css("height",menuHeight);}  
            if($(this).hasClass('menu-box-top')){$(this).css("height",menuHeight);}           
            if($(this).hasClass('menu-box-modal')){$(this).css({"height":menuHeight, "width":menuWidth});}
        });    

        //Menu Deploy Click
        menuDeployer.on('click',function(){     
            menu.removeClass('menu-active');
            menuHider.addClass('menu-active');

            var menuData = $(this).data('menu');
            var menuID = $('#'+menuData);
            var menuEffect = $('#'+menuData).data('menu-effect');
            var menuWidth = menuID.data('menu-width');
            var menuHeight = menuID.data('menu-height');
            $('body').addClass('modal-open');
            if(menuID.hasClass('menu-header-clear')){menuHider.addClass('menu-active-clear');}  
            function menuActivate(){menuID = 'menu-active' ? menuID.addClass('menu-active') : menuID.removeClass('menu-active');}               
            if(menuID.hasClass('menu-box-bottom')){$('#footer-bar').addClass('footer-menu-hidden');}
            if(menuEffect === "menu-parallax"){
                if(menuID.hasClass('menu-box-bottom')){headerAndContent.css("transform", "translateY("+(menuHeight/5)*(-1)+"px)");}    
                if(menuID.hasClass('menu-box-top')){headerAndContent.css("transform", "translateY("+(menuHeight/5)+"px)");}       
                if(menuID.hasClass('menu-box-left')){headerAndContent.css("transform", "translateX("+(menuWidth/5)+"px)");}       
                if(menuID.hasClass('menu-box-right')){headerAndContent.css("transform", "translateX("+(menuWidth/5)*(-1)+"px)");}
            }    
            if(menuEffect === "menu-push"){
                if(menuID.hasClass('menu-box-bottom')){headerAndContent.css("transform", "translateY("+(menuHeight)*(-1)+"px)");}    
                if(menuID.hasClass('menu-box-top')){headerAndContent.css("transform", "translateY("+(menuHeight)+"px)");}       
                if(menuID.hasClass('menu-box-left')){headerAndContent.css("transform", "translateX("+(menuWidth)+"px)");}       
                if(menuID.hasClass('menu-box-right')){headerAndContent.css("transform", "translateX("+(menuWidth)*(-1)+"px)");}
            }       
            if(menuEffect === "menu-push-full"){
                if(menuID.hasClass('menu-box-left')){headerAndContent.css("transform", "translateX(100%)");}       
                if(menuID.hasClass('menu-box-right')){headerAndContent.css("transform", "translateX(-100%)");}
            }
            menuActivate();
        });

        var autoActivateMenu = $('[data-auto-activate]');
        if (autoActivateMenu.length){
            autoActivateMenu.addClass('menu-active');
            menuHider.addClass('menu-active');
        }

        //Allows clicking even if menu is loaded externally.
        $('body').removeClass('modal-open');
        $('.menu-hider, .close-menu, .menu-close').on('click', function(){
            menu.removeClass('menu-active');
            menuHider.removeClass('menu-active menu-active-clear');
            headerAndContent.css('transform','translate(0,0)');
            menuHider.css('transform','translate(0,0)');
            $('#footer-bar').removeClass('footer-menu-hidden');
            $('body').removeClass('modal-open');
            return false;
        });

        //Generating Cookies
        function createCookie(e, t, n) {if (n) {var o = new Date;o.setTime(o.getTime() + 48 * n * 60 * 3600 * 1e3);var r = "; expires=" + o.toGMTString()} else var r = "";document.cookie = e + "=" + t + r + "; path=/"}
        function readCookie(e) {for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {for (var r = n[o];" " == r.charAt(0);) r = r.substring(1, r.length);if (0 == r.indexOf(t)) return r.substring(t.length, r.length)}return null}
        function eraseCookie(e) {createCookie(e, "", -1)}

        //Disabling & Enabling Dark Transitions in Dark Mode to Speed up Performance.
        function allowTransitions(){$('body').find('#transitions-remove').remove();}
        function removeTransitions(){$('body').append('<style id="transitions-remove">.btn, .header, #footer-bar, .menu-box, .menu-active{transition:all 0ms ease!important;}</style>'); setTimeout(function(){allowTransitions();},10);}

        //Dark Mode
        var darkSwitch = $('[data-toggle-theme-switch], [data-toggle-theme], [data-toggle-theme-switch] input, [data-toggle-theme] input');
        $('[data-toggle-theme], [data-toggle-theme-switch]').on('click',function(){
            removeTransitions();
            $('body').toggleClass('theme-light theme-dark');
            setTimeout(function(){
            if($('body').hasClass('detect-theme')){$('body').removeClass('detect-theme');}
            if($('body').hasClass('theme-light')){
                eraseCookie('sticky_dark_mode'); 
                darkSwitch.prop('checked', false); 
                createCookie('sticky_light_mode', true, 1);
            }
            if($('body').hasClass('theme-dark')){
                eraseCookie('sticky_light_mode'); 
                darkSwitch.prop('checked', true); 
                createCookie('sticky_dark_mode', true, 1);
            }
            },150);
        })
        if (readCookie('sticky_dark_mode')) {darkSwitch.prop('checked', true); $('body').removeClass('theme-light').addClass('theme-dark');}
        if (readCookie('sticky_light_mode')) {darkSwitch.prop('checked', false); $('body').removeClass('theme-dark').addClass('theme-light');}


        //Auto Dark Mode
        function activateDarkMode(){$('body').removeClass('theme-light').addClass('theme-dark'); $('#dark-mode-detected').removeClass('disabled'); eraseCookie('sticky_light_mode'); createCookie('sticky_dark_mode', true, 1);}
        function activateLightMode(){$('body').removeClass('theme-dark').addClass('theme-light'); $('#dark-mode-detected').removeClass('disabled'); eraseCookie('sticky_dark_mode'); createCookie('sticky_light_mode', true, 1);}
        function activateNoPreference(){$('#manual-mode-detected').removeClass('disabled');}        

        function setColorScheme() {
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
            const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
            const isNoPreference = window.matchMedia("(prefers-color-scheme: no-preference)").matches
            window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
            window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())
            window.matchMedia("(prefers-color-scheme: no-preference)").addListener(e => e.matches && activateNoPreference())
            if(isDarkMode) activateDarkMode();
            if(isLightMode) activateLightMode();
        }
        if($('body').hasClass('detect-theme')){setColorScheme();}
        $('.detect-dark-mode').on('click',function(){ $('body').addClass('detect-theme'); setColorScheme(); return false;});
        $('.disable-auto-dark-mode').on('click',function(){ $('body').removeClass('detect-theme'); $(this).remove(); return false;});

        //Footer Menu Active Elements
        if($('.footer-bar-2, .footer-bar-4, .footer-bar-5').length){
            if(!$('.footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong').length){
                $('.footer-bar-2 .active-nav, .footer-bar-4 .active-nav, .footer-bar-5 .active-nav').append('<strong></strong>')
            }
        }
        
        //Back Button in Header
        var backButton = $('.back-button, [data-back-button]');
        backButton.on('click', function() {
            window.history.go(-1);
            //return false;
        });
        
		//Copyright Year 
        var copyrightYear = $('.copyright-year, #copyright-year');
        var dteNow = new Date(); var intYear = dteNow.getFullYear();
        copyrightYear.html(intYear);
        
        //Back to top Badge
        var backToTop = $('.back-to-top, [data-back-to-top], .back-to-top-badge, .back-to-top-icon'),
            backToTopBadge = $('.back-to-top-badge, .back-to-top-icon');

        backToTop.on( "click", function(e){
            e.preventDefault();
            $('html, body, .page-content').animate({
                scrollTop: 0
            }, 350);
            return false;
        });
        function show_back_to_top_badge(){backToTopBadge.addClass('back-to-top-visible');}
        function hide_back_to_top_badge(){backToTopBadge.removeClass('back-to-top-visible');}

        //Scroll Ads
        var scrollAd = $('.scroll-ad');
        function show_scroll_ad(){scrollAd.addClass('scroll-ad-visible');}
        function hide_scroll_ad(){scrollAd.removeClass('scroll-ad-visible');}

        $(window).on('scroll', function () {
            var total_scroll_height = document.body.scrollHeight
            var inside_header = ($(this).scrollTop() <= 150);
            var passed_header = ($(this).scrollTop() >= 0); //250
            var passed_header2 = ($(this).scrollTop() >= 150); //250
            var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() + 300 )));

            if (inside_header === true) {
                hide_back_to_top_badge();
                hide_scroll_ad();
                $('.header-auto-show').removeClass('header-active');

            }
            else if(passed_header === true){
                show_back_to_top_badge();
                show_scroll_ad();
                $('.header-auto-show').addClass('header-active');
            } 
            if (footer_reached == true){
                hide_back_to_top_badge();
                hide_scroll_ad();
            }
        });

        //Tabs//
        var tab = $('.tab-controls');
        function activate_tabs(){
            var tabTrigger = $('.tab-controls a');
            tab.each(function(){
                var tabItems = $(this).parent().find('.tab-controls').data('tab-items');
                var tabWidth = $(this).width();
                var tabActive = $(this).find('a[data-tab-active]');
                var tabID = $('#'+tabActive.data('tab'));
                var tabBg = $(this).data('tab-active');
                $(this).find('a[data-tab]').css("width", (100/tabItems)+'%');
                tabActive.addClass(tabBg);
                tabActive.addClass('color-white');
                tabID.slideDown(0);
            });
            tabTrigger.on('click',function(){
                var tabData = $(this).data('tab');
                var tabID = $('#'+tabData);
                var tabContent = $(this).parent().parent().find('.tab-content');
                var tabContent = $(this).parent().parent().parent().find('.tab-content');
                var tabOrder = $(this).data('tab-order');
                var tabBg = $(this).parent().parent().find('.tab-controls').data('tab-active');
                $(this).parent().find(tabTrigger).removeClass(tabBg).removeClass('color-white');
                $(this).addClass(tabBg).addClass('color-white');
                $(this).parent().find('a').removeClass('no-click');
                $(this).addClass('no-click');
                tabContent.slideUp(250);
                tabID.slideDown(250);
            });
        }
        if(tab.length){activate_tabs()}

        //Text Resizer
       $(".text-size-increase").click(function() {$(".text-size-changer *").css("font-size","+=1");}); 
       $(".text-size-decrease").click(function() {$(".text-size-changer *").css("font-size","-=1");});
       $(".text-size-default").click(function() {$(".text-size-changer *").css("font-size", "");});
        
        //Search Menu Functions
        function search_menu(){
            $('[data-search]').on('keyup', function() {
                var searchVal = $(this).val();
                if (searchVal != '') {
                    $('.search-header a').removeClass('disabled');
                    $('.search-trending').addClass('disabled');
                    $('.search-results').removeClass('disabled-search-list');
                    $('[data-filter-item]').addClass('disabled-search-item');
                    $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('disabled-search-item');
                } else {
                    $('.search-header a').removeClass('disabled');
                    $('.search-trending').removeClass('disabled');
                    $('.search-results').addClass('disabled-search-list');
                    $('[data-filter-item]').removeClass('disabled-search-item');
                }

                var search_results_error = $('.search-no-results');
                var search_results_active = $('.search-results').find('.search-result-list.disabled-search-item');
                if (search_results_active.length) {search_results_error.removeClass('disabled');}else{search_results_error.addClass('disabled');}
            });
            return false;
        }
        search_menu();
        //Menu Search Values//
        $('.search-trending a').on('click',function(){
            var e = jQuery.Event("keydown");
            e.which = 32
            $('.search-trending').addClass('disabled');
            var search_value = $(this).find('span').text().toLowerCase();
            $('.search-header a').removeClass('disabled');
            $('.search-header input').val(search_value);
            $('.search-results').removeClass('disabled-search-list');
            $('[data-filter-item]').addClass('disabled-search-item');
            $('[data-filter-item][data-filter-name*="' + search_value.toLowerCase() + '"]').removeClass('disabled-search-item');
            $('.menu-search-trending').addClass('disabled-search-item');
            return false;
        });

        $('.search-header a').on('click',function(){
            $('.search-trending').removeClass('disabled');
            $('.menu-search-trending').removeClass('disabled-search-item');
            $('.search-results').addClass('disabled-search-list');
            $('.search-header input').val('');
            $(this).addClass('disabled');
            return false;
        });

        //Owl Carousel Sliders
        setTimeout(function(){
            $('.user-slider').owlCarousel({loop:false, margin:20, nav:false, lazyLoad:true, items:1, autoplay: false, dots:false, autoplayTimeout:4000});		
            $('.single-slider').owlCarousel({loop:true, margin:20, nav:false, lazyLoad:true, items:1, autoplay: true, autoplayTimeout:2000});		
            $('.cover-slider').owlCarousel({loop:true, margin:0, nav:false, lazyLoad:true, items:1, autoplay: true, autoplayTimeout:6000});		
            $('.double-slider').owlCarousel({loop:true, margin:20, nav:false, lazyLoad:false, items:2, autoplay: true, autoplayTimeout:4000});		
            $('.task-slider').owlCarousel({loop:true, margin:20, nav:false, stagePadding:50, lazyLoad:true, items:2, autoplay: false, autoplayTimeout:4000});		
            $('.next-slide, .next-slide-arrow, .next-slide-text, .cover-next').on('click',function(){$(this).parent().find('.owl-carousel').trigger('next.owl.carousel');});		
            $('.prev-slide, .prev-slide-arrow, .prev-slide-text, .cover-prev').on('click',function(){$(this).parent().find('.owl-carousel').trigger('prev.owl.carousel');});		
            $('.next-slide-user').on('click',function(){$(this).closest('.owl-carousel').trigger('next.owl.carousel');});		
            $('.prev-slide-user').on('click',function(){$(this).closest('.owl-carousel').trigger('prev.owl.carousel');});		
        },10);
        setTimeout(function(){
            $('.owl-prev, .owl-next').addClass('bg-highlight');
        })

        //Detect Mobile OS//
        var isMobile = {
            Android: function() {return navigator.userAgent.match(/Android/i);},
            iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
            Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
            any: function() {return (isMobile.Android() || isMobile.iOS() || isMobile.Windows());}
        };
        if (!isMobile.any()) {
            $('body').addClass('is-not-ios');
            $('.show-ios, .show-android').addClass('disabled');
            $('.show-no-device').removeClass('disabled');
        }
        if (isMobile.Android()) {
            $('body').addClass('is-not-ios');
            $('head').append('<meta name="theme-color" content="#FFFFFF"> />');
            $('.show-android').removeClass('disabled');
            $('.show-ios, .show-no-device, .simulate-android, .simulate-iphones').addClass('disabled');
        }
        if (isMobile.iOS()) {
            $('body').addClass('is-ios');
            $('.show-ios').removeClass('disabled');
            $('.show-android, .show-no-device, .simulate-android, .simulate-iphones').addClass('disabled');
        }


        //Toast, Snackbars and Notifications
        $('[data-toast]').on('click',function(){
            $('.toast, .snackbar-toast, .notification').toast('hide'); 
            $('#'+$(this).data('toast')).toast('show'); 
            return false;
        });
        $('[data-dismiss]').on('click',function(){
            var thisData = $(this).data('dismiss');
            $('#'+thisData).toast('hide');
        });
        
        //Tooltips
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
        
        //Cancel Collapse Jump on Click
        if($('[data-toggle="collapse"]').length){
            $('[data-toggle="collapse"]').on('click',function(e){
                e.preventDefault();
            });
        }


        //Switches
        $('.ios-input, .android-input, .classic-input').on('click',function(){
            var id = $(this).attr('id');
            var data = $('[data-switch='+id+']')
            if(data.length){data.stop().animate({height: 'toggle'},250);}
        });
        $('[data-activate]').on('click',function(){
            var activateCheck = $(this).data('activate');
            $('#'+activateCheck).trigger('click');
        });

        $('[data-trigger-switch]').on('click',function(){
            var thisID = $(this).data('trigger-switch');
            if ($('#'+thisID).prop('checked')) {
                $('#'+thisID).prop('checked', false);
            } else {
                $('#'+thisID).prop('checked', true);
            }        
        })

        //Working Hours 
        var businessHours =  $('.business-hours');
            function activate_business_hours(){
            if(businessHours.length){
                var getTime = new Date(Date.now());
                var getDay = 'day-' + (new Date().toLocaleDateString('en', {weekday:'long'})).toLowerCase();
                var timeNow = getTime.getHours() + ":" + getTime.getMinutes();
                var currentWorkDay =  $('.'+getDay);
                var closedMessage = businessHours.data('closed-message').toString();
                var closedMessageUnder = businessHours.data('closed-message-under').toString();
                var openedMessage = businessHours.data('opened-message').toString();
                var openedMessageUnder = businessHours.data('opened-message-under').toString();

                var mondayOpen = $('[data-monday]').data('open');
                var mondayClose = $('[data-monday]').data('close');
                var mondayTime = "'Monday' : ['"+mondayOpen+"','"+mondayClose+"'],"


                $('.business-hours').openingTimes({
                    //SET OPENING HOURS BELOW
                    openingTimes: {
                        'Monday'    : ['08:00' ,'17:00' ],
                        'Tuesday'   : ['08:00' ,'17:30' ],
                        'Wednesday' : ['08:00' ,'17:00' ],
                        'Thursday'  : ['08:00' ,'17:00' ],
                        'Friday'    : ['09:00' ,'18:55' ],
                        'Saturday'  : ['09:00' ,'12:00' ]
                        //Sunday removed, that means it's closed.
                    },
                    openClass:"bg-green1-dark is-business-opened",
                    closedClass:"bg-red2-dark is-business-closed"
                });    
                if(businessHours.hasClass('is-business-opened')){
                    $('.show-business-opened').removeClass('disabled');
                    $('.show-business-closed').addClass('disabled');
                    businessHours.find('h1').html(openedMessage);
                    businessHours.find('p').html(openedMessageUnder);
                    businessHours.find('#business-hours-mail').remove();
                    currentWorkDay.addClass('bg-green1-dark');
                } else {
                    $('.show-business-opened').addClass('disabled');
                    $('.show-business-closed').removeClass('disabled');
                    businessHours.find('h1').html(closedMessage);
                    businessHours.find('p').html(closedMessageUnder);
                    businessHours.find('#business-hours-call').remove();
                    currentWorkDay.addClass('bg-red2-dark');
                }

                currentWorkDay.find('p').addClass('color-white');
            };
        }
        if(businessHours.length){activate_business_hours()}

        //Adding added-to-homescreen class to be targeted when used as PWA.
        function ath(){
            (function(a, b, c) {
                if (c in b && b[c]) {
                    var d, e = a.location,
                        f = /^(a|html)$/i;
                    a.addEventListener("click", function(a) {
                        d = a.target;
                        while (!f.test(d.nodeName)) d = d.parentNode;
                        "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
                    }, !1);
                    $('.add-to-home').addClass('disabled');
                    $('body').addClass('is-on-homescreen');
                }
            })(document, window.navigator, "standalone")
        }
        ath();
        
        //Add to Home Banners
        $('.simulate-android-badge').on('click',function(){$('.add-to-home').removeClass('add-to-home-ios').addClass('add-to-home-visible add-to-home-android');});
        $('.simulate-iphone-badge').on('click',function(){$('.add-to-home').removeClass('add-to-home-android').addClass('add-to-home-visible add-to-home-ios');});
        $('.add-to-home').on('click',function(){$('.add-to-home').removeClass('add-to-home-visible');})
        $('.simulate-android-banner').on('click',function(){$('#menu-install-pwa-android, .menu-hider').addClass('menu-active')})
        $('.simulate-ios-banner').on('click',function(){$('#menu-install-pwa-ios, .menu-hider').addClass('menu-active')})

        //Extending Card Features
        function card_extender(){       
            /*Set Page Content to Min 100vh*/
            if($('.is-on-homescreen').length){
                var windowHeight = screen.height;
                $('.page-content, #page').css('min-height', windowHeight);
            } 
            if(!$('.is-on-homescreen').length){
                 var windowHeight = window.innerHeight
                $('.page-content, #page').css('min-height', windowHeight);
            } 

            $('[data-card-height]').each(function(){
                var cardHeight = $(this).data('card-height');
                var headerHeight = $('.header').height();
                var footerHeight = $('#footer-bar').height();
                $(this).css('height', cardHeight);
                if(cardHeight == "cover"){
                    if(header.length && menuFooter.length){
                       $(this).css('height', windowHeight  -headerHeight - footerHeight) 
                       $('.map-full, .map-full iframe').css('height', windowHeight - headerHeight - footerHeight +14) 
                    } else {
                       $(this).css('height', windowHeight)
                       $('.map-full, .map-full iframe').css('height', windowHeight)
                    }
                }
            });
        }
        card_extender();

        $(window).resize(function(){
            card_extender();
        });
        
        //Show Map
        $('.show-map, .hide-map').on('click',function(){
            $('.map-full .caption').toggleClass('deactivate-map');
            $('.map-but-1, .map-but-2').toggleClass('deactivate-map');
            $('.map-full .hide-map').toggleClass('activate-map');
        });    


        //Card Hovers
        $('.card-scale').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('card-scale-image');});  
        $('.card-grayscale').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('card-grayscale-image');});         
        $('.card-rotate').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('card-rotate-image');});       
        $('.card-blur').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('card-blur-image');});      
        $('.card-hide').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('.card-center, .card-bottom, .card-top, .card-overlay').toggleClass('card-hide-image');});


        //Reading Time
        $('#reading-progress-text').each(function(i) {
            var readingWords = $(this).text().split(' ').length;
            var readingMinutes = Math.floor(readingWords / 250);
            var readingSeconds = readingWords % 60
            $('.reading-progress-words').append(readingWords);
            $('.reading-progress-time').append(readingMinutes + ':' + readingSeconds);
        });      

        //Timed Ads
        if($('[data-auto-show-ad]').length){
            var time = $('[data-auto-show-ad]').data('auto-show-ad');
            setTimeout(function(){
                $('[data-auto-show-ad]').trigger('click');
            },time*1000);
        }
        $('[data-timed-ad]').on('click', function(){            
            var counter = $(this).data('timed-ad');
            var adwin = $('#'+$(this).data('menu'));
            menuHider.addClass('no-click');
            adwin.find('.ad-time-close').addClass('no-click');
            adwin.find('.ad-time-close i').addClass('disabled');
            adwin.find('.ad-time-close span').removeClass('disabled');

            var interval = setInterval(function() {
                counter--;
                // Display 'counter' wherever you want to display it.
                if (counter <= 0) {
                    menuHider.removeClass('no-click');
                    adwin.find('.ad-time-close').removeClass('no-click');
                    adwin.find('.ad-time-close i').removeClass('disabled');
                    adwin.find('.ad-time-close span').addClass('disabled');
                    clearInterval(interval);
                    return;
                }else{
                    adwin.find('.ad-time-close span').html(counter);
                }
            }, 1000);
        });

        //Countdown
        function countdown(dateEnd) {
            var timer, years, days, hours, minutes, seconds;
            dateEnd = new Date(dateEnd);
            dateEnd = dateEnd.getTime();
            if (isNaN(dateEnd)) {return;}
            timer = setInterval(calculate, 1);
            function calculate() {
                var dateStart = new Date();
                var dateStart = new Date(dateStart.getUTCFullYear(), dateStart.getUTCMonth(), dateStart.getUTCDate(), dateStart.getUTCHours(), dateStart.getUTCMinutes(), dateStart.getUTCSeconds());
                var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
                if (timeRemaining >= 0) {
                    years = parseInt(timeRemaining / 31536000);
                    timeRemaining = (timeRemaining % 31536000);
                    days = parseInt(timeRemaining / 86400);
                    timeRemaining = (timeRemaining % 86400);
                    hours = parseInt(timeRemaining / 3600);
                    timeRemaining = (timeRemaining % 3600);
                    minutes = parseInt(timeRemaining / 60);
                    timeRemaining = (timeRemaining % 60);
                    seconds = parseInt(timeRemaining);
                    if ($('.countdown').length) {
                        $(".countdown #years")[0].innerHTML = parseInt(years, 10);
                        $(".countdown #days")[0].innerHTML = parseInt(days, 10);
                        $(".countdown #hours")[0].innerHTML = ("0" + hours).slice(-2);
                        $(".countdown #minutes")[0].innerHTML = ("0" + minutes).slice(-2);
                        $(".countdown #seconds")[0].innerHTML = ("0" + seconds).slice(-2);
                    }
                } else {return;}
            }

            function display(days, hours, minutes, seconds) {}
        }
        countdown('01/19/2030 03:14:07 AM');

        //Accordion Icons
        $('.accordion-btn').on('click',function(){
            $(this).addClass('no-click');
            $('.accordion-icon').removeClass('rotate-180');
            if($(this).attr("aria-expanded") == "true"){
                $(this).parent().find('.accordion-icon').removeClass('rotate-180');
            } else {
                $(this).parent().find('.accordion-icon').addClass('rotate-180');
            }
            setTimeout(function(){$('.accordion-btn').removeClass('no-click');},250);
        })

        //Caption Hovers
        $('.caption-scale').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('caption-scale-image');});  
        $('.caption-grayscale').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('caption-grayscale-image');});         
        $('.caption-rotate').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('caption-rotate-image');});       
        $('.caption-blur').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('img').toggleClass('caption-blur-image');});      
        $('.caption-hide').unbind().bind('mouseenter mouseleave touchstart touchend',function(){$(this).find('.caption-center, .caption-bottom, .caption-top, .caption-overlay').toggleClass('caption-hide-image');});

        //File Upload
        var uploadFile = $('.upload-file');
        function activate_upload_file(){
            function readURL(input) {
                if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                        $('.file-data img').attr('src', e.target.result);
                        $('.file-data img').attr('class','img-fluid rounded-xs mt-4');
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            $(".upload-file").change(function(e) {
                readURL(this);
                var fileName = e.target.files[0].name;
                $('.upload-file-data').removeClass('disabled');
                $('.upload-file-name').html(e.target.files[0].name)
                $('.upload-file-modified').html(e.target.files[0].lastModifiedDate);
                $('.upload-file-size').html(e.target.files[0].size/1000+'kb')
                $('.upload-file-type').html(e.target.files[0].type)
            });
        };
        if(uploadFile.length){activate_upload_file();}

        //Task List Check on Click
        var todo = $('.todo-list');
        function activate_todo_list(){
            $('.todo-list a').each(function(){
                if($(this).find('.todo-icon').hasClass('far fa-square')){$(this).removeClass('opacity-70');} else {$(this).addClass('opacity-70');}
            })
            $('.todo-list a').on('click',function(){
                $(this).find('.todo-icon').toggleClass('far fa-square fa fa-check-square color-green1-dark');
                if($(this).find('.todo-icon').hasClass('far fa-square')){$(this).removeClass('opacity-70');} else {$(this).addClass('opacity-70');}
            })
        }
        if(todo.length){activate_todo_list();}

        //Age Verification
        var checkAge = $('.check-age');
        function activate_age_checker(){
            console.log('active');
        $(".check-age").on('click',function(){    
            var dateBirghtDay = $("#date-birth-day").val();
            var dateBirthMonth = $("#date-birth-month").val();
            var dateBirthYear = $("#date-birth-year").val();
            var age = 18;
            var mydate = new Date();
            mydate.setFullYear(dateBirthYear, dateBirthMonth-1, dateBirghtDay);

            var currdate = new Date();
            var setDate = new Date();
            setDate.setFullYear(mydate.getFullYear() + age, dateBirthMonth-1, dateBirghtDay);

            if ((currdate - setDate) > 0){
                console.log("above 18");
                $('#menu-age').removeClass('menu-active')
                $('#menu-age-okay').addClass('menu-active');
            }else{
                $('#menu-age').removeClass('menu-active')
                $('#menu-age-fail').addClass('menu-active');
            }
            return true;
        });
        } 
        if(checkAge.length){activate_age_checker();}


        //Geolocation
        var geoLocation = $('.get-location');
        function activate_geolocation(){
            if ("geolocation" in navigator) {
                $('.location-support').html('Your browser and device <strong class="color-green2-dark">support</strong> Geolocation.');
            } else {
                $('.location-support').html('Your browser and device <strong class="color-red2-dark">support</strong> Geolocation.');
            }
            function geoLocate() {
                const locationCoordinates = document.querySelector('.location-coordinates');
                function success(position) {
                    const latitude  = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    locationCoordinates.innerHTML = '<strong>Longitude:</strong> ' + longitude + '<br><strong>Latitude:</strong> '+ latitude;

                    var mapL1 = 'http://maps.google.com/maps?q=';
                    var mapL2 = latitude+',';
                    var mapL3 = longitude;
                    var mapL4 = '&z=18&t=h&output=embed'
                    var mapL5 = '&z=18&t=h'
                    var mapLinkEmbed = mapL1 + mapL2 + mapL3 + mapL4;
                    var mapLinkAddress = mapL1 + mapL2 + mapL3 + mapL5;

                    $('.location-map').after('<iframe class="location-map" src="'+mapLinkEmbed+'"></iframe> <div class="clearfix"></div>');
                    $('.location-map').parent().after(' <a href='+mapLinkAddress+' class="btn btn-full btn-m bg-red2-dark rounded-xs text-uppercase font-900 mb-n1 mt-3">View on Google Maps</a>');
                }
                function error() {
                    locationCoordinates.textContent = 'Unable to retrieve your location';
                }
                if (!navigator.geolocation) {
                    locationCoordinates.textContent = 'Geolocation is not supported by your browser';
                } else {
                    locationCoordinates.textContent = 'Locating';
                    navigator.geolocation.getCurrentPosition(success, error);
                }
            }
            $('.get-location').on('click',function(){
                $(this).addClass('disabled');
                geoLocate();
            });
        };
        if(geoLocation.length){activate_geolocation();}

        var emailValidator = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var phoneValidator = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        var nameValidator = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
        var passwordValidator = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
        var urlValidator = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
        var textareaValidator = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
        var validIcon = "<i class='fa fa-check color-green1-dark'></i>";
        var invalidIcon = "<i class='fa fa-exclamation-triangle color-red2-light'></i>";

        $('.input-required input, .input-required select, .input-required textarea').on('focusin keyup',function(){
            var spanValue = $(this).parent().find('span').text();
            if($(this).val() != spanValue && $(this).val() != ""){
                $(this).parent().find('span').addClass('input-style-1-active').removeClass('input-style-1-inactive');
            }    
            if($(this).val() === ""){
                $(this).parent().find('span').removeClass('input-style-1-inactive input-style-1-active');
            }
        });      
        $('.input-required input, .input-required select, .input-required textarea').on('focusout',function(){
            var spanValue = $(this).parent().find('span').text();
            if($(this).val() === ""){
                $(this).parent().find('span').removeClass('input-style-1-inactive input-style-1-active');
            }
            $(this).parent().find('span').addClass('input-style-1-inactive')
        });
        $('.input-required select').on('focusout',function(){
            var getValue = $(this)[0].value;
            if(getValue === "default"){
                $(this).parent().find('em').html(invalidIcon)
                $(this).parent().find('span').removeClass('input-style-1-inactive input-style-1-active');
            } 
            if(getValue != "default"){
                $(this).parent().find('em').html(validIcon)
            }                
        });
        $('.input-required input[type="email"]').on('focusout',function(){if (emailValidator.test($(this).val())){$(this).parent().find('em').html(validIcon);}else{if($(this).val() === ""){$(this).parent().find('em').html("(required)");}else{$(this).parent().find('em').html(invalidIcon);}}});       
        $('.input-required input[type="tel"]').on('focusout',function(){if (phoneValidator.test($(this).val())){$(this).parent().find('em').html(validIcon);}else{if($(this).val() === ""){$(this).parent().find('em').html("(required)");}else{$(this).parent().find('em').html(invalidIcon);}}});
        $('.input-required input[type="password"]').on('focusout',function(){if (passwordValidator.test($(this).val())){$(this).parent().find('em').html(validIcon);}else{if($(this).val() === ""){$(this).parent().find('em').html("(required)");}else{$(this).parent().find('em').html(invalidIcon);}}});          
        $('.input-required input[type="url"]').on('focusout',function(){if (urlValidator.test($(this).val())){$(this).parent().find('em').html(validIcon);}else{if($(this).val() === ""){$(this).parent().find('em').html("(required)");}else{$(this).parent().find('em').html(invalidIcon);}}});  
        $('.input-required input[type="name"]').on('focusout',function(){if (nameValidator.test($(this).val())){$(this).parent().find('em').html(validIcon);}else{if($(this).val() === ""){$(this).parent().find('em').html("(required)");}else{$(this).parent().find('em').html(invalidIcon);}}});      
        $('.input-required textarea').on('focusout',function(){if (textareaValidator.test($(this).val())){$(this).parent().find('em').html(validIcon);}else{if($(this).val() === ""){$(this).parent().find('em').html("(required)");}else{$(this).parent().find('em').html(invalidIcon);}}});  

        //Set Today Date to Date Inputs
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0,10);
        });
        $('input[type="date"]').val(new Date().toDateInputValue());

        //Set Today Date to Date Inputs
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0,10);
        });
        $('input[type="date"]').val(new Date().toDateInputValue());

        //Adding Offline Alerts
        var offlineAlerts = $('.offline-message');
        if(!offlineAlerts.length){
            $('body').append('<p class="offline-message bg-red2-dark color-white center-text uppercase ultrabold">No internet connection detected</p> ');
            $('body').append('<p class="online-message bg-green1-dark color-white center-text uppercase ultrabold">You are back online</p>');
        }

        //Offline Function Show
        function isOffline(){
            $('.offline-message').addClass('offline-message-active');
            $('.online-message').removeClass('online-message-active');
            setTimeout(function(){$('.offline-message').removeClass('offline-message-active');},2000);
        }

        //Online Function Show
        function isOnline(){
            $('.online-message').addClass('online-message-active');
            $('.offline-message').removeClass('offline-message-active');
            setTimeout(function(){$('.online-message').removeClass('online-message-active');},2000);
        }    

        $('.simulate-offline').on('click',function(){isOffline();})
        $('.simulate-online').on('click',function(){isOnline();})

        //Check if Online / Offline
        function updateOnlineStatus(event) {
        var condition = navigator.onLine ? "online" : "offline";
            isOnline();
            console.log( 'Connection: Online');
        }
        function updateOfflineStatus(event) {
            isOffline();
            console.log( 'Connection: Offline');
        }
        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOfflineStatus);

        //QR Generator
        var generateQR = $('.generate-qr-result, .generate-qr-auto');
        function activate_qr_generator(){
            //QR Code Generator 
            var qr_auto_link = window.location.href;
            var qr_api_address = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';

            $('.generate-qr-auto').attr('src', qr_api_address+qr_auto_link)
            $('.generate-qr-button').on('click',function(){
                if($(this).parent().find('.fa').hasClass('fa-exclamation-triangle')){
                    console.log('Invalid URL');
                } else {
                    var get_qr_url = $('.generate-qr-input').val();
                    if(!get_qr_url == ''){
                        $('.generate-qr-result').empty();
                        setTimeout(function(){
                            $('.generate-qr-result').append('<img class="mx-auto polaroid-effect shadow-l mt-4 delete-qr" width="200" src="'+qr_api_address+get_qr_url+'" alt="img"><p class="font-11 text-center mb-0">'+get_qr_url+'</p>')
                        },30);
                    }
                }
            });
        }
        if(generateQR.length){activate_qr_generator();}

        //Vibrate Buttons
        var vibrateButton = $('[data-vibrate]');
        function activate_vibration(){
            $('[data-vibrate]').on('click',function(){var vibrateTime = $(this).data('vibrate'); window.navigator.vibrate(vibrateTime);});
            $('.start-vibrating').on('click',function(){var vibrateTimeInput = $('.vibrate-demo').val(); window.navigator.vibrate(vibrateTimeInput);})
            $('.stop-vibrating').on('click',function(){window.navigator.vibrate(0); $('.vibrate-demo').val(''); });
        }
        if(vibrateButton.length){
            activate_vibration();
        }

        //Sharing
        var share_link = window.location.href;
        var share_title = document.title;
        $('.shareToFacebook').prop("href", "https://www.facebook.com/sharer/sharer.php?u="+share_link)
        $('.shareToLinkedIn').prop("href", "https://www.linkedin.com/shareArticle?mini=true&url="+share_link+"&title="+share_title+"&summary=&source=")
        $('.shareToTwitter').prop("href", "https://twitter.com/home?status="+share_link)
        $('.shareToPinterest').prop("href", "https://pinterest.com/pin/create/button/?url=" + share_link)
        $('.shareToWhatsApp').prop("href", "whatsapp://send?text=" + share_link)
        $('.shareToMail').prop("href", "mailto:?body=" + share_link)


        //Preload Image
        var preloadImages = $('.preload-img');
        $(function() {preloadImages.lazyload({threshold : 500});});

        //LightBox
        $('[data-lightbox]').addClass('default-link');
        lightbox.option({alwaysShowNavOnTouchDevices:true, 'resizeDuration': 200, 'wrapAround': false})
        $('#lightbox').hammer().on("swipe", function (event) {
            if (event.gesture.direction === 4) {
                $('#lightbox a.lb-prev').trigger('click');
            } else if (event.gesture.direction === 2) {
                $('#lightbox a.lb-next').trigger('click');
            }
        });

        //Filterable
        if($('.gallery-filter').length > 0){$('.gallery-filter').filterizr(); $('.gallery-filter-active').addClass('color-highlight');}		
        $('.gallery-filter-controls li').on('click',function(){
            $('.gallery-filter-controls li').removeClass('gallery-filter-active color-highlight');	
            $(this).addClass('gallery-filter-active color-highlight');	
        });

        //Gallery Views // Added in 2.0
        var galleryViews = $('.gallery-views');
        var galleryViewControls = $('.gallery-view-controls a');
        var galleryView1 = $('.gallery-view-1-activate');
        var galleryView2 = $('.gallery-view-2-activate');
        var galleryView3 = $('.gallery-view-3-activate');

        galleryView1.on('click',function(){
            galleryViewControls.removeClass('color-highlight');
            $(this).addClass('color-highlight');
            galleryViews.removeClass().addClass('gallery-views gallery-view-1');
        });
        galleryView2.on('click',function(){
            galleryViewControls.removeClass('color-highlight');
            $(this).addClass('color-highlight');
            galleryViews.removeClass().addClass('gallery-views gallery-view-2');
        });  
        galleryView3.on('click',function(){
            galleryViewControls.removeClass('color-highlight');
            $(this).addClass('color-highlight');
            galleryViews.removeClass().addClass('gallery-views gallery-view-3');
        });


        //Search
        var search = $('[data-search]');
        function activate_search(){
        search.on('keyup', function() {
            var searchVal = $(this).val();
            var filterItems = $(this).parent().parent().find('[data-filter-item]');
            if ( searchVal != '' ) {
                $('.search-results').removeClass('disabled-search-list');
                $('[data-filter-item]').addClass('disabled-search');
                $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('disabled-search');
            } else {
                $('.search-results').addClass('disabled-search-list');
                $('[data-filter-item]').removeClass('disabled-search');
            }
        });
        }
        if(search.length){activate_search();}

        //Contact Form
        var formSubmitted = "false";
        jQuery(document).ready(function(e) {
            function t(t, n) {
                formSubmitted = "true";
                var r = e("#" + t).serialize();
                e.post(e("#" + t).attr("action"), r, function(n) {
                    e("#" + t).addClass('disabled');
                    $('.contact-form').addClass('disabled');
                    e(".formSuccessMessageWrap").fadeIn(500)
                })
            }
            function n(n, r) {
                e(".formValidationError").hide();
                e(".fieldHasError").removeClass("fieldHasError");
                e("#" + n + " .requiredField").each(function(i) {
                    if (e(this).val() == "" || e(this).val() == e(this).attr("data-dummy")) {
                        e(this).val(e(this).attr("data-dummy"));
                        e(this).focus();
                        e(this).addClass("fieldHasError");
                        e("#" + e(this).attr("id") + "Error").fadeIn(300);
                        return false
                    }
                    if (e(this).hasClass("requiredEmailField")) {
                        var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                        var o = "#" + e(this).attr("id");
                        if (!s.test(e(o).val())) {
                            e(o).focus();
                            e(o).addClass("fieldHasError");
                            e(o + "Error2").fadeIn(300);
                            return false
                        }
                    }
                    if (formSubmitted == "false" && i == e("#" + n + " .requiredField").length - 1) {
                        t(n, r)
                    }
                })
            }
            e(".formSuccessMessageWrap").hide(0);
            e(".formValidationError").fadeOut(0);
            e('input[type="text"], input[type="password"], textarea').focus(function() {
                if (e(this).val() == e(this).attr("data-dummy")) {
                    e(this).val("")
                }
            });
            e("input, textarea").blur(function() {
                if (e(this).val() == "") {
                    e(this).val(e(this).attr("data-dummy"))
                }
            });
            e(".contactSubmitButton").on('click',function() {
                n(e(this).attr("data-formId"));
                return false
            })
        });

        
        //Charts
		if($('.chart').length > 0){
			var loadJS = function(url, implementationCode, location){
				var scriptTag = document.createElement('script');
				scriptTag.src = url;
				scriptTag.onload = implementationCode;
				scriptTag.onreadystatechange = implementationCode;
				location.appendChild(scriptTag);
			};
			var call_charts_to_page = function(){
                
                var walletChart = $('#wallet-chart');
                var pieChart = $('#pie-chart');
                var doughnutChart = $('#doughnut-chart');
                var polarChart = $('#polar-chart');
                var verticalChart = $('#vertical-chart');
                var horizontalChart = $('#horizontal-chart');
                var lineChart = $('#line-chart');

                if(walletChart.length){
                    var walletDemoChart = new Chart(walletChart, {
                        type: 'pie',
                        data: {
                          labels: ["Expenses", "Income"],
                          datasets: [{
                            backgroundColor: ["#ED5565", "#A0D468"],
                            borderColor:"rgba(255,255,255,0.5)",
                            data: [7000,3000]
                          }]
                        },
                        options: {
                            responsive: true, maintainAspectRatio:false,
                            legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
                            tooltips:{enabled:true}, animation:{duration:1500}
                        }
                    });		
                }
                
                if(pieChart.length){
                    var pieDemoChart = new Chart(pieChart, {
                        type: 'pie',
                        data: {
                          labels: ["Facebook", "Twitter", "WhatsApp"],
                          datasets: [{
                            backgroundColor: ["#4A89DC", "#4FC1E9", "#A0D468"],
                            borderColor:"rgba(255,255,255,0.5)",
                            data: [7000,3000,2000]
                          }]
                        },
                        options: {
                            responsive: true, maintainAspectRatio:false,
                            legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
                            tooltips:{enabled:true}, animation:{duration:1500}
                        }
                    });		
                }

                if(doughnutChart.length){
                    var doughnutDemoChart = new Chart(doughnutChart, {
                        type: 'doughnut',
                        data: {
                          labels: ["Apple", "Samsung", "Google"],
                          datasets: [{
                            backgroundColor: ["#CCD1D9", "#5D9CEC","#FC6E51"],
                            borderColor:"rgba(255,255,255,0.5)",
                            data: [5500,4000,3000]
                          }]
                        },
                        options: {
                            responsive: true, maintainAspectRatio:false,
                            legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
                            tooltips:{enabled:true}, animation:{duration:1500}, layout:{ padding: {bottom: 30}}
                        }
                    });		
                }

                if(polarChart.length){
                    var polarDemoChart = new Chart(polarChart, {
                        type: 'polarArea',
                        data: {
                          labels: ["Windows", "Mac", "Linux"],
                          datasets: [{
                            backgroundColor: ["#CCD1D9", "#5D9CEC","#FC6E51"],
                            borderColor:"rgba(255,255,255,0.5)",
                            data: [7000,10000,5000]
                          }]
                        },
                        options: {
                            responsive: true, maintainAspectRatio:false,
                            legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
                            tooltips:{enabled:true}, animation:{duration:1500}, layout:{ padding: {bottom: 30}}
                        }
                    });	
                }

                if (verticalChart.length){
                    var verticalDemoChart = new Chart(verticalChart, {
                        type: 'bar',
                        data: {
                          labels: ["2010", "2015", "2020", "2025"],
                          datasets: [
                            {
                              label: "iOS",
                              backgroundColor: "#A0D468",
                              data: [900,1000,1200,1400]
                            }, {
                              label: "Android",
                              backgroundColor: "#4A89DC",
                              data: [890,950,1100,1300]
                            }
                          ]
                        },
                        options: {
                            responsive: true, maintainAspectRatio:false,
                            legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
                            title: {display: false}
                        }
                    });	
                }

                if(horizontalChart.length){
                    var horizontalDemoChart = new Chart(horizontalChart, {
                        type: 'horizontalBar',
                        data: {
                          labels: ["2010", "2013", "2016", "2020"],
                          datasets: [
                            {
                              label: "Mobile",
                              backgroundColor: "#BF263C",
                              data: [330,400,580,590]
                            }, {
                              label: "Responsive",
                              backgroundColor: "#EC87C0",
                              data: [390,450,550,570]
                            }
                          ]
                        },
                        options: {
                            legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
                            title: {display: false}
                        }
                    });	
                }

                if(lineChart.length){
                    var lineDemoChart = new Chart(lineChart, {
                      type: 'line',
                      data: {
                        labels: [2000,2005,2010,2015,2010],
                        datasets: [{ 
                            data: [500,400,300,200,300],
                            label: "Desktop Web",
                            borderColor: "#D8334A"
                          }, { 
                            data: [0,100,300,400,500],
                            label: "Mobile Web",
                            borderColor: "#4A89DC"
                          }
                        ]
                      },
                      options: {
                        responsive: true, maintainAspectRatio:false,
                        legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
                        title: {display: false}
                      }
                    });
                }
			}
			loadJS('scripts/charts.js', call_charts_to_page, document.body);
		}        

        
        //Local Error Message
        if (window.location.protocol === "file:"){$('a').on('mouseover',function(){console.log("You are seeing these errors because your file is on your local computer. For real life simulations please use a Live Server or a Local Server such as AMPPS or WAMPP or simulate a  Live Preview using a Code Editor like http://brackets.io (it's 100% free) - PWA functions and AJAX Page Transitions will only work in these scenarios.");});} 


        //Style Generator
        var generatedStyles = $('.generated-styles');
        var generatedHighlight = $('.generated-highlight');

        //HEX to RGBA Converter
        function HEXtoRGBA(hex){
            var c;
            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){ 
                c= hex.substring(1).split('');
                if(c.length== 3){c= [c[0], c[0], c[1], c[1], c[2], c[2]];}
                c= '0x'+c.join('');
                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.3)';
            }
        }
        
        function highlight_colors(){
            var bodyColor = readCookie('sticky-color-scheme')
            if(bodyColor == undefined){var bodyColor = $('body').data('highlight');}
            
            var bodyBackground = readCookie('sticky-bg-scheme')
            if(bodyBackground == undefined){var bodyBackground = $('body').data('background');}
                                               
            var data = colorsArray.map(colorsArray => colorsArray[0]);
            if (data.indexOf(bodyColor) > -1) {
                var highlightLocated = data.indexOf(bodyColor)
                var backgroundLocated = data.indexOf(bodyBackground)
                var highlightColorCode = colorsArray[highlightLocated][2]
                var backgroundColorCode = colorsArray[backgroundLocated][3] + ', ' + colorsArray[backgroundLocated][1]
                var highlightColor = '.color-highlight{color:'+highlightColorCode+'!important}'
                var highlightBg = '.bg-highlight, .page-item.active a{background-color:'+highlightColorCode+'!important}'
                var highlightNav = '.footer-bar-1 .active-nav *, .footer-bar-3 .active-nav i{color:'+highlightColorCode+'!important} .footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong{background-color:'+highlightColorCode+'!important; color:#FFF;}'
                var highlightBorder = '.border-highlight{border-color:'+highlightColorCode+'!important}'
                var highlightHeaderTabs = '.header-tab-active{border-color:'+highlightColorCode+'!important}'
                var bodyBG = '#page{background: linear-gradient(0deg, '+backgroundColorCode+')!important;} .bg-page{background: linear-gradient(0deg, '+backgroundColorCode+')!important }'
                if(!generatedHighlight.length){
                    $('body').append('<style class="generated-highlight"></style>')
                    $('body').append('<style class="generated-background"></style>')
                    $('.generated-highlight').append(highlightColor, highlightBg, highlightNav, highlightBorder, highlightHeaderTabs);
                    $('.generated-background').append(bodyBG);
                }
            }
        }      
        highlight_colors();

        //Change Highlight
        $('[data-change-highlight]').on('click',function(changeColor){
            var highlightNew = $(this).data('change-highlight');
            $('body').attr('data-highlight',highlightNew);
            $('.generated-highlight').remove();
            createCookie('sticky-color-scheme',highlightNew,1)
            var data = colorsArray.map(colorsArray => colorsArray[0]);
                if (data.indexOf(highlightNew) > -1) {
                    var highlightLocated = data.indexOf(highlightNew)
                if($(this).data('color-light') !== undefined){
                    var highlightColorCode = colorsArray[highlightLocated][1]
                } else {
                    var highlightColorCode = colorsArray[highlightLocated][2]
                }
                var highlightColor = '.color-highlight{color:'+highlightColorCode+'!important}'
                var highlightBg = '.bg-highlight{background-color:'+highlightColorCode+'!important}'
                var highlightNav = '.active-nav *{color:'+highlightColorCode+'!important} .active-nav2 strong{background-color:'+highlightColorCode+'!important}  .active-nav3 strong{background-color:'+highlightColorCode+'!important} .active-nav4 strong{border-color:'+highlightColorCode+'!important}'
                var highlightBorder = '.border-highlight{border-color:'+highlightColorCode+'!important}'
                $('body').append('<style class="generated-highlight"></style>')
                $('.generated-highlight').append(highlightColor, highlightBg, highlightNav, highlightBorder);
            }
        });     

        //Change Background
        $('[data-change-background]').on('click',function(changeColor){
            var backgroundNew = $(this).data('change-background');
            createCookie('sticky-bg-scheme',backgroundNew,1)
            $('.generated-background').remove();
            var data = colorsArray.map(colorsArray => colorsArray[0]);
            var backgroundLocated = data.indexOf(backgroundNew)
            var backgroundColorCode = colorsArray[backgroundLocated][3] + ', ' + colorsArray[backgroundLocated][1]
            var bodyBG = '#page{background: linear-gradient(0deg, '+backgroundColorCode+')!important;} .bg-page{background: linear-gradient(0deg, '+backgroundColorCode+')!important}'
            $('body').append('<style class="generated-background"></style>')
            $('.generated-background').append(bodyBG);
        });

        if (!generatedStyles.length){
            $('body').append('<style class="generated-styles"></style>');    
            $('.generated-styles').append('/*Generated using JS for lower CSS file Size, Easier Editing & Faster Loading*/');
            colorsArray.forEach(function (colorValue) {$('.generated-styles').append('.bg-'+colorValue[0]+'-light{ background-color: '+colorValue[1]+'!important; color:#FFFFFF!important;} .bg-'+colorValue[0]+'-light i, .bg-'+colorValue[0]+'-dark i{color:#FFFFFF;} .bg-'+colorValue[0]+'-dark{  background-color: '+colorValue[2]+'!important; color:#FFFFFF!important;} .border-'+colorValue[0]+'-light{ border-color:'+colorValue[1]+'!important;} .border-'+colorValue[0]+'-dark{  border-color:'+colorValue[2]+'!important;} .color-'+colorValue[0]+'-light{ color: '+colorValue[1]+'!important;} .color-'+colorValue[0]+'-dark{  color: '+colorValue[2]+'!important;}');});	
            colorsArray.forEach(function (colorFadeValue) {$('.generated-styles').append('.bg-fade-'+colorFadeValue[0]+'-light{ background-color: '+ HEXtoRGBA(colorFadeValue[1]) + '!important; color:#FFFFFF;} .bg-fade-'+colorFadeValue[0]+'-light i, .bg-'+colorFadeValue[0]+'-dark i{color:#FFFFFF;} .bg-fade-'+colorFadeValue[0]+'-dark{  background-color: '+HEXtoRGBA(colorFadeValue[2])+'!important; color:#FFFFFF;} .border-fade-'+colorFadeValue[0]+'-light{ border-color:'+HEXtoRGBA(colorFadeValue[1])+'!important;} .border-fade-'+colorFadeValue[0]+'-dark{  border-color:'+HEXtoRGBA(colorFadeValue[2])+'!important;} .color-fade-'+colorFadeValue[0]+'-light{ color: '+HEXtoRGBA(colorFadeValue[1])+'!important;} .color-fade-'+colorFadeValue[0]+'-dark{  color: '+HEXtoRGBA(colorFadeValue[2])+'!important;}');});	
            colorsArray.forEach(function (gradientValue) {$('.generated-styles').append('.bg-gradient-'+gradientValue[0]+'{background-image: linear-gradient(to bottom, '+gradientValue[1]+' 0, '+gradientValue[2]+' 100%)}')});	
            socialColorArray.forEach(function (socialColorValue) {$('.generated-styles').append('.bg-'+socialColorValue[0]+'{background-color:'+socialColorValue[1]+'!important; color:#FFFFFF;} .color-'+socialColorValue[0]+'{color:'+socialColorValue[1]+'!important;}')});
            colorsArray.forEach(function (gradientBodyValue) {$('.generated-styles').append('.body-'+gradientBodyValue[0]+'{background-image: linear-gradient(to bottom, '+gradientBodyValue[1]+' 0, '+gradientBodyValue[3]+' 100%)}')});	
        }
        
    }
    //Activating all the plugins
	setTimeout(init_template, 0);
               
    //Activate AJAX Transitions    
    if(isAJAX === true){
        $(function(){
            'use strict';
            var options = {
                prefetch: true,
                prefetchOn: 'mouseover',
                cacheLength: 100,
                scroll: true, 
                blacklist: '.default-link',
                forms: 'contactForm',
                onStart: {
                    duration:150, // Duration of our animation
                    render: function ($container) {
                    $container.addClass('is-exiting');// Add your CSS animation reversing class
                        $('.menu, .menu-hider').removeClass('menu-active');
                        $('#preloader').removeClass('preloader-hide');
                        return false;
                    }
                },
                onReady: {
                    duration: 10,
                    render: function ($container, $newContent) {
                        $container.removeClass('is-exiting');// Remove your CSS animation reversing class
                        $container.html($newContent);// Inject the new content
                        setTimeout(init_template, 0)//Timeout required to properly initiate all JS Functions. 
                        $('#preloader').removeClass('preloader-hide');
                    }
                },
                onAfter: function($container, $newContent) {
                    setTimeout(function(){
                        $('.menu').css('display','block');
                        $('#preloader').addClass('preloader-hide');
                    },150);
                }
            };
          var smoothState = $('#page').smoothState(options).data('smoothState');
           smoothState.clear();
        });
    }

    //Activate Development mode. Keeps caches clear.
    if(isDevelopment === true){
        if(!$('.reloader').length){$('body').append('<a href="#" class="reloader" style="position:fixed; background-color:#000; color:#FFF; z-index:9999; bottom:80px; left:50%; margin-left:-105px; border-radius:10px; width:210px; line-height:40px; text-align:center;">Developer Mode - Tap to Reload</a>');}
        $('.reloader').on('click',function(){window.location.reload(true);})
        caches.delete('workbox-runtime').then(function(){});
        localStorage.clear();
        sessionStorage.clear()
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            caches.delete(cacheName);
          });
        });
    }
    
    //Activate the PWA    
    if(isPWA === true){
        var loadJS = function(url, implementationCode, location){
            var scriptTag = document.createElement('script');
            scriptTag.src = url;
            scriptTag.onload = implementationCode;
            scriptTag.onreadystatechange = implementationCode;
            location.appendChild(scriptTag);
        };
        function loadPWA(){}
        loadJS('scripts/pwa.js', loadPWA, document.body);
    }    
}); 
