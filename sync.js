function register(cb) {
  setTimeout(() => {
    console.log("register here");
  }, 4000);
  cb();
}
function login(cb) {
  setTimeout(() => {
    console.log("login here");
  }, 6000);
  cb();
}
function getData(cb) {
  setTimeout(() => {
    console.log("fetch data");
  }, 8000);
  cb();
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
  }, 7000);
}

register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
                    }
                )
            }
        )
    }
);

console.log("call another application");