import { useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import { Container, Tabs, Tab, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ActivityTab from './ActivityTab';
import EditProfileTab from './EditProfileTab';
import SecurityTab from './SecurityTab';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

const ManagementUserSettings = () => {
  const [currentTab, setCurrentTab] = useState<string>('activity');

  const tabs = [
    { value: 'activity', label: 'Activity' },
    { value: 'edit_profile', label: 'Edit Profile' },
    { value: 'security', label: 'Passwords/Security' }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>User Settings - Applications</title>
      </Helmet>
      <Container maxWidth="lg" className="MuiPageTitle-wrapper">
        <PageHeader />
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'activity' && <ActivityTab />}
            {currentTab === 'edit_profile' && <EditProfileTab />}
            {currentTab === 'security' && <SecurityTab />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ManagementUserSettings;
