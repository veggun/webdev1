let haveEnough = function (totalCash , watchesCount, earringsCount, watchesSum, earringsSum) {

totalCash = prompt('Just скажи сколько money в твоем pocket?')
watchesCount = prompt('Golden watches уже ждут твое wrist! Скажи сколько?')
earringsCount = prompt ('Bro, на твоем ear висит слишом мало brilliants. Скажи сколько нужно довесить?')
watchesSum = Number(prompt('Скажи колько стоят эти wonderful часы made of gold plastic and uranium? ') * parseInt(watchesCount))
earringsSum =Number(prompt('Не забудь назвать price этих beautiful сережек, сорванных с голодных african womens') * parseInt(earringsCount))

  if (parseInt(totalCash) >= parseInt(watchesSum) + parseInt(earringsSum)) 
 	document.write('Enough $$$') ;
  else 
 	document.write('Not Enough $$$')
}

haveEnough()


