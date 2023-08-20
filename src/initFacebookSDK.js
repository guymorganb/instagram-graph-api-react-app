// Inject the Facebook SDK int the app

const Facebook_app_ID = '811579650514127';

export default function initFacebookSDK() {
    return new Promise((resolve) => {
        // wait for facebook SDK to initialize before starting React App.
        window.fbAsyncInit = () =>{
            window.FB.init({
                appId: Facebook_app_ID,
                cookie: true,
                xfbml: true,
                version: "v10.0",
            });

            resolve();
        };
        // load facebook SDK script
        (function (d, s, id){
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if(d.getElementById(id)){
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    });
}