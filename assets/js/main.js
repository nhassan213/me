/**
* Template Name: iPortfolio - v1.2.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Hero terminal intro
  (function initHeroTerminal() {
    var body = document.getElementById('hero-terminal-body');
    if (!body) return;

    var script = [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Md Nahid Hassan — Sr. Software Engineer @ HiLinkz' },
      { type: 'cmd', text: 'cat stack.txt' },
      { type: 'out', text: 'Laravel · React · APIs · Redis · AWS · Flutter · AI' },
      { type: 'cmd', text: 'ls ~/systems' },
      { type: 'out', text: 'planning  ui  backend  cache  deploy  security' }
    ];

    var i = 0;
    var cursor = document.createElement('span');
    cursor.className = 'term-cursor';

    function appendPromptLine() {
      var line = document.createElement('div');
      line.className = 'term-line';
      line.innerHTML = '<span class="term-prompt">$</span> <span class="term-cmd"></span>';
      body.appendChild(line);
      line.appendChild(cursor);
      return line.querySelector('.term-cmd');
    }

    function typeText(el, text, done) {
      var n = 0;
      var timer = setInterval(function() {
        el.textContent = text.slice(0, ++n);
        if (n >= text.length) {
          clearInterval(timer);
          done();
        }
      }, 28);
    }

    function runNext() {
      if (i >= script.length) {
        // Keep a blinking cursor on a fresh prompt
        var idle = document.createElement('div');
        idle.className = 'term-line';
        idle.innerHTML = '<span class="term-prompt">$</span> ';
        idle.appendChild(cursor);
        body.appendChild(idle);
        return;
      }

      var step = script[i++];
      if (step.type === 'cmd') {
        var cmdEl = appendPromptLine();
        typeText(cmdEl, step.text, function() {
          cursor.remove();
          setTimeout(runNext, 320);
        });
      } else {
        var out = document.createElement('div');
        out.className = 'term-out';
        out.textContent = step.text;
        body.appendChild(out);
        setTimeout(runNext, 420);
      }
    }

    runNext();
  })();

  // Sidebar glass theme: dark on hero, light on white sections
  (function initHeaderTheme() {
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var hero = document.getElementById('hero');
    if (!header || !hero) return;

    function syncTheme() {
      var heroBottom = hero.getBoundingClientRect().bottom;
      var onLight = heroBottom < 120;
      header.classList.toggle('header-light', onLight);
      if (footer) footer.classList.toggle('footer-light', onLight);
    }

    syncTheme();
    $(window).on('scroll resize', syncTheme);
  })();

  // Hero skills motion background
  (function initHeroSkillsBg() {
    var hero = document.getElementById('hero');
    var canvas = document.getElementById('hero-skills-canvas');
    var orbit = document.getElementById('hero-skill-orbit');
    if (!hero || !canvas || !orbit) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ctx = canvas.getContext('2d');
    var skills = [
      { label: 'Laravel', icon: 'bx bx-code-curly', accent: true },
      { label: 'React.js', icon: 'bx bxl-react', accent: true },
      { label: 'Flutter', icon: 'bx bx-mobile', accent: true },
      { label: 'AWS', icon: 'bx bxl-aws', accent: true },
      { label: 'Docker', icon: 'bx bxl-docker' },
      { label: 'Redis', icon: 'bx bx-bolt', accent: true },
      { label: 'MySQL', icon: 'bx bx-data' },
      { label: 'PostgreSQL', icon: 'bx bx-cylinder' },
      { label: 'PHP', icon: 'bx bxl-php' },
      { label: 'JavaScript', icon: 'bx bxl-javascript' },
      { label: 'Firebase', icon: 'bx bx-cloud' },
      { label: 'REST APIs', icon: 'bx bx-transfer' },
      { label: '2FA', icon: 'bx bx-shield' },
      { label: 'CDN', icon: 'bx bx-globe' },
      { label: 'AI Chatbots', icon: 'bx bx-bot', accent: true },
      { label: 'GitHub', icon: 'bx bxl-github' }
    ];
    var nodes = [];
    var chips = [];
    var raf = null;
    var w = 0;
    var h = 0;

    function resize() {
      var rect = hero.getBoundingClientRect();
      w = Math.max(320, Math.floor(rect.width));
      h = Math.max(480, Math.floor(rect.height));
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createNodes() {
      var count = Math.min(55, Math.floor((w * h) / 18000));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1.2 + Math.random() * 1.8
        });
      }
    }

    function createChips() {
      orbit.innerHTML = '';
      chips = [];
      if (reduceMotion) return;

      var isMobile = w < 768;
      var list = isMobile ? skills.slice(0, 8) : skills;

      list.forEach(function(skill, index) {
        var el = document.createElement('span');
        el.className = 'hero-skill-chip' + (skill.accent ? ' accent' : '');
        el.innerHTML = '<i class="' + skill.icon + '" aria-hidden="true"></i><span>' + skill.label + '</span>';
        orbit.appendChild(el);

        // Keep chips mostly on the right / edges so left content stays clear
        var sideBias = isMobile ? 0.35 : 0.48;
        var x = (sideBias + Math.random() * (1 - sideBias - 0.05)) * w;
        var y = ((index * 0.11) % 0.82 + 0.08) * h + (Math.random() * 24 - 12);

        chips.push({
          el: el,
          x: x,
          y: Math.max(40, Math.min(h - 40, y)),
          ox: x,
          oy: Math.max(40, Math.min(h - 40, y)),
          ampX: 18 + Math.random() * 28,
          ampY: 14 + Math.random() * 26,
          speed: 0.00035 + Math.random() * 0.00055,
          phase: Math.random() * Math.PI * 2
        });
        el.style.transform = 'translate(' + x + 'px,' + Math.max(40, Math.min(h - 40, y)) + 'px)';
      });
    }

    function draw(time) {
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 190, 235, 0.55)';
        ctx.fill();

        for (var j = i + 1; j < nodes.length; j++) {
          var m = nodes[j];
          var dx = n.x - m.x;
          var dy = n.y - m.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = 'rgba(20, 157, 221,' + (0.22 * (1 - dist / 130)) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion) {
        chips.forEach(function(chip) {
          var nx = chip.ox + Math.sin(time * chip.speed + chip.phase) * chip.ampX;
          var ny = chip.oy + Math.cos(time * chip.speed * 1.15 + chip.phase) * chip.ampY;
          chip.el.style.transform = 'translate(' + nx + 'px,' + ny + 'px)';
        });
      }

      raf = requestAnimationFrame(draw);
    }

    function boot() {
      resize();
      createNodes();
      createChips();
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    }

    boot();
    window.addEventListener('resize', function() {
      clearTimeout(window.__heroSkillsResize);
      window.__heroSkillsResize = setTimeout(boot, 150);
    });
  })();

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Impact counters (IntersectionObserver — more reliable than counterUp + AOS)
  document.querySelectorAll('[data-toggle="counter-up"]').forEach(function(el) {
    var target = parseInt((el.textContent || '').replace(/[^\d]/g, ''), 10) || 0;
    el.textContent = '0';
    var started = false;

    if (!('IntersectionObserver' in window)) {
      el.textContent = String(target);
      return;
    }

    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.unobserve(el);
        var start = performance.now();
        var duration = 1000;
        function tick(now) {
          var p = Math.min(1, (now - start) / duration);
          el.textContent = String(Math.floor(target * p));
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = String(target);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.25 });

    io.observe(el.closest('.count-box') || el);
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

  // Skills tree scroll reveal
  (function initSkillTree() {
    var tree = document.getElementById('skill-tree');
    if (!tree) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var nodes = tree.querySelectorAll('.skill-tree-reveal');

    if (reduceMotion) {
      tree.classList.add('is-active');
      nodes.forEach(function(node) { node.classList.add('is-visible'); });
      return;
    }

    var treeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          tree.classList.add('is-active');
        }
      });
    }, { threshold: 0.15 });

    treeObserver.observe(tree);

    var nodeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = (parseInt(el.getAttribute('data-reveal'), 10) || 0) * 90;
        setTimeout(function() {
          el.classList.add('is-visible');
        }, delay);
        nodeObserver.unobserve(el);
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -8% 0px' });

    nodes.forEach(function(node) {
      nodeObserver.observe(node);
    });
  })();

})(jQuery);