// Created by iWeb 3.0.4 local-build-20111205

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,302),url:'Filmy_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Filmy_files/stroke_1.png'},{rect:new IWRect(2,-2,362,4),url:'Filmy_files/stroke_2.png'},{rect:new IWRect(364,-2,5,4),url:'Filmy_files/stroke_3.png'},{rect:new IWRect(364,2,5,302),url:'Filmy_files/stroke_4.png'},{rect:new IWRect(364,304,5,4),url:'Filmy_files/stroke_5.png'},{rect:new IWRect(2,304,362,4),url:'Filmy_files/stroke_6.png'},{rect:new IWRect(-2,304,4,4),url:'Filmy_files/stroke_7.png'}],new IWSize(366,306))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Filmy_files/FilmyMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
