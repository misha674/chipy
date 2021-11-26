"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // определение языка указанного в ссылке
  var localLang = localStorage.getItem("lang");
  var language = localLang
    ? localLang
    : window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage;
  language = language.substr(0, 2).toLowerCase();
  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  var swhithLang = document.querySelectorAll(
    ".langCheck__item:not(.selected) input"
  );
  swhithLang.forEach(function (item) {
    item.addEventListener("change", function () {
      var val = item.name;
      window.location.href = window.location.pathname + "?lang=" + val;
      location.reload();
      language = val;
      localStorage.setItem("lang", language);
    });
  });
  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }


  var language = getCookie('lang_region');

  console.log("REGION:" + language);
  var prizes;

  if (language == "fr") {
    prizes = [
      {
        text: "3500 С$",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+160 С$",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Essayez à nouveau",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+100 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "3500 С$ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+720 С$",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Essayez à nouveau",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+150 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+140 С$",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+720 С$",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Essayez à nouveau",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
    ];
  } else if (language == "fi") {
    prizes = [
      {
        text: "+1500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+110€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Yritä uudelleen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1500€ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Yritä uudelleen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+100€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Yritä uudelleen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else if (language == "de") {
    prizes = [
      {
        text: "+1500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+110€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Erneut versuchen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1500€ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Erneut versuchen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+100€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Erneut versuchen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else if (language == "nz") {
    prizes = [
      {
        text: "+2400 NZ$",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+180 NZ$",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+2400 NZ$ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+800 NZ$",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "Try again",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+160 NZ$",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+800 NZ$",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else if (language == "ar" || language == "es") {
    prizes = [
      {
        text: "+170 000 ARS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
        smallText: "small-text",
      },
      {
        text: "+13 000 ARS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Inténtalo de nuevo",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+170 000 ARS +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+57 000 ARS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
        smallText: "small-text",
      },
      {
        text: "Inténtalo de nuevo",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+150FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+12 000 ARS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+57 000 ARS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
        smallText: "small-text",
      },
      {
        text: "Inténtalo de nuevo",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
    ];
  } else if (language == "ro") {
    prizes = [
      {
        text: "+7400 RON",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+550 RON",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Încearcă din nou",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+7400 RON +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+2500 RON",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Încearcă din nou",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+500 RON",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+2500 RON",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Încearcă din nou",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else if (language == "kz") {
    prizes = [
      {
        text: "+750 000₸",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+55 000₸",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Қайтадан көріңіз",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+750 000₸ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+250 000₸",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Қайтадан көріңіз",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+150FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+50 000₸",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+250 000₸",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Қайтадан көріңіз",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
    ];
  } else if (language == "ph") {
    prizes = [
      {
        text: "+88 000₱",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+7 000₱",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+88 000₱ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+30 000₱",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+6 000₱",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+30 000₱",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else if (language == "my") {
    prizes = [
      {
        text: "+7200 MYR",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+530 MYR",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+7200 MYR +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+2400 MYR",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+480 MYR",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+2400 MYR",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else if (language == "pt") {
    prizes = [
      {
        text: "+1500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+110€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Tente novamente",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "x-small-text",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1500€ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Tente novamente",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "x-small-text",
      },
      {
        text: "+150 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+100€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Tente novamente",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "x-small-text",
      },
    ];
  } else if (language == "no") {
    prizes = [
      {
        text: "+15 000 NKr",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1100 NKr",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Prøv igjen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: `+15 000 NKr  +150FS`,
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+5 000 NKr",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Prøv igjen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+990 NKr",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+5 000 NKr",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Prøv igjen",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else if (language == "gr") {
    prizes = [
      {
        text: "+1500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+110€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Προσπάθησε ξανά",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1500€ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Προσπάθησε ξανά",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
      {
        text: "+150 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+100€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Προσπάθησε ξανά",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
        smallText: "small-text",
      },
    ];
  } else if (language == "tr") {
    prizes = [
      {
        text: "+17 000₺",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1250₺",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Tekrar deneyin",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+17 000₺ + 50FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+5500₺",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Tekrar deneyin",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1000₺",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+5500₺",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Tekrar deneyin",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } else {
    prizes = [
      {
        text: "+1500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+110€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+50FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+100FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+1500€ +150FS",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+150 FS",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "+100€",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
      {
        text: "+500€",
        color: "rgb(224, 0, 59)",
        textColor: "yellowText",
      },
      {
        text: "Try again",
        color: "rgba(0, 0, 0, 0)",
        textColor: "redText",
      },
    ];
  } //  WHEEL  WHEEL  WHEEL

  var popUpWin = document.getElementById("winPopUp");

  // надписи и цвета на секторах
  // создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку

  var wheel = document.querySelector(".deal-wheel");
  var spinner = wheel.querySelector(".spinner");
  var trigger = document.querySelectorAll(".btn-spin");
  var ticker = wheel.querySelector(".ticker");

  // на сколько секторов нарезаем круг
  var prizeSlice = 360 / prizes.length;

  // на какое расстояние смещаем сектора друг относительно друга
  var prizeOffset = Math.floor(180 / prizes.length);

  // прописываем CSS-классы, которые будем добавлять и убирать из стилей
  var spinClass = "is-spinning";

  // получаем все значения параметров стилей у секторов
  var spinnerStyles = window.getComputedStyle(spinner);

  // переменная для анимации
  var tickerAnim; // угол вращения
  // ( !!! ПЕРЕОПРЕДЕЛИТЬ НА "0" ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )

  var rotation = 1243;

  // текущий сектор
  var currentSlice = 0;

  // переменная для текстовых подписей
  var prizeNodes;

  // расставляем текст по секторам
  var createPrizeNodes = function createPrizeNodes() {
    // обрабатываем каждую подпись
    prizes.forEach(function (_ref, i) {
      var text = _ref.text,
        textColor = _ref.textColor,
        reaction = _ref.reaction,
        smallText = _ref.smallText;

      // каждой из них назначаем свой угол поворота
      var rotation = prizeSlice * i * -1 - prizeOffset;

      // добавляем код с размещением текста на страницу в конец блока spinner
      spinner.insertAdjacentHTML(
        "beforeend", // текст при этом уже оформлен нужными стилями
        '<li class="prize" style="--rotate: '
          .concat(rotation, 'deg">\n         <div class="text ')
          .concat(textColor, " ")
          .concat(smallText ? smallText : "", '">\n           ')
          .concat(text, "\n         </div>         \n       </li>")
      );
    });
  };

  // рисуем разноцветные секторы
  var createConicGradient = function createConicGradient() {
    // устанавливаем нужное значение стиля у элемента spinner
    spinner.setAttribute(
      "style",
      "background: conic-gradient(\n     from -90deg,\n     ".concat(
        prizes // получаем цвет текущего сектора
          .map(function (_ref2, i) {
            var color = _ref2.color;
            return ""
              .concat(color, " 0 ")
              .concat((100 / prizes.length) * (prizes.length - i), "%");
          })
          .reverse(),
        "\n   );"
      )
    );
  };

  // создаём функцию, которая нарисует колесо в сборе
  var setupWheel = function setupWheel() {
    // сначала секторы
    createConicGradient();

    // потом текст
    createPrizeNodes();

    // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
    prizeNodes = wheel.querySelectorAll(".prize");
  };

  // ( !!! РАСКОММЕНТИРОВАТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
  // определяем количество оборотов, которое сделает наше колесо
  // const spinertia = (min, max) => {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // функция запуска вращения с плавной остановкой
  var runTickerAnimation = function runTickerAnimation() {
    // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
    var values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
    var a = values[0];
    var b = values[1];
    var rad = Math.atan2(b, a);
    if (rad < 0) rad += 2 * Math.PI;
    var angle = Math.round(rad * (180 / Math.PI));
    var slice = Math.floor(angle / prizeSlice);

    // анимация язычка, когда его задевает колесо при вращении
    // если появился новый сектор
    if (currentSlice !== slice) {
      // убираем анимацию язычка
      ticker.style.animation = "none";

      // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
      setTimeout(function () {
        return (ticker.style.animation = null);
      }, 20);

      // после того, как язычок прошёл сектор - делаем его текущим
      currentSlice = slice;
    }

    // запускаем анимацию
    tickerAnim = requestAnimationFrame(runTickerAnimation);

    // отслеживаем, когда закончилась анимация вращения колеса

    spinner.addEventListener("transitionend", function () {
      // останавливаем отрисовку вращения
      cancelAnimationFrame(tickerAnim);

      // получаем текущее значение поворота колеса
      rotation %= 360;

      // выбираем приз
      selectPrize();

      // убираем класс, который отвечает за вращение
      wheel.classList.remove(spinClass);

      // отправляем в CSS новое положение поворота колеса
      // spinner.style.setProperty("--rotate", rotation);
      // делаем кнопку снова активной

      trigger.disabled = false; // ( !!! УДАЛИТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )

      // изменяем значение угла вращения колеса для фиксации на нужном нам поле
      rotation = 1243;
    });
  };

  // функция выбора призового сектора
  var selectPrize = function selectPrize() {
    var selected = Math.floor(rotation / prizeSlice),
      resultWin = prizeNodes[selected].innerHTML,
      resultLos = prizeNodes[selected].innerText,
      popUpWinContent = popUpWin.querySelector(".popUp__content"),
      btn = document.querySelector(".btn-spin");

    // если используется вариант с попаданием на проиграшное поле - раскоментировать:
    // if (prizeNodes[selected].classList.contains("losses")) {
    //   btn.innerHTML = resultLos;
    // } else {
    //   popUpWin.classList.add("show");
    //   popUpWinContent.innerHTML = resultWin;
    // }

    // отображаем popUp с результатом
    popUpWinContent.innerHTML = resultWin;
    popUpWin.classList.add("show");
  };

  // отслеживаем нажатие на кнопку
  trigger.forEach((e) => {
    e.addEventListener("click", function () {
      // делаем её недоступной для нажатия
      trigger.disabled = true; // ( !!! РАСКОММЕНТИРОВАТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
      // rotation = Math.floor(Math.random() * 360 + spinertia(2000, 12000));
      // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку

      wheel.classList.add(spinClass);

      // через CSS говорим секторам, как им повернуться
      spinner.style.setProperty("--rotate", rotation);

      // возвращаем язычок в горизонтальную позицию
      ticker.style.animation = "none";

      // запускаем анимацию вращение
      runTickerAnimation();
    });
  });

  // подготавливаем всё к первому запуску
  setupWheel();

  //     END WHEEL      END WHEEL     END WHEEL

  var openInfoPopUp = document.querySelector(".openInfoPopUp"),
    infoPopUp = document.getElementById("infoPopUp");
  if (openInfoPopUp) {
    openInfoPopUp.addEventListener("click", function (e) {
      e.preventDefault();
      popUpWin.classList.add("hide");
      infoPopUp.classList.add("show");
    });
  }
  var parallaxEfectMouse = function parallaxEfectMouse(event) {
    var parallaxElements = document.querySelectorAll(".parallex-elem");
    parallaxElements.forEach(function (elem) {
      var speed = elem.getAttribute("data-speed");
      elem.style.transform = "translate(-"
        .concat((event.clientX * speed) / 1000, "px, -")
        .concat((event.clientY * speed) / 1000, "px)");
    });
  };

  var parallaxEfectScroll = function parallaxEfectScroll(event) {
    var parallaxElements = document.querySelectorAll(".parallex-elem");
    parallaxElements.forEach(function (elem) {
      var speed = elem.getAttribute("data-speed");
      elem.style.transform = "translateY(-".concat(
        (window.scrollY * speed) / 100,
        "px"
      );
    });
  };

  document.addEventListener("mousemove", parallaxEfectMouse);
  document.addEventListener("scroll", parallaxEfectScroll);
});
window.addEventListener("load", function () {
  var body = document.querySelector("body");
  body.classList.remove("loader");
});
