import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import LoginPage from '../app/(auth)/login.tsx';
import SignupPage from '../app/(auth)/signup.tsx';
import DashboardPage from '../app/dashboard/page.tsx';
import TeamsPage from '../app/teams/page.tsx';
import UsersPage from '../app/users/page.tsx';
import LeavePage from '../app/leave/page.tsx';
import PulsePayPage from '../app/pulsepay/page.tsx';
import PayrollPage from '../app/payroll/page.tsx';
import AnalyticsPage from '../app/analytics/page.tsx';
import OnboardingPage from '../app/onboarding/page.tsx';
import AutomationPage from '../app/automation/page.tsx';
import ContractsPage from '../app/contracts/page.tsx';
import SettingsPage from '../app/settings/page.tsx';
import IntegrationsPage from '../app/integrations/page.tsx';
import Layout from './components/Layout.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
        <Route path="/teams" element={<Layout><TeamsPage /></Layout>} />
        <Route path="/users" element={<Layout><UsersPage /></Layout>} />
        <Route path="/leave" element={<Layout><LeavePage /></Layout>} />
        <Route path="/pulsepay" element={<Layout><PulsePayPage /></Layout>} />
        <Route path="/payroll" element={<Layout><PayrollPage /></Layout>} />
        <Route path="/analytics" element={<Layout><AnalyticsPage /></Layout>} />
        <Route path="/onboarding" element={<Layout><OnboardingPage /></Layout>} />
        <Route path="/automation" element={<Layout><AutomationPage /></Layout>} />
        <Route path="/contracts" element={<Layout><ContractsPage /></Layout>} />
        <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
        <Route path="/integrations" element={<Layout><IntegrationsPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);