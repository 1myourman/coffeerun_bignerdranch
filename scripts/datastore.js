(function (window) {
  "use strict";
  let App = window.App || {};
  let Promise = window.Promise;
  /* IIFE의 내부에서 App이라는 로컬 변수를 선언, 윈도우에 app 속성이 없다면 {} 참조한다.
  첫번째 선택 (window.App)이 아직 안 만들어졌으면 유효한 값(여기서는 ||)을 제공하기 위해 사용한다. */

  function DataStore() {
    //DataStore라는 함수를 선언했다. 대문자인 이유는
    //generator라는 함수의 사용을 다른 이에게 알려주기 위함
    this.data = {};
  }

  function promiseResolvedWith(value) {
    let promise = new Promise(function (resolve, reject) {
      resolve(value);
    });
    return promise;
  }

  DataStore.prototype.add = function (key, val) {
    //key and val are for changing data property
    this.data[key] = val;
    return promiseResolvedWith(null);
  };

  DataStore.prototype.get = function (key) {
    return promiseResolvedWith(this.data[key]);
  };

  DataStore.prototype.getAll = function () {
    return promiseResolvedWith(this.data);
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  };

  App.DataStore = DataStore; //DataStore를 App객체에 연결시키고
  console.log;
  window.App = App; //전역 App 속성에 수정된 새 앱으 다시 할당한다.
})(window);
