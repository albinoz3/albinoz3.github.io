var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 12,
  medium: 14
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(50 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text:"21 Setembro 2015",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "E... Nossa historia comecou a 7 anos atras com um abraco um beijo um fone",
      y: 10,
      x: posX,
      duration: 4000
    },
    {
      text: "E de la pra ca muitas coisas mudaram inclusive nos dois",
      id: "sphinx",
      x: posX,
      delay: 300,
      duration: 4500
    },
    {
      text: "Crescemos e amadurecemos juntos como pessoas como um casal  ",
      
      color: "#3f51b5",
      delay: 300,
      x: posX,
      duration: 4500
    },
    {
      text: " ",
      id: "end",
      color: "#3f51b5",
      delay: 300,
      x: posX,
      duration: 4500
    }
  ],
  {
    strokeWidth: 1,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "28 Jan 2019",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Com o fruto do nosso amor ele nasceu e mds como eu sentir medo",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "Mas quando eu vi ele e segurei nos bracos pensei essa e a melhor sensacao do mundo",
      y: 40,
      x: posX,
      duration: 3500
    }
  ],
  {
    strokeWidth: 1,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "21 Setembro 2022",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "E chegamos hoje sei que passamos por muitas coisas",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "Me pego pensando as vezes eu amo ela ainda o mesmo tanto de quando eu conhecir",
      y: 1,
      x: posX,
      duration: 3500
    },
    {
      text: "Nao, eu amo ela muito mais porque eu sei que eu posso contar com ela pra tudo.EU TEAMO",
      y: -20,
      color: "#3f51b5",
      id: "end",
      x: posX,
      duration: 1500
    }
  ],
  {
    strokeWidth: 1,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});