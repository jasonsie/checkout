import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from '@/styles/checkout.module.sass';
import { Box, Button, Card, CardHeader, CardContent, TextField, Typography } from '@mui/material';

// 此，為step 1的頁面
const F_data = ({ data }) => {
  const { handleNext, transCtx } = data;
  const { title, desc, ft, lt, Rbtn } = transCtx;
  const router = useRouter();
  const { pathname } = router;
  const [inputData, setInputData] = useState(null);

  function inputHandler(e, key) {
    const newObj = { ...inputData };
    newObj[key] = e.target.value;
    setInputData(() => {
      return newObj;
    });
    sessionStorage.setItem('user', JSON.stringify(newObj));
  }

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user) setInputData(user);
  }, []);

  return (
    <>
      <Card className={css.fDataCon}>
        <CardHeader
          className={css.header}
          title={title}
          subheader={<Typography className={css.desc}>{desc}</Typography>}
        />
        <CardContent className={css.content}>
          <Box>
            <form onSubmit={(e) => e.preventDefault()}>
              <TextField
                fullWidth
                margin="normal"
                label={ft}
                placeholder="John"
                required
                error={inputData?.ft === ''}
                helperText={inputData?.ft === '' ? 'It cannot be empty' : ''}
                value={inputData?.ft ?? ''}
                onChange={(e) => inputHandler(e, 'ft')}
              />
              <TextField
                fullWidth
                margin="normal"
                label={lt}
                placeholder="Dove"
                required
                error={inputData?.lt === ''}
                helperText={inputData?.lt === '' ? 'It cannot be empty' : ''}
                value={inputData?.lt ?? ''}
                onChange={(e) => inputHandler(e, 'lt')}
              />
            </form>
          </Box>
          <Box className={css.btnCon}>
            <Link href={pathname.replace('[step]', 'step2')}>
              <Button
                onClick={handleNext}
                disabled={inputData?.ft == '' || inputData?.lt == '' || !inputData}
              >
                {Rbtn}
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default F_data;
