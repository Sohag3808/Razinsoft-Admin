function setThemeMode(name) {
  const appContent = document.getElementById("appContent");
  appContent.classList.remove("app-theme-white");
  appContent.classList.remove("app-theme-dark");
  appContent.classList.remove("app-theme-gradien");
  appContent.classList.add(name);
  localStorage.setItem("themeMode", name);
}
function toggleFooter() {
  var fixedFooter = localStorage.getItem("fixedFooter");
  if (fixedFooter) {
    localStorage.removeItem("fixedFooter");
  } else {
    localStorage.setItem("fixedFooter", "fixed-footer");
  }
}
function getThemeMode() {
  const appContent = document.getElementById("appContent");
  appContent.classList.remove("app-theme-white");
  appContent.classList.remove("app-theme-dark");
  appContent.classList.remove("app-theme-gradien");
  var selectedTheme = localStorage.getItem("themeMode");
  if (!selectedTheme) {
    appContent.classList.add("app-theme-white");
  } else {
    appContent.classList.add(selectedTheme);
  }
  if (selectedTheme == "app-theme-white" || !selectedTheme) {
    document.getElementById("defoltChangeMode").classList.add("active");
  }
  if (selectedTheme == "app-theme-dark") {
    document.getElementById("themeDark").classList.add("active");
  }
  if (selectedTheme == "app-theme-gradien") {
    document.getElementById("themeGradien").classList.add("active");
  }
  var fixedFooter = localStorage.getItem("fixedFooter");
  if (fixedFooter) {
    appContent.classList.add(fixedFooter);
    document.getElementById("footerCheck").checked = true;
  }
  const colorScheme = localStorage.getItem("colorScheme");
  if (colorScheme) {
    document
      .querySelector(".app-header")
      .classList.add(colorScheme, "header-text-light");
    document
      .querySelector(".app-sidebar")
      .classList.add(colorScheme, "sidebar-text-light");
    document.getElementById(colorScheme).classList.add("active");
  }
  if (!colorScheme || colorScheme == "") {
    document.getElementById("colorDefault").classList.add("active");
  }
}
getThemeMode();

$(".change-mode").click(function () {
  $(".change-mode").removeClass("active");
  $(this).addClass("active");
});

$("#resetModeBtn").click(function () {
  $("#appContent").removeClass("app-theme-white");
  $("#appContent").removeClass("app-theme-dark");
  $("#appContent").removeClass("app-theme-gradien");
  $("#appContent").addClass("app-theme-white");
});
$(".change-mode").click(function () {
  $(".change-mode").removeClass("active");
  $(this).addClass("active");
});

document.getElementById("resetModeBtn").addEventListener("click", function () {
  localStorage.removeItem("themeMode");
  document.getElementById("defoltChangeMode").classList.remove("active");
  document.getElementById("themeDark").classList.remove("active");
  document.getElementById("themeGradien").classList.remove("active");

  getThemeMode();
});

function storeColorScheme(colorScheme) {
  localStorage.setItem("colorScheme", colorScheme);
}
$(".theme-color-holder").click(function () {
  $(".theme-color-holder").removeClass("active");
  $(this).addClass("active");
});

$("#resetColor").click(function () {
  localStorage.removeItem("colorScheme");
  $(".theme-color-holder").removeClass("active");
  $("#colorDefault").addClass("activeColor");
});



$( "#deleteTable" ).click(function() {
  $( "#deleteTableItem" ).remove();
});


function MixinExample() {
  const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
  })

  Toast.fire({
      icon: 'success',
      title: 'Saved Successfully!'
  })
}