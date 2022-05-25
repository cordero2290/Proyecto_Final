var carrouselImage;
carrouselImage = document.getElementById("ImagenCarrusel");
var i;
var imagenes = new Array();
imagenes[1] = "../proyecto_web/img/poster2.jpg";
imagenes[2] = "../proyecto_web/img/poster3.jpg";
imagenes[3] = "../proyecto_web/img/poster4.jpg";
imagenes[4] = "../proyecto_web/img/poster5.jpg";
 
i = 0;

function Right()
{   
    i = i + 1;
    if (i >= imagenes.length) 
    {
        i = 1;
    }
    
   document.getElementById("ImagenCarrusel").src = imagenes[i];
}

function Left()
{
    
    i = i - 1;
    if (i < 1) 
    {
        i = imagenes.length - 1 ;
    }
    
    document.getElementById("ImagenCarrusel").src = imagenes[i];
}