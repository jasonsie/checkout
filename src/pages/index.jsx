import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import css from '@/styles/home.module.sass';

export default function Home() {
  return (
    <>
      <Box className={css.bg}>
        <Link href={`/checkout/step1`}>
          <Typography sx={{ m: 4 }} variant="h4">
            Enter the Checkout Process
          </Typography>
        </Link>
      </Box>
    </>
  );
}
