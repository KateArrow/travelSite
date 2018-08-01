/*Libs include*/
//= ../libs/jquery/dist/jquery.js

/*Modules include*/
//= ./common/localStorage.js

$(document).ready(function () {
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000)
        }
      }
    });

    let $menu = $('.header__menu-icon');

    function menuShow() {
        $('.header__menu-items>div:nth-child(2)').slideToggle( "slow");
    }

    $menu.click(menuShow);    

    if ( innerWidth > 1200 ) {
      let callUs = $('.header__btns-wrap .rect-btn');
      let header = $('.header__menu');
      let menuItem = $('.menu__link');
      let headerRect = $('.header__rect');
      let multiHeader = $('.multi-header');

      let headerTl = new TimelineMax();
      let multiTl = new TimelineMax();

      headerTl
        .to(header, .3, {
          autoAlpha: 1,
          y: 0
        })
        .to(callUs, .2, {
          autoAlpha: 1,
          y: 0,
          ease: Power0.easeNone
        })
        .staggerTo(menuItem, 2, {
          autoAlpha: 1
        }, 0.1);

      multiTl
        .to(headerRect, 1, {
          autoAlpha: 1
        })
        .to(multiHeader, .5, {
          yoyo: true,
          x: 0,
          autoAlpha: 1          
        })
        .to('.header__rect .order-btn', .3, {
          y: 0,
          autoAlpha: 1
        })
    }

    let controller = new ScrollMagic.Controller();
    
    let photoTl = new TimelineMax();
      photoTl
        .to('.about__big-photo', .7, {
          scale: 1,
          autoAlpha: 1
        })
        .to('.about__small-photo', .5, {
          scale: 1,
          autoAlpha: 1
        })
        .to('.about__describe', .7, {
          x: 0,
          autoAlpha: 1
        }, '-=.5')

    let scene = new ScrollMagic.Scene({
      triggerElement: '.about__big-photo',
      reverse: false,
      offset: -100,
    })
      .addIndicators()
      .addTo(controller);

    scene.setTween(photoTl)

    let whannaTl = new TimelineMax();
    whannaTl
      .to('.wanna__describe', .8, { autoAlpha: 1, x: 0 })

    let whannaScene = new ScrollMagic.Scene({
      triggerElement: '.wanna__describe',
      reverse: false,
      offset: -100
    });
    whannaScene.addIndicators();  
    whannaScene.setTween(whannaTl);  
    whannaScene.addTo(controller);

    let journalTl = new TimelineMax();
    journalTl
      .to('.journal__header', .5, { autoAlpha: 1, y: 0 })
      .staggerTo('.journal__item-wrap > div', .5, { autoAlpha: 1, scale: 1 }, 0.1)
      .to('.journal__item-wrap', .4, { boxShadow: '0px 0px 10px 0px rgba(50, 50, 50, 0.75)' })

    let journalScene = new ScrollMagic.Scene({
      triggerElement: '.journal__header',
      reverse: false,
      offset: -100
    });
    journalScene.addIndicators();  
    journalScene.setTween(journalTl);  
    journalScene.addTo(controller);
    
    // .work__hard-items>div:first-child .hard-item__number-wrap::before
    let rule = CSSRulePlugin.getRule(".work__hard-items > div:first-child .hard-item__number-wrap::before");
    
    let afterFirst = CSSRulePlugin.getRule(".row-flex.work__hard-items > .col-3:nth-child(1) > div:first-child > .hard-item__number-wrap::after");
    let afterSecond = CSSRulePlugin.getRule('.row-flex.work__hard-items > .col-3:nth-child(2) > div:first-child > .hard-item__number-wrap::after')
    let afterThird = CSSRulePlugin.getRule('.row-flex.work__hard-items > .col-3:nth-child(3) > div:first-child > .hard-item__number-wrap::after')
    let afterFourth = CSSRulePlugin.getRule('.row-flex.work__hard-items > .col-3:nth-child(4) > div:first-child > .hard-item__number-wrap::after')

    let workSceneTl = new TimelineMax();
    
    workSceneTl
      .to('.work .caption__text', .5, { y: 0, autoAlpha: 1 })

      .to('.row-flex.work__hard-items > .col-3:nth-child(1) > .hard-item > .hard-item__number-wrap', .3, { autoAlpha: 1 })
      .to(afterFirst, .3, { cssRule: { height: 77, bottom: -70 } })
      .to('.row-flex.work__hard-items > .col-3:nth-child(1) > .hard-item > .hard-item__circle', .3, { scale: 1, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(1) > .hard-item > .hard-item__header', .3, { y: 0, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(1) > .hard-item > .hard-item__desc', .3, { y: 0, autoAlpha: 1 }, '-=.5' )
      .to(rule, .3, { cssRule: { right: -248, width: 264 } })

      .to('.row-flex.work__hard-items > .col-3:nth-child(2) > .hard-item > .hard-item__number-wrap', .3, { autoAlpha: 1 })
      .to(afterSecond, .3, { cssRule: { height: 77, bottom: -70 } })
      .to('.row-flex.work__hard-items > .col-3:nth-child(2) > .hard-item > .hard-item__circle', .3, { scale: 1, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(2) > .hard-item > .hard-item__header', .3, { y: 0, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(2) > .hard-item > .hard-item__desc', .3, { y: 0, autoAlpha: 1 }, '-=.5' )
      .to(rule, .3, { cssRule: { right: -561, width: 576 } })
      
      .to('.row-flex.work__hard-items > .col-3:nth-child(3) > .hard-item > .hard-item__number-wrap', .3, { autoAlpha: 1 })
      .to(afterThird, .3, { cssRule: { height: 77, bottom: -70 } })
      .to('.row-flex.work__hard-items > .col-3:nth-child(3) > .hard-item > .hard-item__circle', .3, { scale: 1, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(3) > .hard-item > .hard-item__header', .3, { y: 0, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(3) > .hard-item > .hard-item__desc', .3, { y: 0, autoAlpha: 1 }, '-=.5' )
      .to(rule, .3, { cssRule: { right: -840, width: 867 } })

      .to('.row-flex.work__hard-items > .col-3:nth-child(4) > .hard-item > .hard-item__number-wrap', .3, { autoAlpha: 1 })
      .to(afterFourth, .3, { cssRule: { height: 77, bottom: -70 } })
      .to('.row-flex.work__hard-items > .col-3:nth-child(4) > .hard-item > .hard-item__circle', .3, { scale: 1, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(4) > .hard-item > .hard-item__header', .3, { y: 0, autoAlpha: 1 } )
      .to('.row-flex.work__hard-items > .col-3:nth-child(4) > .hard-item > .hard-item__desc', .3, { y: 0, autoAlpha: 1 }, '-=.5' )


      let workScene = new ScrollMagic.Scene({
      triggerElement: '.work .caption__text',
      reverse: false,
      offset: -100
    });
    workScene.addIndicators();  
    workScene.setTween(workSceneTl);  
    workScene.addTo(controller);

    let travelTl = new TimelineMax();
    let items = $('.row-flex.travel__price-row > div');
    TweenMax.set(items, {transformPerspective: 1900})
    
    TweenMax.set(items[0], { zIndex: 5 })
    TweenMax.set(items[1], { x: -239, zIndex: 4 })
    TweenMax.set(items[2], { x: -478, zIndex: 3 })
    TweenMax.set(items[3], { x: -716, zIndex: 2 })
    TweenMax.set(items[4], { x: -955, zIndex: 1 })

    travelTl
      .to('.travel .caption__text', .5, { y: 0, autoAlpha: 1 })
      .to(items, .5, { rotationY: -35 })
      .to(items, .5, { x: 0 })
      .to(items, .5, { rotationY: 0, yoyo: true })
});