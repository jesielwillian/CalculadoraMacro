(function() {

  function cGordura(gordura) {
    return gordura * 9;
  }

  function cProteinas(proteinas) {
    return proteinas * 4;
  }

  function cCarboidratos(carboidratos) {
    return carboidratos * 4;
  }

  function cAlcool(alcool) {
    return alcool * 7;
  }

  var carboidratos = $('#carboidratos');
  var gorduras = $('#gorduras');
  var proteinas = $('#proteinas');
  carboidratos.on('keyup change ', function() {
    var c = carboidratos.val();
    $('.sideC .c').html(cCarboidratos(c));
    calorias();
  });

  gorduras.on('keyup change  ', function() {
    var g = gorduras.val();
    $('.sideG .c').html(cGordura(g));
    calorias();
  });

  proteinas.on('keyup change ', function() {
    var p = proteinas.val();
    $('.sideP .c').html(cProteinas(p));
    calorias();
  });

  var calorias = function() {
    var ca = parseInt($('.sideC .c').html());
    var go = parseInt($('.sideG .c').html());
    var pr = parseInt($('.sideP .c').html());
    var totalC = ca + go + pr;
    $('.calorias span').html(totalC);
    console.log(totalC);
    var perC = Math.ceil(ca / totalC * 100);
    var perG = Math.ceil(go / totalC * 100);
    var perP = Math.ceil(pr / totalC * 100);
    $('.sideC .percent').html(perC);
    $('.sideG .percent').html(perG);
    $('.sideP .percent').html(perP);

  };
  
  $('.tab1').on('click',function(){
    $('.tabP').show();
    $('.tabC').hide();
    $('.tabG').hide();
    
  });
  
  $('.tab2').on('click',function(){
    $('.tabP').hide();
    $('.tabC').show();
    $('.tabG').hide();
    
  });
  
  $('.tab3').on('click',function(){
    $('.tabP').hide();
    $('.tabC').hide();
    $('.tabG').show();
    
  });

})();