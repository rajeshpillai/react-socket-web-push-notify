/*
=======================================

Public Key:
BLHxWiNVmr7ROB8O3KpPRJFAMhMypwe4X9TdWMmhsPSzHszo32PDkndpvWx3H0OY2HwFCQRU98JBpZ_AEsVxWG4

Private Key:
VXcSZD3mdKyXEmDZNrB02WTxgUZmdIpAEo5tnXR4OH4

=======================================

*/

const urlB64ToUint8Array = base64String => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

self.addEventListener("activate", async () => {
  // This will be called only once when the service worker is activated.
  console.log("Hello from service worker.");

  try {
    const applicationServerKey = urlB64ToUint8Array(
      "BLHxWiNVmr7ROB8O3KpPRJFAMhMypwe4X9TdWMmhsPSzHszo32PDkndpvWx3H0OY2HwFCQRU98JBpZ_AEsVxWG4"
    );

    const options = { applicationServerKey, userVisibleOnly: true };

    const subscription = await self.registration.pushManager.subscribe(options);
    console.log("subs: ", JSON.stringify(subscription));
    /* LOG OUTPUT: Google
        subs:  {"endpoint":"https://fcm.googleapis.com/fcm/send/c3DsU5n5NOA:APA91bGsQ_RdhGdQX7T2kipw-vILovDZxJlOD4SjlFAWVg2WAf2gTwqbJAnOgJhofW_W7aDFvUaJzrxYOdZUd1XnJZ6d3LO79_4ILUaiNEYmkb0gaCY-NkvU_x2-6_1xIp4bVf-Fg6Ll",
        "expirationTime":null,
        "keys":{"p256dh":"BOkas3eN-2DPbeY8RvR2g7NVOEcsmt5cOYTOSR-rihQKpPJWdODW4TFwk65vegkPDHue1iYbAe8W9mCzHWD67a4","auth":"jFL-bwVPRA_SnMoRIq-V7A"}}
    */

    /* LOG OUTPUT: Firefox
        subs:  {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABdBgQO2MKPusxFsBeY5DU7XG-dJ1udXvfWoyK7PIcSkeP2p_vBwRBk8RQbWi2xl7h8rkqryqxnUOon_GoOKCfJmC78nptCE60iqryTfpH_5USoLp1GND-ySxE_eBEfOsXaSe6yReOLrQszBo2VHjv6NezaqmwDhLCbnzz7gn_ikQ_UqhA",
        "keys":{"auth":"D3VDFb4jT4Bqn-iH8VzxJw","p256dh":"BE3P_2G0x2aJTmyuUysOrov1_PDJyZ603hraYOZEonCBAdGU5Wi1POHc6_Geseooawzig2zjGNfl6zkIamYEmxs"}} 

    */
  } catch (err) {
    console.log("Error", err);
  }
});
