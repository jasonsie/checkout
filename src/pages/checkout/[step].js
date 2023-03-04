import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// css樣式
import css from '@/styles/checkout.module.sass';
// 多語系function
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Components
import Main from '@/views/main';
import { Box } from '@mui/material';

// 此頁主要控制資料
const Checkout = () => {
  const router = useRouter();
  const { query } = router;
  const [queryStr, setQueryStr] = useState('');
  const { t } = useTranslation('common');

  useEffect(() => {
    setQueryStr(query.step);
  }, [query]);

  // <Main/>為 form表單，靜態顯示所需資料統一由此送出。
  return (
    <>
      <Box className={css.bg}>
        <Main
          data={{
            steps: t('bar', { returnObjects: true }),
            content: t(queryStr, { returnObjects: true }),
            queryStr: queryStr,
          }}
        />
      </Box>
    </>
  );
};

export default Checkout;

// 透過 next.js的getServerSideProps（）；client => url => server
// 在server攔截url，判斷locale給出相應的翻譯資料
export async function getServerSideProps({ res, req, locale }) {
  const url = req.url;
  const step = url.split('/').pop();

  // if (step !== 'step1' || step !== 'step2' || step !== 'step3') {
  //   res.setHeader('Location', '/');
  //   res.statusCode = 302;
  //   res.end();
  // }

  return {
    props: { ...(await serverSideTranslations(locale ?? 'zh-TW', ['common'])) },
  };
}
