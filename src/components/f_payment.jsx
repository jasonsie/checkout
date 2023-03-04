import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import css from '@/styles/checkout.module.sass';
import { Box, Button, Card, CardHeader, CardContent, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import master from '../../public/icons/master.svg';
import visa from '../../public/icons/visa.svg';
import payProcessor from 'fetcher';

// step 2的頁面
const F_payment = ({ data }) => {
  const { transCtx, handleNext, handleBack } = data;
  const { title, desc, Lbtn, Rbtn } = transCtx;
  const router = useRouter();
  const { pathname } = router;

  function paymentHandler() {
    sessionStorage.removeItem('user');
    handleNext();
    let response = payProcessor();
    response
      .then((res) => sessionStorage.setItem('res', JSON.stringify(res.data)))
      .then(() => router.push(pathname.replace('[step]', 'step3')))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Card className={css.fDataCon}>
        <CardHeader
          className={css.header}
          title={title}
          subheader={<Typography className={css.desc}>{desc}</Typography>}
        />
        <CardContent className={css.content}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Card
              sx={{
                '& .MuiCardHeader-root': { padding: 0 },
                '& .MuiCardContent-root': { padding: 2 },
              }}
            >
              <CardHeader avatar={<CreditCardIcon className={css.icon} />} title="Credit Card" />
              <CardContent className={css.cardCon}>
                <Typography component="div">
                  You will be redirected to a secure payment platform. This is a secure process. The
                  validation of your payment can take up to 24 hours.
                </Typography>
                <Box>
                  <Image src={master} alt="master card" width={80} height={80} />
                  <Image src={visa} alt="visa card" width={80} height={80} />
                </Box>
              </CardContent>
            </Card>
          </form>
          <Box className={css.twoBtnCon}>
            <Link href={pathname.replace('[step]', 'step1')}>
              <Button onClick={handleBack}>{Rbtn}</Button>
            </Link>
            <Button onClick={paymentHandler}>{Lbtn}</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default F_payment;
