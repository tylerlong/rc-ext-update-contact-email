import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

const main = async () => {
  await rc.authorize({
    username: process.env.RINGCENTRAL_USERNAME!,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD!,
  });
  let extInfo = await rc.restapi().account().extension().get();
  console.log(extInfo.contact);
  await rc
    .restapi()
    .account()
    .extension()
    .put({
      contact: {
        email: 'tyler4long+dre2@gmail.com',
      },
    });
  extInfo = await rc.restapi().account().extension().get();
  console.log(extInfo.contact);
  await rc.revoke();
};

main();
