import React from 'react';
import css from '@/styles/home.module.sass';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PersonIcon from '@mui/icons-material/Person';
import IconBtn from '../components/iconBtn';
import LangDropdown from '../components/langDropdown';
import { Box } from '@mui/material';

const headerBTN = {
  help: { text: 'help', icon: <QuestionMarkIcon color="primary" fontSize="small" /> },
  signIn: { text: 'SIGN IN', icon: <PersonIcon color="primary" fontSize="small" /> },
};

const Main = () => {
  return (
    <Box className={css.header}>
      <IconBtn data={headerBTN['help']} />
      <IconBtn data={headerBTN['signIn']} />
      <LangDropdown />
    </Box>
  );
};

export default Main;
