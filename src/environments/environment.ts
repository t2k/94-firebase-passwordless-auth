// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDoIPv_gn1uEx0A4JA2AFO-lO2DfsS5NX8",
    authDomain: "fb-blotter.firebaseapp.com",
    databaseURL: "https://fb-blotter.firebaseio.com",
    projectId: "fb-blotter",
    storageBucket: "fb-blotter.appspot.com",
    messagingSenderId: "212715681420"
  }
};
