const fs = require('fs');

let refJsonPath = './api_item_owner_neoclassicism.json';

let targetJsonPath = './data_changingUrl_neoclassicism.json';

const refJson = fs.readFileSync(refJsonPath).toString(); //api_item 에서 owner_id가 해당사조인 것
const refObj = JSON.parse(refJson);

let targetJson = fs.readFileSync(targetJsonPath).toString(); //api_room 중 해당사조방의 data_json칼럼 
const targetObj = JSON.parse(targetJson);

// console.log(targetObj.artworks[0].url)


targetObj.artworks.forEach((artwork, idx) => {
	
	const sameIdPkIdx = refObj.api_item.findIndex((item) => item.id === artwork.artwork_pk)

	if (sameIdPkIdx !== -1) {
		artwork.url = refObj.api_item[sameIdPkIdx].image_file;
	}
});

// console.log(targetObj.artworks[0].url)

// 결과 - 해당사조방의 data_json칼럼에 붙여넣을 것!!!!
targetJson = JSON.stringify(targetObj);
console.log(targetJson);