$('.skill-per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css('width', per + '%');
  $({ animatedValue: 0 }).animate({ animatedValue: per }, {
    duration: 1500,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue));
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});

// Menu Animation.
const sidebar = document.querySelector('.resume-sidebar');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    sidebar.classList.add('sidebar-show');
    menuOpen = true;
  }
  else {
    sidebar.classList.remove('sidebar-show');
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const mainContent = document.querySelector('.resume-inner');
mainContent.addEventListener('click', () => {
  if (menuOpen) 
    sidebar.classList.remove('sidebar-show');
    menuBtn.classList.remove('open');
    menuOpen = false;
})