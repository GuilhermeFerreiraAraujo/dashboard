import React, { useContext, useEffect } from 'react';
import is from 'is_js';
import Analytics from 'components/dashboards/analytics';
import Crm from 'components/dashboards/crm';
import Default from 'components/dashboards/default';

import Ecommerce from 'components/dashboards/e-commerce';

import Ims from 'components/dashboards/project-management';
import ProjectManagement from 'components/dashboards/project-management';
import Saas from 'components/dashboards/saas';

import SupportDesk from 'components/dashboards/support-desk';

import AppContext from 'context/Context';

const Layout = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  const {
    config: { navbarPosition }
  } = useContext(AppContext);

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
    if (is.safari()) {
      HTMLClassList.add('safari');
    }
  }, [HTMLClassList]);

  useEffect(() => {
    if (navbarPosition === 'double-top') {
      HTMLClassList.add('double-top-nav-layout');
    }
    return () => HTMLClassList.remove('double-top-nav-layout');
  }, [navbarPosition]);

  return (
    <>
      <div className="container">
        <Analytics />
        <Crm />
        <Default />
        <Ecommerce />
        <Ims />
        <ProjectManagement />
        <Saas />
        <SupportDesk />
      </div>
    </>
  );
};

export default Layout;
