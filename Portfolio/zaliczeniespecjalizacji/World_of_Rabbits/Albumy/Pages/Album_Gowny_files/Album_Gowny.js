// Created by iWeb 3.0.4 local-build-20111205

function createMediaStream_id2()
{return IWCreatePhotocast("http://zaliczeniespecjalizacji.cba.pl/World_of_Rabbits/Albumy/Pages/Album_Gowny_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://zaliczeniespecjalizacji.cba.pl/World_of_Rabbits/Albumy/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://zaliczeniespecjalizacji.cba.pl/World_of_Rabbits/Albumy/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(151,151),new IWSize(151,37),new IWSize(181,203),27,27,0,new IWSize(24,25)),new IWPhotoFrame([IWCreateImage('Album_Gowny_files/techblack-frame_01.png'),IWCreateImage('Album_Gowny_files/techblack-frame_02.png'),IWCreateImage('Album_Gowny_files/techblack-frame_03.png'),IWCreateImage('Album_Gowny_files/techblack-frame_06.png'),IWCreateImage('Album_Gowny_files/techblack-frame_09.png'),IWCreateImage('Album_Gowny_files/techblack-frame_08.png'),IWCreateImage('Album_Gowny_files/techblack-frame_07.png'),IWCreateImage('Album_Gowny_files/techblack-frame_04.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,16.000000,16.000000,16.000000,18.000000,543.000000,380.000000,543.000000,380.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Album_Gowny_files/Album_GownyMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
