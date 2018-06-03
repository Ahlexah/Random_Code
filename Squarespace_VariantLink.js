/* Because some themes on squarespace don't come with image-dropdown box linking, I created a
 * two way system that will work.
 * If you click on an image, it will select the correct dropbox equivalent. This works both ways.
 *
 * Installation:
 * Put the following scripts into the Settings -> Advanced -> Code Injections -> Footer, and save.
 * Replace "YOUR-VARIANT-HERE" with your variant (as created. Colour/Color is different than colour/color).
 */ 

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script>
$(function(){
  $("select[data-variant-option-name='YOUR-VARIANT-HERE']").on('change', function(e){
    $this = $(this);
    var options = $this.find('option');
    var index = options.index(options.filter(":selected")) + 1;
    if($('#productThumbnails .slide:nth-child('+index+')').length > 0)
      $('#productThumbnails .slide:nth-child('+index+')').click();
  });
});

$("#productThumbnails img").on('click', function (e) {
  $this = $(this);
  var index = $("#productThumbnails img").index($(this));
   if($('#productThumbnails .slide:nth-child('+index+')').length >= 0)
    $("select[data-variant-option-name='YOUR-VARIANT-HERE']")[0].selectedIndex = index;
  });
  </script>