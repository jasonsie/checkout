import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Menu, MenuItem } from '@mui/material';

const langDropdownData = [
  { name: 'en', displayName: 'English' },
  { name: 'zh_CN', displayName: '中文' },
];

//控制多語系的components
const LangDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState('');
  const router = useRouter();
  const { locale, asPath } = router;

  const handleLangDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangDropdownClose = (props) => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  return (
    <>
      <Button variant="text" sx={{ color: 'black', margin: 1 }} onClick={handleLangDropdownOpen}>
        {lang}
      </Button>
      <Menu
        sx={{ '& .MuiMenu-paper': { minWidth: 80 } }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
      >
        {langDropdownData.map((i, idx) =>
          lang === i['name'] ? (
            <MenuItem
              key={idx}
              sx={{ py: 1 }}
              selected={lang === i['name']}
              onClick={() => handleLangDropdownClose()}
            >
              {i.displayName}
            </MenuItem>
          ) : (
            <Link
              href={{
                pathname: `/[locale]${asPath}`,
                query: { locale: i['name'] },
              }}
              locale={false}
              key={idx}
            >
              <MenuItem
                sx={{ py: 1 }}
                selected={lang === i['name']}
                onClick={() => handleLangDropdownClose()}
              >
                {i.displayName}
              </MenuItem>
            </Link>
          ),
        )}
      </Menu>
    </>
  );
};

export default LangDropdown;
