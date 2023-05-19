import Cookies from 'js-cookie';

const getCsrfToken = () => {
  return Cookies.get('XSRF-TOKEN');
};

export default getCsrfToken;
