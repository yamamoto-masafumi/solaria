$(function(){
  $('#voice_left_text_more').on('click', function(){
    $('#voice_left_text_more_area').slideToggle();
    $('#voice_left_text_more_close').removeClass('hidden').addClass('active');
    $(this).removeClass('activce').addClass('hidden');
  });

  $('#voice_left_text_more_close').on('click', function(){
    $('#voice_left_text_more_area').slideToggle();
    $('#voice_left_text_more').removeClass('hidden').addClass('active');
    $(this).removeClass('activce').addClass('hidden');
  });
});