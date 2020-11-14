$(document).ready(function () {
    //   Scroll to top
    $(".scroll_to_top_action").click(function () {
        $("html").animate({ scrollTop: 0 }, "slow");
    });

    $('[data-toggle="tooltip"]').tooltip();

});

$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('sticky_header');
    else sticky.removeClass('sticky_header');
});

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

function aboutTabbing(e, id) {
    $('.about_left span').removeClass('active');
    $(e).addClass('active');
    $('.about_tab_content').hide();
    $('#about-' + id).show();
}

function myAccountTabs(e, id) {
    $('.my_account_left a').removeClass('active');
    $(e).addClass('active');
    $('.my_account_tab_content').hide();
    $('#myaccount-' + id).show();
}
