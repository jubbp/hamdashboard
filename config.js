const topBarCenterText = `VK6DEV - OF76to`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VK6DEV", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3","LIGHTNING","https://map.blitzortung.org/#5.87/-30.5/117.41","1","R",],
  ["2196F3", "DX LEADERS", "https://www.wiaawards.com/view/DXLeaderboard.php", "1"],
  ["2196F3", "DX GROUPS", "https://www.wiaawards.com/view/GroupStandings.php", "1"],
  [
    "2196F3",
    "RADAR",
    "http://www.bom.gov.au/products/IDR702.loop.shtml#skip",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=-33.5&lon=117&zoom=8",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/winkel3=107.47,-28.89,522/loc=115.435,-33.611",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "http://www.bom.gov.au/radar/IDR00004.jpg"],
  [
    "LOCAL RADAR","http://www.bom.gov.au/radar/IDR702.gif"  
  ],
    [
      "LIGHTNING","https://images.lightningmaps.org/blitzortung/oceania/index.php?map=australia_big",
    ],
    [
      "LIGHTNING LOCAL",
      "https://www.lightningmaps.org/#m=oss;t=3;s=0;o=0;b=;ts=0;z=9;y=-33.9011;x=115.4341;d=2;dl=2;dc=0",
      "https://map.blitzortung.org/index.php?interactive=0&NavigationControl=0&FullScreenControl=0&Cookies=0&InfoDiv=0&MenuButtonDiv=0&ScaleControl=0&LinksCheckboxChecked=1&LinksRangeValue=10&MapStyle=2&MapStyleRangeValue=10&Advertisment=0#6/-33.5/115",
    ],
    [
      "SYNOPTIC",
      "https://data.weatherzone.com.au/data/hourly/images/synoptic/wz_syn_aus_d0_640x480.jpg",
    ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  
  [
    "BUNBURY WEBCAMS",
    "https://weathercams.airservicesaustralia.com/wp-content/uploads/airports/Bunbury_Airport/Bunbury_Airport_340.jpg",
    "https://weathercams.airservicesaustralia.com/wp-content/uploads/airports/Bunbury_Airport/Bunbury_Airport_160.jpg",
    "https://weathercams.airservicesaustralia.com/wp-content/uploads/airports/Bunbury_Airport/Bunbury_Airport_160.jpg",
  ],
  [
    "GREY LINE", 
    "https://www.timeanddate.com/scripts/sunmap.php?iso=now"
  ],
  [
    "WEST HF PROPAGATION",
    "https://www.tvcomm.co.uk/g7izu/Autosave/INDIAN_HF_AutoSave.JPG",
  ],
  [
    "EAST HF PROPAGATION", 
    "https://www.tvcomm.co.uk/g7izu/Autosave/PACIFIC_HF_AutoSave.JPG"
  ],
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solar100sc.php",
    "https://www.hamqsl.com/solarpich.php"
  ],
];
