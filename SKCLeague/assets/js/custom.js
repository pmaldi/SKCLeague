$(document).ready(function(){
	"use strict";

	/*
	==============================================================
			Slick Slider Main Banner Script Start
	==============================================================
	*/
  if($('.main_banner').length){
  	$('.main_banner').slick({
      fade: true
    });
  }
	/*
	==============================================================
			Featured Slider Script Start
	==============================================================
	*/
  if($('.featured_slider').length){
  	$('.featured_slider').slick({
      fade: true
    });
  }

  /*
  ==============================================================
   Ticker   Script Start
  ==============================================================
  */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.absolute_ticker').fadeIn();
    } else {
        $('.absolute_ticker').fadeOut();
    }
  });
  /*
    ==============================================================
       SLICK SLIDER MULTIPUL SCRIPT
    ==============================================================
  */
  if($('.result_slider').length){
  	$('.result_slider').slick({
  	  centerMode: true,
  	  centerPadding: '0px',
  	  slidesToShow: 6,
  	  responsive: [
  	    {
  	      breakpoint: 1680,
  	      settings: {
  	        arrows: false,
  	        centerMode: true,
  	        centerPadding: '0px',
  	        slidesToShow: 3
  	      }
  	    },
  	    {
  	      breakpoint: 481,
  	      settings: {
  	        arrows: false,
  	        centerMode: false,
  	        centerPadding: '0px',
  	        slidesToShow: 1
  	      }
  	    }
  	  ]
  	});
  }

	/*
	==============================================================
	 Back to Top  Script Start
	==============================================================
	*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
		  	$('.go-up').fadeIn();
		} else {
		  	$('.go-up').fadeOut();
		}
	});
	$('.go-up').on('click', function () {
		$("html, body").animate({
		  scrollTop: 0
		}, 600);
		return false;
	});
  });

  /*
  ==============================================================
     TICKER SCRIPT
  ==============================================================
  */
  $(document).ready(function(){
    $('.ticker').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    });
  });
    /*
    ==============================================================
        DL Responsive Menu
    ==============================================================
    */
    if(typeof($.fn.dlmenu) == 'function'){
      $('#main-responsive-navigation').each(function(){
        $(this).find('.dl-submenu').each(function(){
        if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
          var parent_nav = $('<li class="menu-item main-parent-menu"></li>');
          parent_nav.append($(this).siblings('a').clone());

          $(this).prepend(parent_nav);
        }
        });
        $(this).dlmenu();
      });
    }
  /*
    =======================================================================
         Line Chart Script Script
    =======================================================================
  */
  if($('#chartContainer').length){
    var chart = new CanvasJS.Chart("chartContainer",
    {
      zoomEnabled: true,
        axisX:{
        gridColor: "#d7d8d8" ,
        gridThickness: 1,
        valueFormatString: "MMM",
        interval:1,
        lineThickness: 1,
        lineColor: "#d7d8d8",
        intervalType: "month",
        tickThickness: 0
      },
      axisY:{
        interval: 15,
        gridColor: "#fff",
        gridThickness: 0,
        lineColor: "#d7d8d8",
        lineThickness: 1,
        tickThickness: 0
      },
      toolTip:{
        backgroundColor: "#000",
        cornerRadius: 3,
        fontColor: "#fff",
        Content: "{x} : {y}",
        borderThickness: 0,
        fontSize: 12
      },
      data: [
      {
        type: "line",
        markerColor: "#fff",
        markerType: "circle",
        markerBorderColor : "#ffbe00",
        markerBorderThickness: 4,
        //lineThickness: 3,
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 5 , lineColor: "#ffbe00" },
        { x: new Date(2012, 01, 1), y: 9, lineColor: "#ffbe00" },
        { x: new Date(2012, 02, 1), y: 17, lineColor: "#ffbe00" },
        { x: new Date(2012, 03, 1), y: 22, lineColor: "#ffbe00"  },
        { x: new Date(2012, 04, 1), y: 32 , lineColor: "#ffbe00" },
        { x: new Date(2012, 05, 1), y: 40, lineColor: "#ffbe00"  },
        { x: new Date(2012, 06, 1), y: 25 , lineColor: "#ffbe00" },
        { x: new Date(2012, 07, 1), y: 23 , lineColor: "#ffbe00" },
        { x: new Date(2012, 08, 1), y: 50 , lineColor: "#ffbe00" , indexLabel: "Highest",markerColor: "#fff", markerType: "circle", markerBorderColor : "#ffbe00", markerBorderThickness: 4,},
        { x: new Date(2012, 09, 1), y: 20 , lineColor: "#ffbe00" },
        { x: new Date(2012, 10, 1), y: 15 , lineColor: "#ffbe00" },
        { x: new Date(2012, 11, 1), y: 10 , lineColor: "#ffbe00" }

        ]
      }


      ]
    });

  chart.render();
  }
  var limit = 1000;    //increase number of dataPoints by increasing this

    var y = 0;
    var data = []; var dataSeries = { type: "line" };
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
        y += (Math.random() * 10 - 5);
         dataPoints.push({
          x: i - limit / 2,
          y: y
           });
        }
     dataSeries.dataPoints = dataPoints;
     data.push(dataSeries);

  /*
    =======================================================================
         Bar Chart Script Script
    =======================================================================
  */
  if($('#chartContainerbar').length){
    var chart = new CanvasJS.Chart("chartContainerbar",
    {
      animationEnabled: true,
      legend: {
        cursor:"pointer",
        itemclick : function(e) {
          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
          }
          else {
              e.dataSeries.visible = true;
          }
          chart.render();
        }
      },
      axisX:{
        tickThickness: 0
      },
      axisY:{
        interval: 100,
        gridColor: "#d7d8d8",
        gridThickness: 1,
        lineColor: "#d7d8d8",
        lineThickness: 1,
        labelFontSize:0,
        tickThickness: 0
      },
      toolTip: {
        shared: false,
        content: function(e){
          var str = '';
          var total = 0 ;
          var str3;
          var str2 ;
          for (var i = 0; i < e.entries.length; i++){
            var  str1 = "<span style= 'color:"+e.entries[i].dataSeries.color + "'> " + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
          }
          str2 = "<span style = 'color:DodgerBlue; '><strong>"+e.entries[0].dataPoint.label + "</strong></span><br/>";
          str3 = "<span style = 'color:Tomato '>Total: </span><strong>" + total + "</strong><br/>";

          return (str2.concat(str)).concat(str3);
        }

      },
      data: [
      {
        type: "bar",
        showInLegend: false,
        name: "Gold",
        color: "#ffbe00",
        dataPoints: [
        { y: 198, label: "0-15'"},
        { y: 201, label: "15-30'"},
        { y: 202, label: "30-45'"},
        { y: 236, label: "45-60'"},
        { y: 395, label: "60-75'"},
        { y: 557, label: "75-90'"}


        ]
      },
      {
        type: "bar",
        showInLegend: false,
        name: "Silver",
        color: "#2f9ff5",
        dataPoints: [
        { y: 158, label: "0-15'"},
        { y: 101, label: "15-30'"},
        { y: 200, label: "30-45'"},
        { y: 200, label: "45-60'"},
        { y: 300, label: "60-75'"},
        { y: 500, label: "75-90'"}


        ]
      }

      ]
    });

  chart.render();
  }
