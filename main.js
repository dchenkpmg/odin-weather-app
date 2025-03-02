/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getWeather(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(\"Failure in network request!\");\n    }\n    const json = await response.json();\n    return json;\n  } catch (err) {\n    console.error(err);\n    throw err;\n  }\n}\n\nfunction processWeather(data) {\n  return data.currentConditions.conditions;\n}\n\nfunction displayWeather() {\n  const submitBtn = document.querySelector(\"#submitBtn\");\n  const location = document.querySelector(\"#q\");\n  const message = document.querySelector(\".weather-message\");\n  submitBtn.addEventListener(\"click\", async (event) => {\n    event.preventDefault();\n    try {\n      const condition = await main(location.value);\n      message.textContent = `The weather in ${location.value} is ${condition}.`;\n    } catch {\n      console.error(\"No location found.\");\n      message.textContent = \"Failed to find location.\";\n    }\n  });\n}\n\nasync function main(location) {\n  const apiKey = \"JR587EKN4NF38SBRRCMR5B2M9\";\n  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=${apiKey}&contentType=json`;\n\n  try {\n    const json = await getWeather(url);\n    const condition = processWeather(json);\n    return condition;\n  } catch (err) {\n    console.log(err);\n    throw new Error(\"Could not process response.\");\n  }\n}\n\ndisplayWeather();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0IsS0FBSyxVQUFVO0FBQzdFLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHFHQUFxRyxTQUFTLG9DQUFvQyxPQUFPOztBQUV6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIodXJsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWx1cmUgaW4gbmV0d29yayByZXF1ZXN0IVwiKTtcbiAgICB9XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlcihkYXRhKSB7XG4gIHJldHVybiBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKCkge1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ0blwiKTtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3FcIik7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItbWVzc2FnZVwiKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25kaXRpb24gPSBhd2FpdCBtYWluKGxvY2F0aW9uLnZhbHVlKTtcbiAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgVGhlIHdlYXRoZXIgaW4gJHtsb2NhdGlvbi52YWx1ZX0gaXMgJHtjb25kaXRpb259LmA7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTm8gbG9jYXRpb24gZm91bmQuXCIpO1xuICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiRmFpbGVkIHRvIGZpbmQgbG9jYXRpb24uXCI7XG4gICAgfVxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbWFpbihsb2NhdGlvbikge1xuICBjb25zdCBhcGlLZXkgPSBcIkpSNTg3RUtONE5GMzhTQlJSQ01SNUIyTTlcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259P3VuaXRHcm91cD11cyZpbmNsdWRlPWN1cnJlbnQma2V5PSR7YXBpS2V5fSZjb250ZW50VHlwZT1qc29uYDtcblxuICB0cnkge1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBnZXRXZWF0aGVyKHVybCk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gcHJvY2Vzc1dlYXRoZXIoanNvbik7XG4gICAgcmV0dXJuIGNvbmRpdGlvbjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcHJvY2VzcyByZXNwb25zZS5cIik7XG4gIH1cbn1cblxuZGlzcGxheVdlYXRoZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;