import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import css from '@/styles/checkout.module.sass';
import { Card, CardContent, CardHeader, Typography, Button } from '@mui/material';

// step3 的頁面
const F_fullfill = () => {
  const router = useRouter();
  const { locale } = router;
  const [transCtx, setTransCtx] = useState(null);

  function backHandler() {
    sessionStorage.clear();
    router.push('/');
  }

  useEffect(() => {
    let res = JSON.parse(sessionStorage.getItem('res'));
    setTransCtx(res);
  }, []);

  // const handleRouteChangeStart = (url, shallow) => {
  //   console.log(`Navigated to ${url}, forward URL is ${query['step']}`);
  // };

  // useEffect(() => {
  //   router.events.on('routeChangeStart', (url, { shallow }) =>
  //     handleRouteChangeStart(url, { shallow }),
  //   );

  //   return () => {
  //     router.events.off('routeChangeStart', (url, { shallow }) =>
  //       handleRouteChangeStart(url, { shallow }),
  //     );
  //   };
  // }, [router.events]);

  return (
    <>
      <Card className={css.fDataCon}>
        <CardHeader
          className={css.header}
          title={transCtx && transCtx.title[locale]}
          subheader={
            <Typography className={css.desc}>{transCtx && transCtx.message[locale]}</Typography>
          }
        />
        <CardContent className={css.content}>
          <Button onClick={backHandler}>Back</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default F_fullfill;
