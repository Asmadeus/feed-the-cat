$(window).ready(function () {
  $('.product-column').each(function () {
    if(!$(this).hasClass('product-column_disabled')) {
      $(this).addClass('mouse-out');
    }
  })
  $('.product-item, .product-text__link').click(function () {
    var parent = $(this).closest('.product-column');
    if(!parent.hasClass('product-column_disabled')) {
      parent.toggleClass('product-column_selected');
      parent.removeClass('mouse-out')
      parent.find('.product-item__text').removeClass('product-item__text_hover').text('Сказочное заморское явство')
      parent.one('mouseleave', function () {
        parent.addClass('mouse-out');
      })
    }
  });
  $('.product-column').hover(function () {
    if($(this).hasClass('product-column_selected')) {
      $(this).find('.product-item__text').text('Котэ не одобряет?').addClass('product-item__text_hover');
    }
  },
  function () {
    if($(this).hasClass('product-column_selected')) {
      $(this).find('.product-item__text').text('Сказочное заморское явство').removeClass('product-item__text_hover');
    }
  });
});
